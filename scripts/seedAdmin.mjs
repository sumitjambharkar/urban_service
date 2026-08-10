import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { MONGODB_URI, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

if (!MONGODB_URI || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error(
        "Missing required env vars. Please set MONGODB_URI, ADMIN_EMAIL and ADMIN_PASSWORD."
    );
    process.exit(1);
}

const userSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

const run = async () => {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected");

    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
    const existing = await User.findOne({ email: ADMIN_EMAIL });

    if (existing) {
        existing.password = hashedPassword;
        await existing.save();
        console.log(`Admin user updated: ${ADMIN_EMAIL}`);
    } else {
        await User.create({ email: ADMIN_EMAIL, password: hashedPassword });
        console.log(`Admin user created: ${ADMIN_EMAIL}`);
    }

    await mongoose.disconnect();
};

run().catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
});

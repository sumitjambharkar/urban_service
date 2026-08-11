import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
    console.error("Missing required env var. Please set MONGODB_URI.");
    process.exit(1);
}

const serviceTileSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        icon: String,
        iconPublicId: String,
        href: String,
        order: Number,
        status: String,
    },
    { timestamps: true }
);

const ServiceTile = mongoose.models.ServiceTile || mongoose.model("ServiceTile", serviceTileSchema);

const existingTiles = [
    {
        href: "chandelier-cleaning",
        icon: "https://img.icons8.com/?size=100&id=SYs4RuvwBu7y&format=png&color=000000",
        title: "Chandelier Cleaning Services",
        description: "Restore the sparkle of every crystal, safely and thoroughly.",
    },
    {
        href: "home-cleaning",
        icon: "https://img.icons8.com/?size=100&id=iJzm3AFQCS4W&format=png&color=000000",
        title: "Home Cleaning Services",
        description: "Deep cleaning for every room, top to bottom.",
    },
    {
        href: "water-tank-cleaning",
        icon: "https://img.icons8.com/?size=100&id=vV7aJbTd9T9Z&format=png&color=000000",
        title: "Water Tank Cleaning",
        description: "Hygienic, contaminant-free water for your family.",
    },
    {
        href: "window-cleaning",
        icon: "https://img.icons8.com/?size=100&id=mgvawsY3nFyp&format=png&color=000000",
        title: "Window Cleaning Services",
        description: "Streak-free glass that lets the light in.",
    },
    {
        href: "home-interior",
        icon: "https://img.icons8.com/?size=100&id=WG2VAXzjULHJ&format=png&color=000000",
        title: "Home Interior Services",
        description: "Design and maintenance for pristine living spaces.",
    },
    {
        href: "house-painting",
        icon: "https://img.icons8.com/?size=100&id=9fS8epYOUvtK&format=png&color=000000",
        title: "House Painting Services",
        description: "Fresh, vibrant walls with quality eco-friendly paint.",
    },
    {
        href: "gym-trainers",
        icon: "https://img.icons8.com/?size=100&id=dClvTNYgYOkj&format=png&color=000000",
        title: "Home Fitness Gym Trainers",
        description: "Certified trainers with personalised workout plans.",
    },
    {
        href: "house-keeping-contract",
        icon: "https://img.icons8.com/?size=100&id=13246&format=png&color=000000",
        title: "Housekeeping / Office Boy Contract",
        description: "Reliable staffing contracts for homes & offices.",
    },
];

const run = async () => {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected");

    const lastTile = await ServiceTile.findOne().sort({ order: -1 });
    let order = lastTile ? lastTile.order + 1 : 0;
    let inserted = 0;
    let skipped = 0;

    for (const tile of existingTiles) {
        const existing = await ServiceTile.findOne({ href: tile.href });

        if (existing) {
            skipped += 1;
            continue;
        }

        await ServiceTile.create({
            ...tile,
            iconPublicId: null,
            status: "active",
            order,
        });
        order += 1;
        inserted += 1;
    }

    console.log(`Seed complete: ${inserted} inserted, ${skipped} already present.`);
    await mongoose.disconnect();
};

run().catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
});

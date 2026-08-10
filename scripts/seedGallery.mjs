import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
    console.error("Missing required env var. Please set MONGODB_URI.");
    process.exit(1);
}

const gallerySchema = new mongoose.Schema(
    {
        image: String,
        publicId: String,
        alt: String,
        order: Number,
    },
    { timestamps: true }
);

const Gallery = mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);

const CLOUD_BASE = "https://res.cloudinary.com/dclgpfheh/image/upload/";

const existingImages = [
    "v1734189738/New_Project_38_cyguqk.png",
    "v1734189736/New_Project_41_cimpqn.png",
    "v1734189740/New_Project_39_mwkn3s.png",
    "v1734189740/New_Project_40_wmtywn.png",
    "v1734189736/New_Project_43_stqafz.png",
    "v1734189732/New_Project_44_kkohwv.png",
    "v1734189727/New_Project_51_p5hyyr.png",
    "v1734189727/New_Project_52_eu2pdv.png",
    "v1734189731/New_Project_47_tgynyg.png",
    "v1734189718/New_Project_59_pz2hoe.png",
    "v1734189728/New_Project_49_eawlwa.png",
    "v1734189731/New_Project_48_mz1dny.png",
    "v1734189721/New_Project_57_ucntrc.png",
    "v1734189724/New_Project_56_oe1zwn.png",
    "v1734189721/New_Project_55_x3thvv.png",
    "v1734189719/New_Project_58_cibuk9.png",
    "v1734189718/New_Project_61_bkgqpl.png",
    "v1734189716/New_Project_60_mucyc2.png",
    "v1734189713/New_Project_w1eonf.jpg",
    "v1734189720/New_Project_63_xkigmg.png",
    "v1734189713/New_Project_66_duwbmh.png",
    "v1734189712/New_Project_67_pq7b2w.png",
    "v1734189712/New_Project_68_qjuvzc.png",
    "v1734191929/New_Project_35_qisruh.png",
    "v1734192446/New_Project_83_myv026.png",
    "v1734189710/New_Project_74_ca2sfr.png",
    "v1734189707/New_Project_71_zxbsp9.png",
    "v1734189711/New_Project_77_qpn1lr.png",
    "v1734189707/New_Project_78_o18ym6.png",
    "v1734192848/New_Project_84_trmpjc.png",
    "v1734189706/New_Project_80_s0l4hh.png",
    "v1734189707/New_Project_79_cyqwsc.png",
];

const run = async () => {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected");

    const lastImage = await Gallery.findOne().sort({ order: -1 });
    let order = lastImage ? lastImage.order + 1 : 0;
    let inserted = 0;
    let skipped = 0;

    for (const path of existingImages) {
        const image = `${CLOUD_BASE}${path}`;
        const existing = await Gallery.findOne({ image });

        if (existing) {
            skipped += 1;
            continue;
        }

        await Gallery.create({
            image,
            publicId: null,
            alt: "Chandelite work",
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

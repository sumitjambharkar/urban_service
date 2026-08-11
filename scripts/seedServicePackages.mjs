import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
    console.error("Missing required env var. Please set MONGODB_URI.");
    process.exit(1);
}

const serviceTileSchema = new mongoose.Schema(
    { title: String, description: String, icon: String, iconPublicId: String, href: String, order: Number, status: String },
    { timestamps: true }
);
const ServiceTile = mongoose.models.ServiceTile || mongoose.model("ServiceTile", serviceTileSchema);

const servicePackageSchema = new mongoose.Schema(
    {
        serviceTileId: mongoose.Schema.Types.ObjectId,
        title: String,
        slug: String,
        image: String,
        imagePublicId: String,
        description: String,
        price: String,
        priceOptions: [String],
        phone: String,
        whatsapp: String,
        supportNumber: String,
        freeHomeVisit: Boolean,
        detailsSummary: String,
        detailsBody: String,
        timing: String,
        order: Number,
        status: String,
    },
    { timestamps: true }
);
const ServicePackage = mongoose.models.ServicePackage || mongoose.model("ServicePackage", servicePackageSchema);

const CHANDELIER_DESC =
    "Chandelite is a professional cleaning service provider dedicated to delivering top-quality cleaning solutions for residential, commercial, and industrial spaces. With a focus on efficiency, reliability, and eco-friendly practices, Chandelite ensures every corner of your space is pristine and inviting";

const packagesByCategory = {
    "home-cleaning": [
        {
            title: "Classic - 1 BHK Home Cleaning",
            slug: "classic-1-bhk-home-cleaning",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197186/Leonardo_Phoenix_a_warm_and_inviting_illustration_of_a_smiling_0_z1pnjz.jpg",
            description: "Our Classic 1 BHK Home Cleaning Service is designed to give your home a fresh and spotless feel.",
            price: "₹ 1,800 To ₹ 2,500",
            priceOptions: ["2BHK : ₹ 2499 To 2999", "3BHK : ₹ 2999 To 3999"],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Living Room: Wall + Furniture + Bed + Window.\nBalcony: Grills + Window + Floor\nBathroom: Window + Toilet + Tiles + Basin + Floor.\nKitchen: Tiles + Gas + Exhaust Fan + Wall + Cabinet + Window.",
            timing: "3 - 5 Working Hours",
        },
        {
            title: "Bed Room Cleaning",
            slug: "bed-room-cleaning",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197125/Leonardo_Phoenix_A_welllit_and_organized_bedroom_with_a_plush_0_g3pxg9.jpg",
            description: "A clean bedroom promotes better sleep and a calming environment. Our Bedroom Cleaning Service ensures your personal space is spotless, organized, and hygienic.",
            price: "₹ 700 To ₹ 1,000",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "Terms & Conditions",
            detailsBody: "Basic Bedroom Cleaning (sweeping, mopping, dusting surfaces).",
            timing: "1 - 1:30 Working Hours",
        },
        {
            title: "Kitchen Cleaning",
            slug: "kitchen-cleaning",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197126/Leonardo_Phoenix_A_bright_and_airy_modern_home_with_a_flawless_0_qnnxai.jpg",
            description: "Keep your kitchen spotless and hygienic with our Kitchen Cleaning Service. A clean kitchen not only looks great but also ensures a healthier environment for cooking and food preparation.",
            price: "₹ 1,500 To ₹ 2,499",
            priceOptions: ["(chimney add) : ₹ 1,800", "(including appliance) : ₹ 2,499"],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Kitchen: Tiles + Gas + Exhaust Fan + Wall + Cabinet + Window.",
            timing: "3 - 5 Working Hours",
        },
        {
            title: "Balcony Cleaning",
            slug: "balcony-cleaning",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197125/Leonardo_Phoenix_A_serene_and_detailed_digital_illustration_of_0_plzk9y.jpg",
            description: "Transform your balcony into a sparkling clean and relaxing space with our Balcony Cleaning Service. We ensure every corner of your balcony is cleaned thoroughly, making it a perfect spot to unwind.",
            price: "₹ 1,000 To ₹ 2,500",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Balcony: Floor Cleaning + Railing and Grills + Windows and Doors + Furniture + Cobweb and Dust Removal + Optional Add-Ons (at extra cost).",
            timing: "1 - 1:30 Working Hours",
        },
        {
            title: "Bathroom Cleaning",
            slug: "bathroom-cleaning",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197123/Leonardo_Phoenix_A_tidy_and_welllit_bathroom_scene_depicting_t_0_fixqna.jpg",
            description: "A sparkling clean bathroom is essential for hygiene and comfort. Our Bathroom Cleaning Service ensures every corner of your bathroom is thoroughly cleaned and sanitized.",
            price: "₹ 800 To ₹ 1,500",
            priceOptions: [],
            phone: "+917021595850",
            whatsapp: "917021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Bathroom: Tiles and Walls + Toilets Sinks and Faucets + Shower Area Mirrors and Accessories + Floor Cleaning + Ventilation and Cobweb Removal.",
            timing: "1 - 1:30 Working Hours",
        },
        {
            title: "Sofa Cleaning",
            slug: "sofa-cleaning",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197123/Leonardo_Phoenix_A_tidy_living_room_scene_featuring_a_comforta_0_ecsgdb.jpg",
            description: "Restore the beauty and comfort of your sofa with our Sofa Cleaning Service. We use effective techniques to remove dirt, stains, and odors, leaving your sofa fresh and revitalized.",
            price: "₹ 500 To ₹ 1,000",
            priceOptions: [
                "(Near by) : (1 To 3 Seats ₹ 499) + (4 Seats ₹ 599) + (5 Seats ₹ 799) + (6 Seats ₹ 1,000)",
                "(Log Location) : (1 To 4 Seats ₹ 799) + (5 Seats ₹ 1,000) + (6 Seats ₹ 1,099)",
            ],
            phone: "+917021595850",
            whatsapp: "917021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Dry Vacuuming + Spot Cleaning + Shampooing + Leather Sofa Care + Sanitization + Drying.",
            timing: "1 - 1:30 Working Hours",
        },
        {
            title: "Office Cleaning",
            slug: "office-cleaning",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197124/Leonardo_Phoenix_A_tidy_office_space_featuring_a_row_of_polish_0_wbbsnr.jpg",
            description: "Our Office Cleaning Service ensures your workspace remains spotless, hygienic, and professional.",
            price: "₹ 3,000 To ₹ 4,500",
            priceOptions: [],
            phone: "+917021595850",
            whatsapp: "917021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Workstations and Desks + Floors and Carpets + Windows and Glass Panels + Common Areas + Bathrooms + Pantry and Kitchenette + Trash Management + Cobweb Removal and Dusting.",
            timing: "4 - 6 Working Hours",
        },
    ],
    "chandelier-cleaning": [
        {
            title: "Chandelier Cleaning : 1Ft x 2Ft",
            slug: "chandelier-cleaning-1ft-x-2ft",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197477/Leonardo_Phoenix_A_highly_detailed_and_realistic_illustration_0_beg9bv.jpg",
            description: CHANDELIER_DESC,
            price: "₹ 1,500 To ₹ 2,500",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Cleaning.",
            timing: "1 - 2 Working Hours",
        },
        {
            title: "Chandelier Cleaning : 3Ft x 4Ft",
            slug: "chandelier-cleaning-3ft-x-4ft",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197477/Leonardo_Phoenix_A_majestic_crystal_chandelier_hangs_from_a_hi_0_erphci.jpg",
            description: CHANDELIER_DESC,
            price: "₹ 1,800 To ₹ 2,800",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Cleaning.",
            timing: "1 - 3 Working Hours",
        },
        {
            title: "Chandelier Cleaning : 5Ft x 6Ft",
            slug: "chandelier-cleaning-5ft-x-6ft",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197477/Leonardo_Phoenix_A_delicate_crystal_chandelier_adorned_with_in_0_pp3liz.jpg",
            description: CHANDELIER_DESC,
            price: "₹ 2,800 To ₹ 3,500",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Cleaning.",
            timing: "1 - 4 Working Hours",
        },
    ],
    "water-tank-cleaning": [
        {
            title: "Less than 1000 litres",
            slug: "less-than-1000-litres",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734098436/New_Project_34_zdm4yl.png",
            description: 'Less than 1000 litres" typically describes storage containers, tanks, or systems with a volume capacity of under 1000 liters.',
            price: "₹ 800.00",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "Terms & Conditions",
            detailsBody: "Cleaning.",
            timing: "1 - 4 Working Hours",
        },
        {
            title: "1000 To 3000 litres",
            slug: "1000-to-3000-litres",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734098436/New_Project_34_zdm4yl.png",
            description: "Our professional water tank cleaning services for 1000 to 3000-litre tanks involve a comprehensive process to eliminate dirt, sediment, algae, and harmful bacteria, ensuring your water remains fresh and hygienic.",
            price: "₹ 1,200.00",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "Terms & Conditions",
            detailsBody: "Cleaning.",
            timing: "2 - 5 Working Hours",
        },
        {
            title: "3000 To 5000 litre",
            slug: "3000-to-5000-litre",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734098436/New_Project_34_zdm4yl.png",
            description: "Our professional 3000 to 5000-litre water tank cleaning service is designed to thoroughly clean and disinfect your tanks, removing dirt, sediment, algae, and harmful contaminants.",
            price: "₹ 1,999.00",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "Terms & Conditions",
            detailsBody: "Cleaning.",
            timing: "2 - 6 Working Hours",
        },
    ],
    "window-cleaning": [
        {
            title: "Comprehensive Window Cleaning",
            slug: "comprehensive-window-cleaning",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734255517/Leonardo_Phoenix_A_bright_and_airy_city_street_scene_showcasin_0_fiswhd.jpg",
            description: "Our Comprehensive Window Cleaning Service provides an all-in-one solution to ensure your windows are crystal clear, streak-free, and well-maintained. This service covers every aspect of window cleaning, from the glass surface to frames, grills, and surrounding areas.",
            price: "Low Cost",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Cleaning.",
            timing: "3 - 5 Working Hours",
        },
    ],
    "home-interior": [
        {
            title: "Comprehensive Home Interior",
            slug: "comprehensive-home-interior",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734255714/Leonardo_Phoenix_A_warm_and_inviting_interior_of_a_modern_home_0_qmihib.jpg",
            description: "Our Comprehensive Home Interior Services are designed to give your home a complete makeover by addressing every detail, ensuring cleanliness, comfort, and a renewed sense of space. Whether it's routine upkeep or a deep cleaning overhaul, we've got you covered.",
            price: "Low Cost",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Home Interior.",
            timing: "3 - 5 Working Hours",
        },
    ],
    "house-painting": [
        {
            title: "Comprehensive Home Painting",
            slug: "comprehensive-home-painting",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734255858/Leonardo_Phoenix_A_vibrant_and_inviting_illustration_of_a_comp_0_nixwkk.jpg",
            description: "Our Comprehensive Home Painting Service offers a complete solution for refreshing and transforming your living spaces with professional painting techniques and high-quality materials. Whether you need to refresh a single room or repaint your entire home, we provide services that ensure a clean, beautiful, and long-lasting finish.",
            price: "Low Cost",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Home Painting.",
            timing: "3 - 5 Working Hours",
        },
    ],
    "gym-trainers": [
        {
            title: "Home Personal Trainer",
            slug: "home-personal-trainer",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734255968/Leonardo_Phoenix_A_fit_and_energetic_male_personal_trainer_in_0_kbnxzv.jpg",
            description: "Home Personal Trainer is a fitness professional who provides personalized workout sessions in the comfort of a client's home. They offer one-on-one guidance, creating customized fitness plans based on the client's goals, fitness level, and any specific needs or limitations.",
            price: "Low Cost",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "Check Details",
            detailsBody:
                "Near By Andheri West : (1 Session = ₹399) + (12 Session = ₹4,499) + (Monthly Session = ₹5,970)\n(3 Months Session = ₹18,000) + (6 Months Session = ₹32,400) + (9 Months Session = ₹45,900)\n(Yearly Session = ₹46,800)\n(Monthly = 3 Day Free) (3 Months = 5 Day Free) (6 Months = 5 Day Free) (9 Months = 8 Day Free) (Yearly = 8 Day Free)\n\nLong Location : (1 Session = ₹499) + (12 Session = ₹5,999) + (Monthly Session = ₹6,900)\n(3 Months Session = ₹20,700) + (6 Months Session = ₹34,200) + (9 Months Session = ₹48,400)\n(Yearly Session = ₹50,400)\n(Monthly = 3 Day Free) (3 Months = 5 Day Free) (6 Months = 5 Day Free) (9 Months = 8 Day Free) (Yearly = 8 Day Free)",
            timing: "",
        },
    ],
    "house-keeping-contract": [
        {
            title: "Housekeeping & Office Boy Contracts",
            slug: "housekeeping-office-boy-contracts",
            image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734256280/Leonardo_Phoenix_A_vintageinspired_illustration_of_two_bespect_0_aeeg42.jpg",
            description: "Our Housekeeping & Office Boy Contract Services provide dedicated and reliable staff to manage the day-to-day maintenance of your home or office space. With a focus on cleanliness, organization, and efficient assistance, we ensure that your environment remains pleasant, professional, and stress-free.",
            price: "Low Cost",
            priceOptions: [],
            phone: "7021595850",
            whatsapp: "7021595850",
            supportNumber: "7021595850",
            detailsSummary: "We Do",
            detailsBody: "Housekeeping & Office Boy Contracts agents.",
            timing: "",
        },
    ],
};

const run = async () => {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected");

    let inserted = 0;
    let skipped = 0;

    for (const [href, packages] of Object.entries(packagesByCategory)) {
        const tile = await ServiceTile.findOne({ href });
        if (!tile) {
            console.warn(`Skipping "${href}": no matching service tile found. Run seed:service-tiles first.`);
            continue;
        }

        const lastPackage = await ServicePackage.findOne({ serviceTileId: tile._id }).sort({ order: -1 });
        let order = lastPackage ? lastPackage.order + 1 : 0;

        for (const pkg of packages) {
            const existing = await ServicePackage.findOne({ serviceTileId: tile._id, slug: pkg.slug });

            if (existing) {
                skipped += 1;
                continue;
            }

            await ServicePackage.create({
                ...pkg,
                serviceTileId: tile._id,
                imagePublicId: null,
                freeHomeVisit: true,
                status: "active",
                order,
            });
            order += 1;
            inserted += 1;
        }
    }

    console.log(`Seed complete: ${inserted} inserted, ${skipped} already present.`);
    await mongoose.disconnect();
};

run().catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
});

import React from "react";
import {
  productDetailClass,
  productImagesClass,
  mainImageClass,
  productInfoClass,
  productInfoTitleClass,
  skuClass,
  priceClass,
  actionsWrapperClass,
  actionsRowClass,
  addToCartClass,
  additionalInfoClass,
} from "@/app/uiClasses";

export const metadata  = {
  title:"Home Cleaning Services | Eco-Friendly Solutions by Chandelite",
  description:"Transform your living space with Chandelite's professional home cleaning services. We deliver spotless results using sustainable"
}

const plans = [
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197186/Leonardo_Phoenix_a_warm_and_inviting_illustration_of_a_smiling_0_z1pnjz.jpg",
    title: (
      <>
        <span className="text-gold-dark">Classic</span> - 1 Bhk Home Cleaning
      </>
    ),
    description:
      "Our Classic 1 BHK Home Cleaning Service is designed to give your home a fresh and spotless feel.",
    hasSku: false,
    price: " ₹ 1,800 To ₹ 2,500",
    extraLines: ["2BHK : ₹ 2499 To 2999 ", "3BHK : ₹ 2999 To 3999"],
    phoneTel: "tel:7021595850",
    phoneWhatsapp: "https://api.whatsapp.com/send?phone=7021595850",
    supportNumber: "7021595850",
    detailsSummary: "We Do ",
    detailsBody: (
      <>
        <strong>Living Room:</strong> Wall + Furniture + Bed + Window.
        <br></br>
        <strong>Balcony:</strong>Grills + Window + Floor<br></br>
        <strong>Bathroom:</strong>Window + Toilet + Tiles + Basin +
        Floor.<br></br>
        <strong>Kitchen:</strong> Tiles + Gas + Exhaust Fan + Wall +
        Cabinet + Window.
      </>
    ),
    timing: "3 - 5 Working Hours",
  },
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197125/Leonardo_Phoenix_A_welllit_and_organized_bedroom_with_a_plush_0_g3pxg9.jpg",
    title: "Bed Room Cleaning",
    description:
      "A clean bedroom promotes better sleep and a calming environment. Our Bedroom Cleaning Service ensures your personal space is spotless, organized, and hygienic.",
    hasSku: true,
    price: " ₹ 700 To ₹ 1,000",
    extraLines: [],
    phoneTel: "tel:7021595850",
    phoneWhatsapp: "https://api.whatsapp.com/send?phone=7021595850",
    supportNumber: "7021595850",
    detailsSummary: "Terms & Conditions",
    detailsBody: <p>Basic Bedroom Cleaning (sweeping, mopping, dusting surfaces):</p>,
    timing: "1 - 1:30 Working Hours",
  },
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197126/Leonardo_Phoenix_A_bright_and_airy_modern_home_with_a_flawless_0_qnnxai.jpg",
    title: "Kitchen Cleaning",
    description:
      "Keep your kitchen spotless and hygienic with our Kitchen Cleaning Service. A clean kitchen not only looks great but also ensures a healthier environment for cooking and food preparation.",
    hasSku: false,
    price: " ₹ 1,500 To ₹ 2,499",
    extraLines: ["(chimney add) : ₹ 1,800 ", "(including appliance) : ₹ 2,499"],
    phoneTel: "tel:7021595850",
    phoneWhatsapp: "https://api.whatsapp.com/send?phone=7021595850",
    supportNumber: "7021595850",
    detailsSummary: "We Do ",
    detailsBody: (
      <p>
        {" "}
        <strong>Kitchen:</strong> Tiles + Gas + Exhaust Fan + Wall +
        Cabinet + Window.
      </p>
    ),
    timing: "3 - 5 Working Hours",
  },
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197125/Leonardo_Phoenix_A_serene_and_detailed_digital_illustration_of_0_plzk9y.jpg",
    title: "Balcony Cleaning",
    description:
      "Transform your balcony into a sparkling clean and relaxing space with our Balcony Cleaning Service. We ensure every corner of your balcony is cleaned thoroughly, making it a perfect spot to unwind.",
    hasSku: false,
    price: " ₹ 1,000 To ₹ 2,500",
    extraLines: [],
    phoneTel: "tel:7021595850",
    phoneWhatsapp: "https://api.whatsapp.com/send?phone=7021595850",
    supportNumber: "7021595850",
    detailsSummary: "We Do ",
    detailsBody: (
      <>
        <strong>Balcony:</strong>{" "}
        <p>
          Floor Cleaning + Railing and Grills + Windows and Doors + Furniture + Cobweb and Dust Removal

 + Optional Add-Ons (at extra cost):
        </p>
      </>
    ),
    timing: "1 -1:30 Working Hours",
  },
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197123/Leonardo_Phoenix_A_tidy_and_welllit_bathroom_scene_depicting_t_0_fixqna.jpg",
    title: "Bathroom Cleaning",
    description:
      "A sparkling clean bathroom is essential for hygiene and comfort. Our Bathroom Cleaning Service ensures every corner of your bathroom is thoroughly cleaned and sanitized.",
    hasSku: false,
    price: " ₹ 800 To ₹ 1,500",
    extraLines: [],
    phoneTel: "tel:+917021595850",
    phoneWhatsapp: "https://api.whatsapp.com/send?phone=917021595850",
    supportNumber: "7021595850",
    detailsSummary: "We Do ",
    detailsBody: (
      <>
        <strong>Bathroom :</strong>
        <p>
          Tiles and Walls + Toilets Sinks and Faucets + Shower Area
          Mirrors and Accessories + Floor Cleaning + Ventilation and
          Cobweb Removal
        </p>
      </>
    ),
    timing: "1 -1:30 Working Hours",
  },
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197123/Leonardo_Phoenix_A_tidy_living_room_scene_featuring_a_comforta_0_ecsgdb.jpg",
    title: "Sofa Cleaning",
    description:
      "Restore the beauty and comfort of your sofa with our Sofa Cleaning Service. We use effective techniques to remove dirt, stains, and odors, leaving your sofa fresh and revitalized.",
    hasSku: false,
    price: " ₹ 500 To 1,000",
    extraLines: [
      "(Near by) : (1 To 3 Seats ₹ 499) + (4 Seats ₹ 599) + (5 Seats ₹ 799) + (6 Seats ₹ 1,000)",
      <>(Log Loction) : (1 To 4 Seats ₹ 799) + (5 Seats ₹1,000) + (6 Seats ₹1,099){" "}</>,
    ],
    phoneTel: "tel:+917021595850",
    phoneWhatsapp: "https://api.whatsapp.com/send?phone=917021595850",
    supportNumber: "7021595850",
    detailsSummary: "We Do ",
    detailsBody: (
      <p>Dry Vacuuming + Spot Cleaning + Shampooing + Leather Sofa Care + Sanitization + Drying

</p>
    ),
    timing: "1 -1:30 Working Hours",
  },
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197124/Leonardo_Phoenix_A_tidy_office_space_featuring_a_row_of_polish_0_wbbsnr.jpg",
    title: "Office Cleaning",
    description: (
      <>
        {" "}
        Our Office Cleaning Service ensures your workspace remains spotless,
        hygienic, and professional.
      </>
    ),
    hasSku: true,
    price: " ₹ 3,000 To ₹ 4,500",
    extraLines: [],
    phoneTel: "tel:+917021595850",
    phoneWhatsapp: "https://api.whatsapp.com/send?phone=917021595850",
    supportNumber: "7021595850",
    detailsSummary: "We Do",
    detailsBody: (
      <p>
        Workstations and Desks + Floors and Carpets + Windows and
        Glass Panels + Common Areas + Bathrooms + Pantry and
        Kitchenette + Trash Management + Cobweb Removal and Dusting:
      </p>
    ),
    timing: "4 - 6 Working Hours",
  },
];

const page = () => {
  return (
    <div>
      {plans.map((plan, index) => (
        <div className={productDetailClass} key={index}>
          <div className={productImagesClass}>
            <img
              src={plan.image}
              alt="Main Product Image"
              className={mainImageClass}
            />
          </div>
          <div className={productInfoClass}>
            <h1 className={productInfoTitleClass}>{plan.title}</h1>
            <p className={plan.hasSku ? skuClass : undefined}>{plan.description}</p>
            <p className={priceClass}>{plan.price}</p>
            {plan.extraLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            <div className={actionsWrapperClass}>
              <div className={actionsRowClass}>
                <button className={addToCartClass}><a href={plan.phoneTel}>Call Now</a></button>
                <button className={addToCartClass}><a href={plan.phoneWhatsapp}>Contact Us</a></button>
              </div>
            </div>
            <div className={additionalInfoClass}>
              <p>
                <strong>Free Home Visit</strong>
              </p>
              <p>
                <strong>Customer Support Number:</strong> {plan.supportNumber}
              </p>
              <p>
                <details>
                  <summary>
                    <strong>{plan.detailsSummary}</strong>
                  </summary>
                  {plan.detailsBody}
                </details>
              </p>
              <p>
                <strong>Timing:</strong> {plan.timing}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;

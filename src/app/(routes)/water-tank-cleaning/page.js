import React from 'react'
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
} from '@/app/uiClasses'

export const metadata  = {
  title:"Water Tank Cleaning Services | Hygienic Solutions by Chandelite",
  description:"Ensure clean and safe water with Chandelite's professional water tank cleaning services. Our eco-friendly methods effectively remove contaminants"
}

const plans = [
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734098436/New_Project_34_zdm4yl.png",
    title: "Less than 1000 litres",
    sku: 'Less than 1000 litres" typically describes storage containers, tanks, or systems with a volume capacity of under 1000 liters.',
    price: "₹ 800.00",
    timing: "1 - 4 Working Hours",
  },
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734098436/New_Project_34_zdm4yl.png",
    title: " 1000 To 3000 litres",
    sku: "Our professional water tank cleaning services for 1000 to 3000-litre tanks involve a comprehensive process to eliminate dirt, sediment, algae, and harmful bacteria, ensuring your water remains fresh and hygienic.",
    price: "₹ 1200.00",
    timing: "2 - 5 Working Hours",
  },
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734098436/New_Project_34_zdm4yl.png",
    title: "3000 To 5000 litre",
    sku: "Our professional 3000 to 5000-litre water tank cleaning service is designed to thoroughly clean and disinfect your tanks, removing dirt, sediment, algae, and harmful contaminants.",
    price: "₹ 1,999.00",
    timing: "2 - 6 Working Hours",
  },
]

const page = () => {
  return (
    <div>
      {plans.map((plan) => (
        <div className={productDetailClass} key={plan.title}>
          <div className={productImagesClass}>
            <img
              src={plan.image}
              alt="Main Product Image"
              className={mainImageClass}
            />
          </div>
          <div className={productInfoClass}>
            <h1 className={productInfoTitleClass}>{plan.title}</h1>
            <p className={skuClass}>{plan.sku}</p>
            <p className={priceClass}>{plan.price}</p>

            <div className={actionsWrapperClass}>
              <div className={actionsRowClass}>
                <button className={addToCartClass}><a href="tel:7021595850">Call Now</a></button>
                <button className={addToCartClass}><a  href="https://api.whatsapp.com/send?phone=7021595850">Contact Us</a></button>
              </div>
            </div>
            <div className={additionalInfoClass}>
              <p>
                <strong>Free Home Visit</strong>
              </p>
              <p>
                <strong>Customer Support Number:</strong> 7021595850
              </p>
              <p>
                <details>
                  <summary>
                    <strong>Terms & Conditions</strong>
                  </summary>
                  <p>
                   Cleaning
                  </p>
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
  )
}

export default page

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
  title:"Chandelier Cleaning Services | Sparkling Results by Chandelite",
  description:"Restore the brilliance of your chandeliers with Chandelite's expert cleaning services. We use eco-friendly methods to ensure your chandeliers shine like new without harming the environment."
}

const plans = [
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197477/Leonardo_Phoenix_A_highly_detailed_and_realistic_illustration_0_beg9bv.jpg",
    title: "Chandelier Cleaning  : 1Ft x 2Ft",
    price: "₹ 1,500 To ₹ 2,500",
    timing: "1 - 2 Working Hours",
  },
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197477/Leonardo_Phoenix_A_majestic_crystal_chandelier_hangs_from_a_hi_0_erphci.jpg",
    title: "Chandelier Cleaning  : 3Ft x 4Ft",
    price: "₹ 1,800 To ₹ 2,800",
    timing: "1 - 3 Working Hours",
  },
  {
    image: "https://res.cloudinary.com/dclgpfheh/image/upload/v1734197477/Leonardo_Phoenix_A_delicate_crystal_chandelier_adorned_with_in_0_pp3liz.jpg",
    title: "Chandelier Cleaning  : 5Ft x 6Ft",
    price: "₹ 2,800 To ₹ 3,500",
    timing: "1 - 4 Working Hours",
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
            <p className={skuClass}>
              Chandelite is a professional cleaning service provider dedicated to delivering top-quality cleaning solutions for residential, commercial, and industrial spaces. With a focus on efficiency, reliability, and eco-friendly practices, Chandelite ensures every corner of your space is pristine and inviting
            </p>
            <p className={priceClass}>{plan.price}</p>

            <div className={actionsWrapperClass}>
              <div className={actionsRowClass}>
                <button className={addToCartClass}><a href="tel:7021595850">Call Now</a></button>
                <button className={addToCartClass}><a href="https://api.whatsapp.com/send?phone=7021595850">Contact Us</a></button>
              </div>
            </div>
            <div className={additionalInfoClass}>
              <p>
                <strong>Free Home Visit</strong>
              </p>
              <p>
                <strong>Customer Support No:</strong> 7021595850
              </p>
              <p>
                <details>
                  <summary>
                    <strong>We Do </strong>
                  </summary>
                  <p>cleaning</p>
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

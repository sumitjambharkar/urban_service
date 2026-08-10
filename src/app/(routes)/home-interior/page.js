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
  title:"Home Interior Services | Pristine Spaces by Chandelite",
  description:"Elevate your living space with Chandelite's Home Interior Services. From deep cleaning to eco-friendly maintenance, we create spotless"
}


const page = () => {
  return (
    <div>
        <div className={productDetailClass}>
        <div className={productImagesClass}>
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734255714/Leonardo_Phoenix_A_warm_and_inviting_interior_of_a_modern_home_0_qmihib.jpg"
            alt="Main Product Image"
            className={mainImageClass}
          />
        </div>
        <div className={productInfoClass}>
          <h1 className={productInfoTitleClass}>
          Comprehensive Home Interior</h1>
          <p className={skuClass}>Our Comprehensive Home Interior Services are designed to give your home a complete makeover by addressing every detail, ensuring cleanliness, comfort, and a renewed sense of space. Whether it's routine upkeep or a deep cleaning overhaul, we've got you covered.</p>
          <p className={priceClass}>Low Cost</p>

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
              <strong>Contact Support Number :</strong> 7021595850
            </p>
            <p>
            <details>
                <summary>
                  <strong>We Do </strong>
                </summary>
                <p>Home Interior</p>

              </details>
            </p>
            <p>
              <strong>Timing:</strong> 3 - 5 Working Hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

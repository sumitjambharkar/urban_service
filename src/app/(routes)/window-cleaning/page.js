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
  title:"Window Cleaning Services | Streak-Free Shine by Chandelite",
  description:"Let the light in with Chandelite's professional window cleaning services. We use eco-friendly solutions to deliver crystal-clear"
}

const page = () => {
  return (
    <div>
      <div className={productDetailClass}>
        <div className={productImagesClass}>
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734255517/Leonardo_Phoenix_A_bright_and_airy_city_street_scene_showcasin_0_fiswhd.jpg"
            alt="Main Product Image"
            className={mainImageClass}
          />
        </div>
        <div className={productInfoClass}>
          <h1 className={productInfoTitleClass}>Comprehensive Window Cleaning</h1>
          <p className={skuClass}>Our Comprehensive Window Cleaning Service provides an all-in-one solution to ensure your windows are crystal clear, streak-free, and well-maintained. This service covers every aspect of window cleaning, from the glass surface to frames, grills, and surrounding areas.</p>
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
                <p>cleaning</p>

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

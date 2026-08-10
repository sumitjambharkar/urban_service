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
  title:"House Painting Services | Fresh & Vibrant Walls by Chandelite",
  description:"Transform your home with Chandelite's professional house painting services. Our expert team uses eco-friendly paints to bring vibrant"
}


const page = () => {
  return (
    <div>
          <div className={productDetailClass}>
        <div className={productImagesClass}>
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734255858/Leonardo_Phoenix_A_vibrant_and_inviting_illustration_of_a_comp_0_nixwkk.jpg"
            alt="Main Product Image"
            className={mainImageClass}
          />
        </div>
        <div className={productInfoClass}>
          <h1 className={productInfoTitleClass}>
          Comprehensive Home Painting

</h1>
          <p className={skuClass}>Our Comprehensive Home Painting Service offers a complete solution for refreshing and transforming your living spaces with professional painting techniques and high-quality materials. Whether you need to refresh a single room or repaint your entire home, we provide services that ensure a clean, beautiful, and long-lasting finish</p>
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
                <p>Home Painting</p>

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

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
  title:"Housekeeping Contract Services | Professional Solutions by Chandelite",
  description:"Streamline your cleaning routine with Chandelite's housekeeping contract services. Our tailored solutions offer reliable"
}



const page = () => {
  return (
    <div>
    <div className={productDetailClass}>
        <div className={productImagesClass}>
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734256280/Leonardo_Phoenix_A_vintageinspired_illustration_of_two_bespect_0_aeeg42.jpg"
            alt="Main Product Image"
            className={mainImageClass}
          />
        </div>
        <div className={productInfoClass}>
          <h1 className={productInfoTitleClass}>
          Housekeeping & Office Boy Contracts

</h1>
          <p className={skuClass}>Our Housekeeping & Office Boy Contract Services provide dedicated and reliable staff to manage the day-to-day maintenance of your home or office space. With a focus on cleanliness, organization, and efficient assistance, we ensure that your environment remains pleasant, professional, and stress-free.</p>
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
                <p>Housekeeping & Office Boy Contracts agents
                </p>

              </details>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page

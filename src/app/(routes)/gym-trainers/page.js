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
  title:"Gym Trainers | Expert Fitness Coaching by Chandelite",
  description:"Achieve your fitness goals with Chandelite's certified gym trainers. Our experienced professionals provide personalized workout plans and guidance to help you build strength"
}

const page = () => {
  return (
    <div>
      <div className={productDetailClass}>
        <div className={productImagesClass}>
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734255968/Leonardo_Phoenix_A_fit_and_energetic_male_personal_trainer_in_0_kbnxzv.jpg"
            alt="Main Product Image"
            className={mainImageClass}
          />
        </div>
        <div className={productInfoClass}>
          <h1 className={productInfoTitleClass}>
          Home Personal Trainer

</h1>
          <p className={skuClass}>  Home Personal Trainer is a fitness professional who provides personalized workout sessions in the comfort of a client's home. They offer one-on-one guidance, creating customized fitness plans based on the client's goals, fitness level, and any specific needs or limitations.</p>
          <p className={priceClass}>Low Cost</p>

          <div className={actionsWrapperClass}>
            <div className={actionsRowClass}>
            <button className={addToCartClass}><a href="tel:7021595850">Call Now</a></button>
            <button className={addToCartClass}><a  href="https://api.whatsapp.com/send?phone=7021595850">Contact Us</a></button> </div>
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
                  <strong>Check Details</strong>
                </summary>
                <p><strong>Near By Andheri West </strong> : (1 Session = ₹399) + (12 Session = ₹4,499)
                   + ( Monthly Session = ₹5970)  <br />(3 Months Session = ₹18,000)
                    + (6 Months Session = ₹32,400) + ( 9 Months Session = ₹45,900)
                     <br />(Yearly Session =  ₹46,800) <br /> ( Monthly = 3Day Free )
                     ( 3Months = 5Day Free ) ( 6Months = 5Day free )
                     ( 9Months = 8Day Free )<br></br> ( yearly = 8Day Free ) <br /><br />


                    <strong>Long Location</strong>  : (1 Session = ₹499) + (12 Session = ₹5,999)
                     + ( Monthly Session = ₹6,900)  <br />(3 Months Session = ₹20,700)
                      + (6 Months Session = ₹34,200) + ( 9 Months Session = ₹48,400)
                       <br />(Yearly Session =  ₹50,400) <br /> ( Monthly = 3Day Free )
                       ( 3Months = 5Day Free ) ( 6Months = 5Day free )
                       ( 9Months = 8Day Free )<br></br> ( yearly = 8Day Free )  </p>

              </details>
            </p>

          </div>
        </div>
      </div>
  </div>
  )
}

export default page

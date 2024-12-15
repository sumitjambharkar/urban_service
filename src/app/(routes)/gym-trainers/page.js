import React from 'react'

const page = () => {
  return (
    <div>
      <div class="product-detail">
        <div class="product-images">
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734255968/Leonardo_Phoenix_A_fit_and_energetic_male_personal_trainer_in_0_kbnxzv.jpg"
            alt="Main Product Image"
            class="main-image"
          />
        </div>
        <div class="product-info">
          <h1>
          Home Personal Trainer

</h1>
          <p class="sku">Our Home Personal Trainer Service offers personalized fitness coaching in the comfort of your home. Whether you're aiming to lose weight, build strength, improve flexibility, or boost overall fitness, our certified trainers provide expert guidance, motivation, and support to help you achieve your health goals.</p>
          <p class="price">Low Cost</p>
       
          <div class="actions_wrraper">
            <div class="actions">
              <button class="add-to-cart">Call Now</button>
              <button class="add-to-cart">Contact Us</button>
            </div>
          </div>
          <div class="additional-info">
            <p>
              <strong>Free Home Visit</strong>
            </p>
            <p>
              <strong>Contact Support Number :</strong> 9323969471
            </p>
            <p>
            <details>
                <summary>
                  <strong>We Do </strong>
                </summary>
                <p>Home Personal Trainer Services</p>
   
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
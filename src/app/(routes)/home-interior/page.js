import React from 'react'
export const metadata  = {
  title:"Home Interior Services | Pristine Spaces by CleanNation",
  description:"Elevate your living space with CleanNation's Home Interior Services. From deep cleaning to eco-friendly maintenance, we create spotless"
}


const page = () => {
  return (
    <div>
        <div class="product-detail">
        <div class="product-images">
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734255714/Leonardo_Phoenix_A_warm_and_inviting_interior_of_a_modern_home_0_qmihib.jpg"
            alt="Main Product Image"
            class="main-image"
          />
        </div>
        <div class="product-info">
          <h1>
          Comprehensive Home Interior</h1>
          <p class="sku">Our Comprehensive Home Interior Services are designed to give your home a complete makeover by addressing every detail, ensuring cleanliness, comfort, and a renewed sense of space. Whether it's routine upkeep or a deep cleaning overhaul, we've got you covered.</p>
          <p class="price">Low Cost</p>
       
          <div class="actions_wrraper">
            <div class="actions">
            <button class="add-to-cart"><a href="tel:9323969471">Call Now</a></button>
            <button class="add-to-cart"><a  href="https://api.whatsapp.com/send?phone=7021595850">Contact Us</a></button>
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
import React from 'react'
export const metadata  = {
  title:"Home Interior Services | Pristine Spaces by Chandelite",
  description:"Elevate your living space with Chandelite's Home Interior Services. From deep cleaning to eco-friendly maintenance, we create spotless"
}


const page = () => {
  return (
    <div>
        <div className="product-detail">
        <div className="product-images">
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734255714/Leonardo_Phoenix_A_warm_and_inviting_interior_of_a_modern_home_0_qmihib.jpg"
            alt="Main Product Image"
            className="main-image"
          />
        </div>
        <div className="product-info">
          <h1>
          Comprehensive Home Interior</h1>
          <p className="sku">Our Comprehensive Home Interior Services are designed to give your home a complete makeover by addressing every detail, ensuring cleanliness, comfort, and a renewed sense of space. Whether it's routine upkeep or a deep cleaning overhaul, we've got you covered.</p>
          <p className="price">Low Cost</p>

          <div className="actions_wrraper">
            <div className="actions">
            <button className="add-to-cart"><a href="tel:7021595850">Call Now</a></button>
            <button className="add-to-cart"><a  href="https://api.whatsapp.com/send?phone=7021595850">Contact Us</a></button>
            </div>
          </div>
          <div className="additional-info">
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

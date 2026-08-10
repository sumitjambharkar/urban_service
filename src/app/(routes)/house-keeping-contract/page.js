import React from 'react'

export const metadata  = {
  title:"Housekeeping Contract Services | Professional Solutions by Chandelite",
  description:"Streamline your cleaning routine with Chandelite's housekeeping contract services. Our tailored solutions offer reliable"
}



const page = () => {
  return (
    <div>
    <div className="product-detail">
        <div className="product-images">
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734256280/Leonardo_Phoenix_A_vintageinspired_illustration_of_two_bespect_0_aeeg42.jpg"
            alt="Main Product Image"
            className="main-image"
          />
        </div>
        <div className="product-info">
          <h1>
          Housekeeping & Office Boy Contracts

</h1>
          <p className="sku">Our Housekeeping & Office Boy Contract Services provide dedicated and reliable staff to manage the day-to-day maintenance of your home or office space. With a focus on cleanliness, organization, and efficient assistance, we ensure that your environment remains pleasant, professional, and stress-free.</p>
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
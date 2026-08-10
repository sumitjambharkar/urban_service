import React from 'react'
export const metadata  = {
  title:"Chandelier Cleaning Services | Sparkling Results by Chandelite",
  description:"Restore the brilliance of your chandeliers with Chandelite's expert cleaning services. We use eco-friendly methods to ensure your chandeliers shine like new without harming the environment."
}

const page = () => {
  return (
    <div>

      <div className="product-detail">
        <div className="product-images">
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734197477/Leonardo_Phoenix_A_highly_detailed_and_realistic_illustration_0_beg9bv.jpg"
            alt="Main Product Image"
            className="main-image"
          />
        </div>
        <div className="product-info">
          <h1> Chandelier Cleaning  : 1Ft x 2Ft </h1>
          <p className="sku">Chandelite is a professional cleaning service provider dedicated to delivering top-quality cleaning solutions for residential, commercial, and industrial spaces. With a focus on efficiency, reliability, and eco-friendly practices, Chandelite ensures every corner of your space is pristine and inviting
          </p>
          <p className="price">₹ 1,500 To ₹ 2,500</p>

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
              <strong>Timing:</strong> 1 - 2 Working Hours
            </p>
          </div>
        </div>
      </div>


      <div className="product-detail">
        <div className="product-images">
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734197477/Leonardo_Phoenix_A_majestic_crystal_chandelier_hangs_from_a_hi_0_erphci.jpg"
            alt="Main Product Image"
            className="main-image"
          />
        </div>
        <div className="product-info">
          <h1> Chandelier Cleaning  : 3Ft x 4Ft </h1>
          <p className="sku">Chandelite is a professional cleaning service provider dedicated to delivering top-quality cleaning solutions for residential, commercial, and industrial spaces. With a focus on efficiency, reliability, and eco-friendly practices, Chandelite ensures every corner of your space is pristine and inviting
          </p>
          <p className="price">₹ 1,800 To ₹ 2,800</p>

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
              <strong>Timing:</strong> 1 - 3 Working Hours
            </p>
          </div>
        </div>
      </div>
      <div className="product-detail">
        <div className="product-images">
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734197477/Leonardo_Phoenix_A_delicate_crystal_chandelier_adorned_with_in_0_pp3liz.jpg"
            alt="Main Product Image"
            className="main-image"
          />
        </div>
        <div className="product-info">
          <h1> Chandelier Cleaning  : 5Ft x 6Ft </h1>
          <p className="sku">Chandelite is a professional cleaning service provider dedicated to delivering top-quality cleaning solutions for residential, commercial, and industrial spaces. With a focus on efficiency, reliability, and eco-friendly practices, Chandelite ensures every corner of your space is pristine and inviting

          </p>
          <p className="price">₹ 2,800 To ₹ 3,500</p>

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
              <strong>Timing:</strong> 1 - 4 Working Hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

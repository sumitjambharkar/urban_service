import React from 'react'
export const metadata  = {
  title:"House Painting Services | Fresh & Vibrant Walls by CleanNation",
  description:"Transform your home with CleanNation's professional house painting services. Our expert team uses eco-friendly paints to bring vibrant"
}


const page = () => {
  return (
    <div>
          <div class="product-detail">
        <div class="product-images">
          <img
            src="https://res.cloudinary.com/dclgpfheh/image/upload/v1734255858/Leonardo_Phoenix_A_vibrant_and_inviting_illustration_of_a_comp_0_nixwkk.jpg"
            alt="Main Product Image"
            class="main-image"
          />
        </div>
        <div class="product-info">
          <h1>
          Comprehensive Home Painting

</h1>
          <p class="sku">Our Comprehensive Home Painting Service offers a complete solution for refreshing and transforming your living spaces with professional painting techniques and high-quality materials. Whether you need to refresh a single room or repaint your entire home, we provide services that ensure a clean, beautiful, and long-lasting finish</p>
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
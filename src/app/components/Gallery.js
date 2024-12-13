import Link from "next/link"

const Gallery = () => {
  
  return (
    <div>
      <h4 className='servicetitle' >Our Gallery</h4>
      <div className="btng-v">
      <button class="button-5" role="button"><Link href='gallery'>Images</Link></button>

      <button class="button-5" role="button"><Link href='video'>Videos</Link></button>

      </div>
      <section class="gallery">
  <div class="image">
    <img src="https://res.cloudinary.com/dclgpfheh/image/upload/v1733851921/New_Project_17_yv7ly8.png" alt="image" />
  </div>
  <div class="image">
    <img src="https://res.cloudinary.com/dclgpfheh/image/upload/v1733851921/WhatsApp_Image_2024-06-10_at_3.11.32_PM_j3ftyv.jpg" alt="image" />
  </div>
  <div class="image">
    <img src="https://res.cloudinary.com/dclgpfheh/image/upload/v1733851922/6c8789f3-1867-4eb6-bf5e-e51ed4d27ea1_szxpje.jpg" alt="image" />
  </div>
  <div class="image">
    <img src="https://res.cloudinary.com/dclgpfheh/image/upload/v1733851921/WhatsApp_Image_2024-06-10_at_7.33.24_PM_bunahi.jpg" alt="image" />
  </div>
  <div class="image">
    <img src="https://res.cloudinary.com/dclgpfheh/image/upload/v1733851921/IMG-20241016-WA0000_i9oxrm.jpg" alt="image" />
  </div>
  <div class="image">
    <img src="https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="image" />
  </div>
  <div class="image">
    <img src="https://res.cloudinary.com/dclgpfheh/image/upload/v1733851921/WhatsApp_Image_2024-06-10_at_7.33.24_PM_bunahi.jpg" alt="image" />
  </div>
  <div class="image">
    <img src="https://res.cloudinary.com/dclgpfheh/image/upload/v1733851921/IMG-20241016-WA0000_i9oxrm.jpg" alt="image" />
  </div>

</section>
    </div>
  )
}

export default Gallery
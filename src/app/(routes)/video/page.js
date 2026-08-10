import Link from 'next/link'
import React from 'react'
export const metadata  = {
  title:"Video Gallery | Chandelite's Cleaning & Service Showcase",
  description:"Explore Chandelite's video gallery for informative and inspiring content on our cleaning and home services."
}



const page = () => {
    
  return (
    <div>
        <div className="btng-v">
      <button className="button-5" role="button"><Link href='gallery'>Images</Link></button>

      <button className="button-5" role="button"><Link href='video'>Videos</Link></button>

      </div>

 
      <div className="gallery">
        <div className="gallery-item">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/C8XpUUxUFyY?si=gGiwJbpbxud6zjz3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="gallery-item">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OFLo-ZwZ7xM?si=jvBJgBlLd1eK9ZQ_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
        </div>
        <div className="gallery-item">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hT6HHmaNZdQ?si=iKOgCMPjGO7P2wAZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="gallery-item">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/C8XpUUxUFyY?si=gGiwJbpbxud6zjz3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>

  
  )
}

export default page
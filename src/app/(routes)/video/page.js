import Link from 'next/link'
import React from 'react'

const page = () => {
    
  return (
    <div>
        <div className="btng-v">
      <button class="button-5" role="button"><Link href='gallery'>Images</Link></button>

      <button class="button-5" role="button"><Link href='video'>Videos</Link></button>

      </div>

 
      <div class="gallery">
        <div class="gallery-item">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/C8XpUUxUFyY?si=gGiwJbpbxud6zjz3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="gallery-item">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/OFLo-ZwZ7xM?si=jvBJgBlLd1eK9ZQ_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
        </div>
        <div class="gallery-item">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hT6HHmaNZdQ?si=iKOgCMPjGO7P2wAZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="gallery-item">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/C8XpUUxUFyY?si=gGiwJbpbxud6zjz3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</div>

  
  )
}

export default page
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import config from '@/config';

const page = () => {

  const [service, setService] = useState([])
  
  const getService = async() => {
    try{
      const result = await axios.get(`${config}/api/service`)
      setService(result.data);
    }catch(err){

    }
  }

  useEffect(() => {
    getService()
  }, [])

  return (
    <>
       <div className="blog_section">
        <h1>Service</h1>
        <div className="blog_row">
          {service.map((doc)=>(
            <div className="post_image_card">
              <div className="post_image_header">
                <a
                  href="/"
                  class="elementskit-entry-thumb"
                >
                  <img
                    width="100%"
                    decoding="async"
                    src={doc.image}
                    alt="What is"
                  />
                </a>
              </div>
              <div class="post_body ">
                <Link href={`/service/${doc.slug}`}>
                  {doc.name}
                </Link>
                <p>…</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
    
  )
}

export default page;
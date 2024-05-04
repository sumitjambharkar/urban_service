"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import config from '@/config';
const arr= [1,2,3,4,5,6.4,3,4,4,4,4,4]
const page = () => {

  const [blogs, setblogs] = useState([])

  const getBlogs = async() => {
    try{
      const result = await axios.get(`${config}/api/blog`)
      setblogs(result.data);
    }catch(err){

    }
  }

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <>
       <div className="blog_section">
        <h1>Blogs</h1>
        <div className="blog_row">
          {arr.map((doc)=>(
            <div className="post_image_card">
              <div className="post_image_header">
                <a
                  href="https://modafinia.com/what-is-modafine-how-its-work/"
                  class="elementskit-entry-thumb"
                >
                  <img
                    width="100%"
                    decoding="async"
                    src="https://modafinia.com/wp-content/uploads/2023/04/nootropics-supplement.jpg"
                    alt="What is MODAFINE: How it’s work"
                  />
                </a>
              </div>
              <div class="post_body ">
                <Link href="/blog/id">
                  What is MODAFINE: How it’s work{" "}
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
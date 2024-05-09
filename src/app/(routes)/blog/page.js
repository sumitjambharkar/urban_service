"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import config from '@/config';

const page = () => {

  const [blogs, setblogs] = useState([])
  const [user, setUser] = useState("")
  console.log(user);

  useEffect(() => {
    getUserDetails()
  }, [])
  
  const getUserDetails =async ()=> {
    const result = await axios.get(`${config}/api/user`)
    setUser(result.data.data);
  }

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

  const deleteBlog = async(id)=>{
    try {
      const result =  await axios.delete(`${config}/api/blog/${id}`)
      getBlogs()
    } catch (error) {
      console.log(error);
    }
}

  return (
    <>
       <div className="blog_section">
        <h1>Blogs</h1>
        <div className="blog_row">
          {blogs.map((doc)=>(
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
                <Link href={`/blog/${doc.slug}`}>
                  {doc.name}
                </Link>
                <p>…</p>
              </div>
              <div className="blog-actions">
            <Link href={`/blog/${doc.slug}`} className="learn-more">Read More</Link>
            {user?<Link onClick={()=>deleteBlog(doc._id)} href="#">Delete</Link>
            :null}
            {user?<Link href={`/blog-upload/${doc.slug}`} >Edit</Link>:null}
          </div>
            </div>
          ))}
        </div>
      </div>

    </>
    
  )
}

export default page;
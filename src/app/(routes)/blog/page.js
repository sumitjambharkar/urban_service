"use client"
import { useEffect, useState } from 'react';
import api from '@/libs/api';
import Link from 'next/link';
import {
  blogSectionClass,
  blogRowClass,
  postImageCardClass,
  postImageHeaderClass,
  postImageClass,
  postBodyClass,
  postBodyLinkClass,
  blogActionsClass,
  blogActionLinkClass,
} from '@/app/uiClasses';

const page = () => {

  const [blogs, setblogs] = useState([])
  const [user, setUser] = useState("")

  useEffect(() => {
    getUserDetails()
  }, [])

  const getUserDetails =async ()=> {
    try {
      const result = await api.get("/api/user")
      setUser(result.data.data);
    } catch (error) {
      // Not logged in
    }
  }

  const getBlogs = async() => {
    try{
      const result = await api.get("/api/blog")
      setblogs(result.data);
    }catch(err){

    }
  }

  useEffect(() => {
    getBlogs()
  }, [])

  const deleteBlog = async(id)=>{
    try {
      await api.delete(`/api/blog/${id}`)
      getBlogs()
    } catch (error) {
      console.log(error);
    }
}

  return (
    <>
       <div className={blogSectionClass}>
        <h1 className="mb-9 text-center text-[34px]">Blogs</h1>
        <div className={blogRowClass}>
          {blogs.map((doc)=>(
            <div className={postImageCardClass}>
              <div className={postImageHeaderClass}>
                <a
                  href="/"
                  className="elementskit-entry-thumb"
                >
                  <img
                    width="100%"
                    decoding="async"
                    src={doc.image}
                    alt="What is"
                    className={postImageClass}
                  />
                </a>
              </div>
              <div className={postBodyClass}>
                <Link href={`/blog/${doc.slug}`} className={postBodyLinkClass}>
                  {doc.name}
                </Link>
                <p>…</p>
              </div>
              <div className={blogActionsClass}>
            <Link href={`/blog/${doc.slug}`} className={blogActionLinkClass}>Read More</Link>
            {user?<Link onClick={()=>deleteBlog(doc._id)} href="#" className={blogActionLinkClass}>Delete</Link>
            :null}
            {user?<Link href={`/blog-upload/${doc.slug}`} className={blogActionLinkClass}>Edit</Link>:null}
          </div>
            </div>
          ))}
        </div>
      </div>

    </>
    
  )
}

export default page;
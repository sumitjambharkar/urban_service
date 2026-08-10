"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '@/config';
import Link from 'next/link';
import {
  singlePostClass,
  singleDetailsClass,
  singleTitleClass,
  singlePostCardClass,
} from '@/app/uiClasses';


const page = ({params}) => {
    

    const [blog, setBlog] = useState({})
    console.log(blog);

     useEffect(() => {
       getData()
     }, [])

     const getData=async()=>{
      try {
        const result = await axios.get(`${config}/api/blog/${params.id}`)
        setBlog(result.data);
      } catch (error) {
        console.log(error);
      }
     } 
     
    
  return (
   <section className={singlePostClass}>
     <div className={singlePostCardClass}>
       <Link href={``} style={{textDecoration:"none"}}><h1 className={singleTitleClass}>
            {blog.name}
           </h1></Link>
           <img className="w-full rounded-m p-3" src={blog.image} alt="" />
           <div className={singleDetailsClass}>


           <div dangerouslySetInnerHTML={{
            __html:blog.content,
          }}>

           </div>
           </div>
     </div>
</section>
  )
}

export default page
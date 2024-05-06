"use client";
import { useEffect, useState } from 'react';
import styles from '../../../blog.module.css';
import axios from 'axios';
import config from '@/config';
import Link from 'next/link';


const page = ({params}) => {
    

    const [blog, setBlog] = useState({})
    console.log(blog);

     useEffect(() => {
       getData()
     }, [])

     const getData=async()=>{
      try {
        const result = await axios.get(`${config}/api/service/${params.id}`)
        setBlog(result.data);
      } catch (error) {
        console.log(error);
      }
     } 
     
    
  return (

   <section className='single_post'>
   <div className='container-fluid'>
     <div className='row'>
     <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
       <div className='single_post_card'>
           <img style={{width:"100%",padding:"12px"}} src={blog.image} alt="" />
           <div className='single_details'>
           
           <Link href={``} style={{textDecoration:"none"}}><h1 className='single_title'>
            {blog.name}
           </h1></Link>
           <div dangerouslySetInnerHTML={{
            __html:blog.content,
          }}>

           </div>
           </div>
       </div>
     </div>
     {/* <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
     <div className='single_post_card'>
      <div className='blog_card'>
      <p className='blog_title'>Table of Contents</p>
       
       {a?(<>{a.map((doc,i)=>(
           <div><span>{i+1}.{doc.title}</span><br/></div>
       ))}</>):null}
      </div>
     </div>
     <div className='single_post_card'>
      <div className='blog_card'>
      
      </div>
     </div>
     <div className='single_post_card'>
      <div className='blog_card'>
      <p className='blog_title'>Archives</p>
       
      </div>
     </div>
     </div> */}
     </div>
   </div>
</section>
  )
}

export default page
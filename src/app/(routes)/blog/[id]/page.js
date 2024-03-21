"use client";
import { useEffect, useState } from 'react';
import styles from '../../../blog.module.css';
import axios from 'axios';


const page = ({params}) => {
    console.log(params);

    const [blog, setBlog] = useState({})

     useEffect(() => {
       getData()
     }, [])

     const getData=async()=>{
      try {
        const result = await axios.get(`http://localhost:3000/api/blog/${params.id}`)
        setBlog(result.data);
      } catch (error) {
        console.log(error);
      }
     } 
     
    
  return (
    <section className={styles.blog_section}>
    <div className={styles.blog_container}>
      <div className={styles.main}>
        <div className={styles.single}>
        <h1>{blog.name}</h1>
         <img src={blog.image} alt="" />
         <div><span>{blog.category}</span></div>
         <div>
         <p>{blog.content}</p>
         </div>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default page
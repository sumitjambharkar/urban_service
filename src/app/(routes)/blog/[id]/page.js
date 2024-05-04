"use client";
import { useEffect, useState } from 'react';
import styles from '../../../blog.module.css';
import axios from 'axios';
import config from '@/config';
import Link from 'next/link';


const page = ({params}) => {
    console.log(params);

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
  //   <section className={styles.blog_section}>
  //   <div className={styles.blog_container}>
  //     <div className={styles.main}>
  //       <div className={styles.single}>
  //       <h1>{blog.name}</h1>
  //        <img src={blog.image} alt="" />
  //        <div><span>{blog.category}</span></div>
  //        <div>
  //        <div
  //                 dangerouslySetInnerHTML={{
  //                   __html:blog.content,
  //                 }}
  //               ></div>
  //        </div>
  //       </div>
        
  //     </div>
  //   </div>
  // </section>
   <section className='single_post'>
   <div className='container-fluid'>
     <div className='row'>
     <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
       <div className='single_post_card'>
           <img style={{width:"100%",padding:"12px"}} src="https://modafinia.com/wp-content/uploads/2022/07/Buy-Modafinil-2-1024x682.jpg" alt="" />
           <div className='single_details'>
           <h1 className='single_title'>
           What is MODAFINE: How it’s work
           </h1>
           <Link href="/author/finia_20225" style={{textDecoration:"none"}}><p>/ Modafinia / By finia_20225</p></Link>
           <h2> What is MODAFINE: How it’s work</h2>
           <p>Modafine is a brain-boosting drug that works like so many other similar nootropics to enhance neural function. The drug is available as smart pills and can be taken to help improve attention, memory, and focus among users. Modafine is the result you get when you blend the potent effects of Modafinil and the effective performance of Armodafinil. Each dose of the medication helps to deliver unstoppable energy and laser-sharp focus. The drug works in the central nervous system to help produce positive energy and motivation to do anything. People who depend on Modafine to work always feel that they can take on anything.</p>
           <h2> What is MODAFINE: How it’s work</h2>
           <p>Modafine is a brain-boosting drug that works like so many other similar nootropics to enhance neural function. The drug is available as smart pills and can be taken to help improve attention, memory, and focus among users. Modafine is the result you get when you blend the potent effects of Modafinil and the effective performance of Armodafinil. Each dose of the medication helps to deliver unstoppable energy and laser-sharp focus. The drug works in the central nervous system to help produce positive energy and motivation to do anything. People who depend on Modafine to work always feel that they can take on anything.</p>
           <h2> What is MODAFINE: How it’s work</h2>
           <p>Modafine is a brain-boosting drug that works like so many other similar nootropics to enhance neural function. The drug is available as smart pills and can be taken to help improve attention, memory, and focus among users. Modafine is the result you get when you blend the potent effects of Modafinil and the effective performance of Armodafinil. Each dose of the medication helps to deliver unstoppable energy and laser-sharp focus. The drug works in the central nervous system to help produce positive energy and motivation to do anything. People who depend on Modafine to work always feel that they can take on anything.</p>
           <h2> What is MODAFINE: How it’s work</h2>
           <p>Modafine is a brain-boosting drug that works like so many other similar nootropics to enhance neural function. The drug is available as smart pills and can be taken to help improve attention, memory, and focus among users. Modafine is the result you get when you blend the potent effects of Modafinil and the effective performance of Armodafinil. Each dose of the medication helps to deliver unstoppable energy and laser-sharp focus. The drug works in the central nervous system to help produce positive energy and motivation to do anything. People who depend on Modafine to work always feel that they can take on anything.</p>
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
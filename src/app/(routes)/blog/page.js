"use client"
import { useEffect, useState } from 'react';
import styles from '../../blog.module.css';
import axios from 'axios';
import Link from 'next/link';
import config from '@/config';

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
      <section className={styles.blog_section}>
  <div className={styles.blog_container}>
    <div className={styles.main}>
      <div className={styles.blog_item}>
        {blogs.map((doc)=>(
          <div key={doc._id} className={styles.example}>
          <img
            className={styles.blog_image}
            src={doc.image}
            alt="blog"
           
          />
          <div className={styles.blog_content}>
            <h1 className={styles.blog_title}>{doc.name}</h1>
            {/* <p className={styles.blog_description}>
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p> */}
            <div className="flex items-center flex-wrap ">
              <Link href={`/blog/${doc.slug}`} className={styles.blog_learn_more}>
                Learn More
               
              </Link>
            </div>
          </div>
        </div>
        ))}
        
       
      </div>
      
    </div>
  </div>
</section>

    </>
    
  )
}

export default page;
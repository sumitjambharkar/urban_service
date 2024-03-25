"use client"

import { useState } from "react";
import axios from 'axios';
import config from "@/config";

const page = () => {
  const [data, setData] = useState({
    name: "",
    slug: "",
    content: "",
    seoTitle: "",
    seoDescription: "",
  });
  const [file,setFile] = useState(null)

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value,
      // Auto-generate slug if name is provided
      ...(name === 'name' && value && { slug: value.toLowerCase().replace(/\s+/g, '-') })
    }));
  };
  

  // Function to handle form submission
  const handleSubmit = async(e) => {
  
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('slug', data.slug);
    formData.append('content', data.content);
    formData.append('seoTitle', data.seoTitle);
    formData.append('seoDescription', data.seoDescription);
    formData.append('file', file);

    try {
      const result  = await axios.post(`${config}/api/blog`,{formData})
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-container">
   <div className='form-group-full'>
   <div className="form-group">
      <input name="name" value={data.name} onChange={handleInputChange} className="input-field" placeholder='Name' type='text'/>
    </div>
    <div className="form-group">
      <input name="slug" value={data.slug} onChange={handleInputChange} className="input-field" placeholder='Slug' type='text'/>
    </div>
   </div>
    <div className="form-group-full">
    <div className="form-group">
      <input name="content" value={data.content} onChange={handleInputChange} className="input-field" placeholder='Content' type='text'/>
      </div>
    </div>
    <div className="form-group-full">
    <div className="form-group">
      <input name="seoTitle" value={data.seoTitle} onChange={handleInputChange} className="input-field" placeholder='SEO Title' type='text'/>
    </div>
    </div>
    <div className="form-group-full">
    <div className="form-group">
      <input  name="seoDescription" value={data.seoDescription} onChange={handleInputChange} className="input-field" placeholder='SEO Description' type='text'/>
    </div>
    </div>
    <div className="form-group-full">
    <div className="form-group">
      <input  onChange={(e)=>setFile(e.target.files[0])} className="file-input" type='file'/>
    </div>
    <div className="form-group">
      <input onClick={handleSubmit} className="submit-button" type='submit' value="Submit"/>
    </div>
    </div>
   
  </div>
  )
}

export default page

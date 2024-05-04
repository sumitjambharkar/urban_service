"use client"
import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const page = () => {
  const [data, setData] = useState({
   email:"",
   password:""
  })

  const handleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }
  const sendData =async(e)=>{
    e.preventDefault()
    if (!data.email|| !data.password) {
      Swal.fire({
        title: `Input Field Required`,
        text: "You clicked the button!",
        icon: "error"
      });
    }else{
      try {
        const result = await axios.post(`${config}/api/login`,{email:data.email,password:data.password})
        if(result.status===200){
          Swal.fire({
            title: `${result.data.message}`,
            text: "You clicked the button!",
            icon: "success"
          });
          window.location.reload()
          router.push("/")
        }
      } catch (error) {
        Swal.fire({
          title: `${error.response.data.message}`,
          text: "You clicked the button!",
          icon: "error"
        });
      }
    }

  }

  return (
      <div className='login'>
      <div className='login_form'>
      <form onSubmit={sendData} >
      <h2>Login to your account</h2>
        <input required name="email" value={data.email} onChange={handleChange} type="text" placeholder='Email' />
        <input required name="password" value={data.password} onChange={handleChange} type="text" placeholder='password' />
        <button className='btn' type='submit'>Login</button>
      </form>
      <div className='login_new'>
      {/* <Link href="/">Create an account</Link> */}
      <button className='forgot'>forgot Password</button>
      </div>
      </div> 
      </div>
  )
}

export default page

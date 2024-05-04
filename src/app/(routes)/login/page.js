"use client"
import config from '@/config';
import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const page = () => {
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")

  const sendData =async(e)=>{
    e.preventDefault()
    if (!email|| !password) {
      Swal.fire({
        title: `Input Field Required`,
        text: "You clicked the button!",
        icon: "error"
      });
    }else{
      try {
        const result = await axios.post(`${config}/api/login`,{email,password})
        console.log(result);
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
        <input required  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
        <input required  value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' />
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

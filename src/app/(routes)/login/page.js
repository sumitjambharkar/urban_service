"use client"
import config from '@/config';
import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import { setAccessToken } from '@/libs/authClient';
import { loginWrapClass, loginFormWrapClass, loginFormClass, loginInputClass, forgotBtnClass, btnClass } from '@/app/uiClasses';

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
        if(result.status===200){
          setAccessToken(result.data.accessToken)
          Swal.fire({
            title: `${result.data.message}`,
            text: "You clicked the button!",
            icon: "success"
          });
          const redirect = new URLSearchParams(window.location.search).get('redirect')
          window.location.href = redirect || '/admin/gallery'
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
      <div className={loginWrapClass}>
      <div className={loginFormWrapClass}>
      <form onSubmit={sendData} className={loginFormClass}>
      <h2 className="mb-2 text-center text-[26px]"><WbIncandescentIcon className="mr-1.5 align-middle text-gold" />Login to your account</h2>
        <input required  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className={loginInputClass} />
        <input required  value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' className={loginInputClass} />
        <button className={btnClass} type='submit'>Login</button>
      </form>
      <div className='flex flex-col items-center justify-center'>
      {/* <Link href="/">Create an account</Link> */}
      <button className={forgotBtnClass}>forgot Password</button>
      </div>
      </div>
      </div>
  )
}

export default page

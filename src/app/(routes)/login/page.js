import Panel from '@/app/components/Panel'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Panel name="login"/>
      <div className='login'>
      <div className='login_form'>
      <form >
      <h2>Login to your account</h2>
        <input type="text" placeholder='username' />
        <input type="text" placeholder='password' />
        <button className='btn' type='submit'>Login</button>
      </form>
      <div className='login_new'>
      <Link href="/">Create an account</Link>
      <button className='forgot'>forgot Password</button>
      </div>
      </div> 
      </div>
    </div>
  )
}

export default page

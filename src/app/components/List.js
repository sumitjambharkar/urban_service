import Link from 'next/link'
import React from 'react'

const List = () => {
  return (
    <div>
    <ul className='list'>
      <li ><Link href="/" >Home</Link></li>
      <li ><Link href="/">About</Link></li>
      <li ><Link href="/contact">Contact</Link></li>
      <li ><Link href="/service">Service</Link></li>
      <div className="read">
          <Link href="/login" className="btn">
            Sign Up
          </Link>
        </div>
    </ul>
      
    </div>
  )
}

export default List

import Link from 'next/link'
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='child_link'>
      <h1><Link class="navbar-brand" href="/">Clean<span>Nation</span></Link></h1>
      </div>
      <div className='child_link'>
       <li><Link href="/">Home</Link></li>
       <li><Link href="/about">About</Link></li>
       <li><Link href="/service">Service</Link></li>
       <li><Link href="/contact">Contact</Link></li>
       <div class="read">
							<Link class="btn mt-4" href="services.html">Sign Up</Link>
						</div>
       {/* <li><Link href="/"><ShoppingCartIcon/></Link></li> */}
      </div>
    </section>
  )
}

export default Navbar

"use client"
import Link from "next/link";
import { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className='navbar'>
      <div className='brand'>
        <div className="child_link_logo">
      <h1>
          <Link className="navbar-brand" href="/">
            Clean<span>Nation</span>
          </Link>
        </h1>
        </div>
      </div>
      <div className={`drawer ${drawerOpen ? 'open' : ''}`} id="appDrawer">
        <li>
          <Link onClick={toggleDrawer} href="/">Home</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/">About</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/blog">Blog</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/blogupload">Add Post</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/service">Service</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/contact">Contact Us</Link>
        </li>
        <li>
        <div className="read">
          <Link onClick={toggleDrawer} href="/login" className="btn">
        Whatsapp
          </Link>
        </div>
        </li>
      </div>
      <ul className='mobile-support'>
        <div style={{cursor:"pointer"}} onClick={toggleDrawer}>
          {drawerOpen? (
                <CloseIcon fontSize="large" /> 
              ) : (
                <MenuIcon  fontSize="large"/>
              )}

        </div>
      </ul>
    </div>
  );
}

export default Navbar;
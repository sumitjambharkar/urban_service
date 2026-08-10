"use client"
import Link from "next/link";
import { useEffect, useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import CallIcon from "@mui/icons-material/Call";
import config from "@/config";
import axios from "axios";

function Navbar() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [user, setUser] = useState(null)


  useEffect(() => {
    getUserDetails()
  }, [])
  

  const getUserDetails = async () => {
    try {
      const result = await axios.get(`${config}/api/user`);
      const userData = result.data.data;
      console.log(userData);
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error gracefully, e.g., redirect to login page or display an error message
    }
  };
  

  const logout = async() => {
    try {
      await axios.get("/api/logout")
      window.location.reload()
    } catch (error) {
      log
    }
  }


  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className='navbar'>
      <div className='brand'>
        <div className="child_link_logo">
      <h1>
          <Link className="navbar-brand" href="/">
            <WbIncandescentIcon className="brand-icon" />
            Chandelite
          </Link>
        </h1>
        </div>
      </div>
      <div className={`drawer ${drawerOpen ? 'open' : ''}`} id="appDrawer">
        <li>
          <Link onClick={toggleDrawer} href="/">Home</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/about">About</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/blog">Blog</Link>
        </li>
        {user?.email?
        <>
         <li>
          <Link onClick={toggleDrawer} href="/blog-upload">Add Blog</Link>
        </li>

        </>:null}
        <li>
          <Link onClick={toggleDrawer} href="/services">Service</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/contact">Contact Us</Link>
        </li>
        {!user?.email?<><li>
        <div className="read">
          <Link onClick={toggleDrawer} href="/login" className="btn">
        Login
          </Link>
        </div>
        </li></>:<li><div className="read">
          <Link onClick={logout} href="/login" className="btn">
           SignOut
          </Link>
        </div></li>}
      </div>
      <div className="navbar-actions">
        <a href="tel:+917021595850" className="nav-cta">
          <CallIcon fontSize="small" />
          <span className="nav-cta-text">+91 7021595850</span>
        </a>
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
    </div>
  );
}

export default Navbar;
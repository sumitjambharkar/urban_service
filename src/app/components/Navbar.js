"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShow(window.innerWidth < 512);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="navbar">
      <div className="child_link_logo">
        <h1>
          <Link className="navbar-brand" href="/">
            Clean<span>Nation</span>
          </Link>
        </h1>
        {show ? (
          <MenuIcon
            onClick={() => setShow(false)}
            className="menu"
            fontSize="large"
          />
        ) : (
          <CloseIcon
            onClick={() => setShow(true)}
            className="menu"
            fontSize="large"
          />
        )}
      </div>
      <div className={!show ? "child_link" : "child_link_hide"}>
        <li>
          <Link onClick={() => setShow(true)} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => setShow(true)} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={() => setShow(true)} href="/service">
            Service
          </Link>
        </li>
        <li>
          <Link onClick={() => setShow(true)} href="/contact">
            Contact
          </Link>
        </li>
        <div className="read">
          <Link onClick={() => setShow(true)} href="/login" className="btn">
            Sign Up
          </Link>
        </div>
        {/* <li><Link href="/"><ShoppingCartIcon/></Link></li> */}
      </div>
    </section>
  );
};

export default Navbar;

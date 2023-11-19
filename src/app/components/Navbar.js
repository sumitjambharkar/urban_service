"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Animated } from "react-animated-css";
import List from "./List";

const Navbar = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="navbar">
      <div className="child_link_logo">
        <h1>
          <Link className="navbar-brand" href="/">
            Clean<span>Nation</span>
          </Link>
        </h1>
        <div className="nav_list_pc">
          <List/>
        </div>
        <div className="nav_list_menu">
          {isMobileMenuOpen ? (
                <CloseIcon onClick={() => setMobileMenuOpen(false)} /> 
              ) : (
                <MenuIcon onClick={() => setMobileMenuOpen(true)} />
              )}
        </div>
      </div>
      <div className="hide">
          <Animated
            animationIn="slideInRight"
            animationOut="slideOutRight"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={isMobileMenuOpen}
          >
            <div
              onClick={() => setMobileMenuOpen(false)}
              className={isMobileMenuOpen ? "mobile" : "mobile_m"}
            >
              <List />
            </div>
          </Animated>
        </div>
    </section>
  );
};

export default Navbar;

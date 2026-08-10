"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import CallIcon from "@mui/icons-material/Call";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CollectionsIcon from "@mui/icons-material/Collections";
import ArticleIcon from "@mui/icons-material/Article";
import HandymanIcon from "@mui/icons-material/Handyman";
import CategoryIcon from "@mui/icons-material/Category";
import LogoutIcon from "@mui/icons-material/Logout";
import api from "@/libs/api";
import { clearAccessToken } from "@/libs/authClient";
import { btnLargeClass } from "../uiClasses";

const ADMIN_LINKS = [
  { href: "/admin", label: "Dashboard", icon: DashboardIcon },
  { href: "/admin/gallery", label: "Manage Gallery", icon: CollectionsIcon },
  { href: "/admin/service-tiles", label: "Manage Service Tiles", icon: CategoryIcon },
  { href: "/blog-upload", label: "Add Blog", icon: ArticleIcon },
  { href: "/service", label: "Manage Service Posts", icon: HandymanIcon },
];

const navLinkClass =
  "block bg-transparent text-[15px] font-semibold capitalize leading-[26px] text-ink/90 no-underline transition-colors duration-200 hover:text-gold-dark max-sm:w-full max-sm:py-4 max-sm:text-white/[0.92] max-sm:hover:text-gold";
const navLiClass = "max-sm:w-full max-sm:border-b max-sm:border-white/[0.08]";

function Navbar() {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);

  const [user, setUser] = useState(null)
  const adminMenuRef = useRef(null)


  useEffect(() => {
    getUserDetails()
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (adminMenuRef.current && !adminMenuRef.current.contains(e.target)) {
        setAdminMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])


  const getUserDetails = async () => {
    try {
      const result = await api.get("/api/user");
      const userData = result.data.data;
      setUser(userData);
    } catch (error) {
      // Not logged in - leave user as null
    }
  };


  const logout = async() => {
    try {
      await api.get("/api/logout")
      clearAccessToken()
      window.location.reload()
    } catch (error) {
      clearAccessToken()
      window.location.reload()
    }
  }


  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="sticky top-0 z-30 flex w-full flex-wrap items-center justify-between gap-y-2 border-b border-border bg-white px-12 py-4 shadow-s max-lg:px-5">
      <div>
        <div className="flex items-center gap-2.5">
          <h1>
            <Link href="/" className="inline-flex items-center gap-2 text-[27px] font-bold tracking-[0.2px] text-navy no-underline font-heading">
              <WbIncandescentIcon className="!text-[26px] text-gold" />
              Chandelite
            </Link>
          </h1>
        </div>
      </div>
      <div
        id="appDrawer"
        className={`flex list-none items-center gap-x-[30px] max-sm:fixed max-sm:top-0 max-sm:z-40 max-sm:h-screen max-sm:w-[78%] max-sm:max-w-[320px] max-sm:flex-col max-sm:items-start max-sm:gap-x-0 max-sm:gap-y-1.5 max-sm:overflow-y-auto max-sm:bg-navy-deep max-sm:px-8 max-sm:pb-[30px] max-sm:pt-[100px] max-sm:transition-[left] max-sm:duration-300 max-sm:ease-in-out ${drawerOpen ? 'max-sm:left-0' : 'max-sm:-left-full'}`}
      >
        <li className={navLiClass}>
          <Link onClick={toggleDrawer} href="/" className={navLinkClass}>Home</Link>
        </li>
        <li className={navLiClass}>
          <Link onClick={toggleDrawer} href="/about" className={navLinkClass}>About</Link>
        </li>
        <li className={navLiClass}>
          <Link onClick={toggleDrawer} href="/blog" className={navLinkClass}>Blog</Link>
        </li>
        <li className={navLiClass}>
          <Link onClick={toggleDrawer} href="/services" className={navLinkClass}>Service</Link>
        </li>
        <li className={navLiClass}>
          <Link onClick={toggleDrawer} href="/gallery" className={navLinkClass}>Gallery</Link>
        </li>
        <li className={navLiClass}>
          <Link onClick={toggleDrawer} href="/contact" className={navLinkClass}>Contact Us</Link>
        </li>
        {!user?.email ? (
          <li className={navLiClass}>
            <div className="max-sm:w-full max-sm:py-2.5">
              <Link onClick={toggleDrawer} href="/login" className={`${btnLargeClass} max-sm:w-full`}>
                Login
              </Link>
            </div>
          </li>
        ) : null}
      </div>
      <div className="flex items-center gap-[18px]">
        {user?.email ? (
          <div className="relative" ref={adminMenuRef}>
            <button
              type="button"
              className={`inline-flex cursor-pointer items-center gap-1 rounded-full border-[1.5px] px-4 py-2 text-sm font-bold transition-all duration-200 ${adminMenuOpen ? 'border-navy bg-navy text-white' : 'border-border bg-white text-navy hover:border-navy hover:bg-navy hover:text-white'}`}
              onClick={() => setAdminMenuOpen(!adminMenuOpen)}
            >
              Admin
              <KeyboardArrowDownIcon
                fontSize="small"
                className={`transition-transform duration-200 ${adminMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`absolute right-0 top-[calc(100%+12px)] z-50 min-w-[220px] list-none rounded-m border border-border bg-white p-2 shadow-m transition-all duration-200 ${
                adminMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'
              }`}
            >
              {ADMIN_LINKS.map(({ href, label, icon: Icon }) => (
                <li key={href} className="w-full">
                  <Link
                    href={href}
                    onClick={() => setAdminMenuOpen(false)}
                    className="flex items-center gap-2.5 whitespace-nowrap rounded-s px-3 py-2.5 text-sm text-ink no-underline transition-colors duration-200 hover:bg-cream hover:text-gold-dark"
                  >
                    <Icon fontSize="small" />
                    {label}
                  </Link>
                </li>
              ))}
              <li className="mt-1 w-full border-t border-border pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setAdminMenuOpen(false)
                    logout()
                  }}
                  className="flex w-full items-center gap-2.5 whitespace-nowrap rounded-s border-none bg-transparent px-3 py-2.5 text-left text-sm text-danger transition-colors duration-200 hover:bg-cream"
                >
                  <LogoutIcon fontSize="small" />
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : null}
        <a
          href="tel:+917021595850"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-[22px] py-[11px] text-sm font-bold text-white no-underline transition-colors duration-200 hover:bg-gold-dark max-lg:rounded-full max-lg:p-3"
        >
          <CallIcon fontSize="small" className="!text-[18px]" />
          <span className="max-lg:hidden">+91 7021595850</span>
        </a>
        <ul className="hidden max-sm:z-50 max-sm:block">
          <div style={{cursor:"pointer"}} onClick={toggleDrawer} className="text-navy">
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

import Link from "next/link";
import React from "react";

const footerLinkClass = "text-white/[0.72] no-underline transition-colors duration-200 hover:text-gold";
const footerHeadingClass = "mb-[18px] font-body text-[15px] uppercase tracking-[1.2px] text-white";

const Footer = () => {
  return (
    <section className="mt-auto bg-navy-deep pt-[60px] text-white/[0.82]">
      <div className="mx-auto flex max-w-container flex-wrap justify-between gap-8 px-[6vw] pb-10 max-md:px-6 max-md:pb-[30px]">
        <div className="w-60 flex-1 basis-[200px]">
          <h6 className={footerHeadingClass}>Company</h6>
          <ul className="flex flex-col gap-3">
            <li className="list-none text-sm">
              <Link href="/" className={footerLinkClass}>Privacy Policy</Link>
            </li>
            <li className="list-none text-sm">
              <Link href="/" className={footerLinkClass}>Terms &amp; Conditions</Link>
            </li>
            <li className="list-none text-sm">
              <Link href="/" className={footerLinkClass}>Cancellation &amp; Refund Policy</Link>
            </li>
            <li className="list-none text-sm">
              <Link href="/" className={footerLinkClass}>Payment Method</Link>
            </li>
          </ul>
        </div>
        <div className="w-60 flex-1 basis-[200px]">
          <h6 className={footerHeadingClass}>Support</h6>
          <ul className="flex flex-col gap-3">
            <li className="list-none text-sm">
              <Link href="/" className={footerLinkClass}>FAQs</Link>
            </li>
            <li className="list-none text-sm">
              <Link href="/" className={footerLinkClass}>Related Websites</Link>
            </li>
            <li className="list-none text-sm">
              <Link href="/" className={footerLinkClass}>Career</Link>
            </li>
            <li className="list-none text-sm">
              <Link href="/" className={footerLinkClass}>Review</Link>
            </li>
          </ul>
        </div>
        <div className="w-60 flex-1 basis-[200px]">
          <h6 className={footerHeadingClass}>Follow Us</h6>
          <ul className="flex flex-col gap-3">
            <li className="list-none text-sm">
              <a target="_blank" rel="noopener noreferrer" href="#" className={footerLinkClass}>
                Facebook
              </a>
            </li>
            <li className="list-none text-sm">
              <a target="_blank" rel="noopener noreferrer" href="#" className={footerLinkClass}>
                Instagram
              </a>
            </li>
            <li className="list-none text-sm">
              <a target="_blank" rel="noopener noreferrer" href="#" className={footerLinkClass}>
                YouTube
              </a>
            </li>
            <li className="list-none text-sm">
              Business Listing
            </li>
          </ul>
        </div>
        <div className="w-60 flex-1 basis-[200px]">
          <h6 className={footerHeadingClass}>Get In Touch</h6>
          <ul className="flex flex-col gap-3">
            <li className="list-none text-sm">
              Phone: <Link href="tel:+917021595850" className={footerLinkClass}>+91 7021595850</Link>
            </li>
            <li className="list-none text-sm">
              Email: <Link href="mailto:support@chandelite.in" className={footerLinkClass}>support@chandelite.in</Link>
            </li>
            <li className="list-none text-[13px] leading-[1.6] text-white/60 mt-1.5">
              Andheri West, Mumbai, Maharashtra
            </li>
          </ul>
        </div>
      </div>
      <h6 className="border-t border-white/10 px-5 py-[22px] text-center text-[12.5px] font-medium tracking-[0.4px] text-white/55">
        &copy; {new Date().getFullYear()} CHANDELITE &mdash; ALL OVER INDIA.
      </h6>
    </section>
  );
};

export default Footer;

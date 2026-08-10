import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer_section">
        <div className="footer_list">
          <h6>Company</h6>
          <ul>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link href="/">Cancellation &amp; Refund Policy</Link>
            </li>
            <li>
              <Link href="/">Payment Method</Link>
            </li>
          </ul>
        </div>
        <div className="footer_list">
          <h6>Support</h6>
          <ul>
            <li>
              <Link href="/">FAQs</Link>
            </li>
            <li>
              <Link href="/">Related Websites</Link>
            </li>
            <li>
              <Link href="/">Career</Link>
            </li>
            <li>
              <Link href="/">Review</Link>
            </li>
          </ul>
        </div>
        <div className="footer_list">
          <h6>Follow Us</h6>
          <ul>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="#">
                Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                YouTube
              </a>
            </li>
            <li>
              Business Listing
            </li>
          </ul>
        </div>
        <div className="footer_list">
          <h6>Get In Touch</h6>
          <ul>
            <li>
              Phone: <Link href="tel:+917021595850">+91 7021595850</Link>
            </li>
            <li>
              Email: <Link href="mailto:support@chandelite.in">support@chandelite.in</Link>
            </li>
            <li className="footer-address">
              Andheri West, Mumbai, Maharashtra
            </li>
          </ul>
        </div>
        </div>
        <h6 className="FOOTNAME">&copy; {new Date().getFullYear()} CHANDELITE &mdash; ALL OVER INDIA.</h6>
    </section>
  );
};

export default Footer;

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer_section">
        <div className="footer_list">
          <ul>
            <li>
              <Link href="/ ">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/ ">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/">Cancellation & Refund Policy</Link>
            </li>
            <li>
              <Link href="/">Payment Method</Link>
            </li>
          </ul>
        </div>
        <div className="footer_list">
          <ul>
            <li>
              <Link href="/ ">FaQs</Link>
            </li>
            <li>
              <Link href="/ ">Related-Websites</Link>
            </li>
            <li>
              <Link href="/ ">Career</Link>
            </li>
            <li>
              <Link href="/ ">Review</Link>
            </li>
          </ul>
        </div>
        <div className="footer_list">
          <ul>
            <li>
              <a target="_blank" href="https://www.facebook.com/cleannation00">
                Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/star_home_interior/"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/@clean-nation6703"
              >
                Youtube
              </a>
            </li>
            <li>
              
            Business Listing
            </li>
          </ul>
        </div>
        <div className="footer_list">
          <ul>
            <li>
              Phone : <Link href="tel:+919076301717">9076301717</Link>
            </li>
            <li>
              Phone : <Link href="tel:+919319996195">9319996195</Link>
            </li>
            <li>____________________________</li>
            <li>
              Yari Road, Versova, Andheri (W)<br></br> Mumbai 400061
            </li>
          </ul>
        </div>
        </div>
        <h6 className="FOOTNAME">@2015_CLEANNATION_ALL OVER INDIA.</h6>
    </section>
  );
};

export default Footer;

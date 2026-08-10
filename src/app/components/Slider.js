import Link from "next/link";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";

const Slider = () => {
  return (
    <div className="slider_one">
      <div className="banner-info-bg">
        <h6>Fast &amp; Efficient</h6>
        <h5>Trusted Chandelier &amp; Home Cleaning Services.</h5>
        <p>
          From sparkling chandeliers to spotless homes, Chandelite brings skilled
          professionals and eco-friendly methods to every corner of your space.
        </p>
        <div className="hero-actions">
          <Link className="btn" href="/service">
            Get A Free Quote
          </Link>
          <a className="btn-outline" href="tel:+917021595850">
            Call +91 7021595850
          </a>
        </div>
        <div className="hero-badges">
          <div className="hero-badge">
            <VerifiedUserOutlinedIcon />
            Verified Professionals
          </div>
          <div className="hero-badge">
            <EnergySavingsLeafOutlinedIcon />
            Eco-Friendly Methods
          </div>
          <div className="hero-badge">
            <ScheduleOutlinedIcon />
            On-Time Service
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

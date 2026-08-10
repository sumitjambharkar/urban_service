import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Header = () => {
  return (
    <section className="header">
      <div className="header_child">
        <AccessTimeOutlinedIcon />
        <li>Monday - Sunday: 10am - 8pm</li>
        <EmailOutlinedIcon />
        <li>
          <a href="mailto:support@chandelite.in">support@chandelite.in</a>
        </li>
        <CallIcon />
        <li>
          <a href="tel:+917021595850">+91 7021595850</a>
        </li>
      </div>
      <div className="header_child">
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/cleannation00" aria-label="Facebook">
          <FacebookIcon />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/star_home_interior/" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@clean-nation6703" aria-label="YouTube">
          <YouTubeIcon />
        </a>
      </div>
    </section>
  );
};

export default Header;

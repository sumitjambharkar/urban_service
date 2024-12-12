import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
const Header = () => {
  return (
    <section className="header">
      <div className="header_child">
        <AccessTimeOutlinedIcon />
        <li>Monday-Sunday:10am - 8pm </li>
        <EmailOutlinedIcon />
        <li>
          <a href="mailto:support@cleannation.in">support@cleannation.in</a>
        </li>
        <CallIcon />
        <li>
          <a href="tel:+917021595850">7021595850 | 9323969471</a>
        </li>
      </div>
      <div className="header_child">
        <a target="_blank" href="https://www.facebook.com/cleannation00">
          <FacebookIcon style={{color:"white"}} />
        </a>
        <a target="_blank" href="https://www.instagram.com/star_home_interior/">
          <InstagramIcon style={{color:"white"}}/>
        </a>

        <a target="_blank" href="https://www.youtube.com/@clean-nation6703">
          <LinkedInIcon style={{color:"white"}} />
        </a>
        <a target="_blank" href="https://www.youtube.com/@clean-nation6703">
          <GoogleIcon style={{color:"white"}} />
        </a>
      </div>
    </section>
  );
};

export default Header;

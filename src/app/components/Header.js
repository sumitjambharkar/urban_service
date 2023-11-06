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
        <li>Monday-saturday:10am - 8pm </li>
        <EmailOutlinedIcon />
        <li>cleannation00@gmail.com</li>
        <CallIcon />
        <li>+917021595850</li>
      </div>
      <div className="header_child">
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <GoogleIcon />
      </div>
    </section>
  );
};

export default Header;

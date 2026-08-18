import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const infoLinkClass =
  "inline-block text-[13px] leading-normal text-white/85 no-underline transition-colors duration-200 hover:text-gold";
const infoIconClass = "!text-[17px] text-gold";
const socialIconClass = "!text-[17px] text-white/85 transition-colors duration-200";

const Header = () => {
  return (
    <section className="hidden md:flex flex-wrap items-center justify-between gap-x-0 gap-y-1.5 bg-navy-deep px-12 py-2.5 text-[13px] text-white">
      <div className="flex flex-wrap items-center justify-center gap-x-2.5">
        <AccessTimeOutlinedIcon className={infoIconClass} />
        <li className="list-none">Monday - Sunday: 10am - 8pm</li>
        <EmailOutlinedIcon className={infoIconClass} />
        <li className="list-none">
          <a href="mailto:support@chandelite.in" className={infoLinkClass}>support@chandelite.in</a>
        </li>
        <CallIcon className={infoIconClass} />
        <li className="list-none">
          <a href="tel:+917021595850" className={infoLinkClass}>+91 7021595850</a>
        </li>
      </div>
      {/* <div className="flex flex-wrap items-center justify-center gap-x-2.5">
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/cleannation00" aria-label="Facebook" className="group">
          <FacebookIcon className={`${socialIconClass} group-hover:!text-gold`} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/star_home_interior/" aria-label="Instagram" className="group">
          <InstagramIcon className={`${socialIconClass} group-hover:!text-gold`} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@clean-nation6703" aria-label="YouTube" className="group">
          <YouTubeIcon className={`${socialIconClass} group-hover:!text-gold`} />
        </a>
      </div> */}
    </section>
  );
};

export default Header;

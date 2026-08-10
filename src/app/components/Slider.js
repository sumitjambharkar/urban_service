import Link from "next/link";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { btnLargeClass, btnOutlineClass } from "../uiClasses";

const Slider = () => {
  return (
    <div
      className="relative z-0 flex min-h-[560px] w-full items-center bg-cover bg-center py-[60px] max-md:min-h-[480px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(6, 13, 24, 0.92) 0%, rgba(6, 13, 24, 0.88) 40%, rgba(10, 21, 38, 0.6) 65%, rgba(10, 21, 38, 0.3) 100%), url(\"https://res.cloudinary.com/dclgpfheh/image/upload/v1733856748/Leonardo_Phoenix_a_sleek_and_modern_home_interior_with_a_brigh_0_xfw7ag.png\")",
      }}
    >
      <div className="relative max-w-[640px] px-[6vw] text-left max-md:px-[22px]">
        <h6 className="mb-4 font-body text-[15px] font-bold uppercase tracking-[2.5px] text-gold [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]">
          Fast &amp; Efficient
        </h6>
        <h5 className="mb-[18px] text-[52px] font-bold leading-[1.15] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.55)] max-md:text-[34px]">
          Trusted Chandelier &amp; Home Cleaning Services.
        </h5>
        <p className="mb-1.5 max-w-[520px] text-[17px] text-white/95 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]">
          From sparkling chandeliers to spotless homes, Chandelite brings skilled
          professionals and eco-friendly methods to every corner of your space.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link className={btnLargeClass} href="/service">
            Get A Free Quote
          </Link>
          <a className={btnOutlineClass} href="tel:+917021595850">
            Call +91 7021595850
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-[22px]">
          <div className="flex items-center gap-2.5 text-sm font-semibold text-white/90">
            <VerifiedUserOutlinedIcon className="!text-[20px] text-gold" />
            Verified Professionals
          </div>
          <div className="flex items-center gap-2.5 text-sm font-semibold text-white/90">
            <EnergySavingsLeafOutlinedIcon className="!text-[20px] text-gold" />
            Eco-Friendly Methods
          </div>
          <div className="flex items-center gap-2.5 text-sm font-semibold text-white/90">
            <ScheduleOutlinedIcon className="!text-[20px] text-gold" />
            On-Time Service
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

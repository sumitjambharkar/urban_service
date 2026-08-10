"use client";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallIcon from "@mui/icons-material/Call";
import { useState } from "react";
import axios from "axios";
import config from "@/config";
import Swal from 'sweetalert2';
import {
  subTitleClass,
  contactSectionClass,
  contactTitleClass,
  contactBoxRowClass,
  contactBoxClass,
  contactFormWrapClass,
  contactFormClass,
  formGroupClass,
  formGroupLabelClass,
  formGroupInputClass,
  btnClass,
} from "../uiClasses";

const contactBgStyle = {
  backgroundImage:
    "linear-gradient(120deg, rgba(10, 21, 38, 0.92), rgba(15, 30, 53, 0.82)), url(\"https://p.w3layouts.com/demos_new/template_demo/20-03-2021/cleanfreshly-liberty-demo_Free/1414300734/web/assets/images/banner2.jpg\")",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result  = await axios.post(`${config}/api/contact`, {
        name: formData.fullName,
        number: formData.phoneNumber,
        message: formData.message,
        email: formData.email,
      });
      Swal.fire({
        title: `Enquiry Send Successfully`,
        text: "You clicked the button!",
        icon: "success"
      });
      setFormData({fullName: "",
      phoneNumber: "",
      email: "",
      message: "",})
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className={contactSectionClass} style={contactBgStyle}>
      <div className={contactTitleClass}>
        <span className={subTitleClass} style={{ color: "#c9a24d" }}>Get In Touch</span>
        <h2 className="text-[42px] font-bold leading-[1.2] text-white">
          Professional Home &amp; <br />
          Chandelier Cleaning Services
        </h2>
        <p className="mb-7 mt-2.5 text-[17px] font-normal text-white/[0.82]">
          We specialize in delivering high-quality cleaning solutions tailored to your needs.
        </p>
        <div className={contactBoxRowClass}>
          <div className={contactBoxClass}>
            <CallIcon className="!text-[26px] text-gold" />
            <h3 className="text-base text-white">Phone</h3>
            <span className="text-sm text-white/85">
              <a href="tel:+917021595850" className="text-sm text-white/85 no-underline">+91 7021595850</a>
            </span>
          </div>
          <div className={contactBoxClass}>
            <EmailOutlinedIcon className="!text-[26px] text-gold" />
            <h3 className="text-base text-white">Email</h3>
            <span className="text-sm text-white/85">
              <a href="mailto:support@chandelite.in" className="text-sm text-white/85 no-underline">support@chandelite.in</a>
            </span>
          </div>
          <div className={contactBoxClass}>
            <AccessTimeOutlinedIcon className="!text-[26px] text-gold" />
            <h3 className="text-base text-white">Opening Hours</h3>
            <span className="text-sm text-white/85">10.00 am to 08.00 pm</span>
          </div>
        </div>
      </div>
      <div className={contactFormWrapClass}>
        <form onSubmit={handleSubmit} className={contactFormClass}>
          <h4 className="mb-1">Send An Enquiry</h4>
          <div className={formGroupClass}>
            <label className={formGroupLabelClass}>Full Name</label>
            <input
              required
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={formGroupInputClass}
            />
          </div>
          <div className={formGroupClass}>
            <label className={formGroupLabelClass}>Phone Number</label>
            <input
              required
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={formGroupInputClass}
            />
          </div>
          <div className={formGroupClass}>
            <label className={formGroupLabelClass}>Email Id</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={formGroupInputClass}
            />
          </div>
          <div className={formGroupClass}>
            <label className={formGroupLabelClass}>Message</label>
            <input
              required
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={formGroupInputClass}
            />
          </div>
          <button type="submit" className={`${btnClass} mt-1 w-full !px-0 !py-[15px]`}>
            Get Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

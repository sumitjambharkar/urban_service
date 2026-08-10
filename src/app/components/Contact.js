"use client";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallIcon from "@mui/icons-material/Call";
import { useState } from "react";
import axios from "axios";
import config from "@/config";
import Swal from 'sweetalert2';

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
    <div className="contact">
      <div className="contact_title">
        <span className="sub-title" style={{ color: "var(--gold)" }}>Get In Touch</span>
        <h2>
          Professional Home &amp; <br />
          Chandelier Cleaning Services
        </h2>
        <p>
          We specialize in delivering high-quality cleaning solutions tailored to your needs.
        </p>
        <div className="contact_box">
          <div className="box">
            <CallIcon style={{ color: "var(--gold)" }} />
            <h3>Phone</h3>
            <span>
           <a href="tel:+917021595850">+91 7021595850</a>

            </span>
          </div>
          <div className="box">
            <EmailOutlinedIcon style={{ color: "var(--gold)" }} />
            <h3>Email</h3>
            <span>
              <a href="mailto:support@chandelite.in">support@chandelite.in</a>
            </span>
          </div>
          <div className="box">
            <AccessTimeOutlinedIcon style={{ color: "var(--gold)" }} />
            <h3>Opening Hours</h3>
            <span>10.00 am to 08.00 pm</span>
          </div>
        </div>
      </div>
      <div className="contact_form">
        <form onSubmit={handleSubmit}>
          <h4>Send An Enquiry</h4>
          <div className="form_group">
            <label>Full Name</label>
            <input
              required
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label>Phone Number</label>
            <input
              required
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label>Email Id</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form_group">
            <label>Message</label>
            <input
              required
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">
            Get Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

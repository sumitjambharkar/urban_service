import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

const features = [
  "Eco-friendly cleaning methods",
  "Skilled & background-verified staff",
  "Transparent, affordable pricing",
  "Serving customers since 2018",
]

const About = () => {
  return (
   <>
    <h4 className='servicetitle'>About Us</h4>
    <div className='about'>
      <div className='about_img'>
        <img src="https://p.w3layouts.com/demos_new/template_demo/20-03-2021/cleanfreshly-liberty-demo_Free/1414300734/web/assets/images/ab1.jpg" alt="Chandelite cleaning team at work" />
      </div>
      <div className="about_left">
        <span className="sub-title">Who We Are</span>
        <h3 className="hny-title">Professional Cleaning, Painting &amp; Home Services</h3>
        <p className="my-3">
          Chandelite is a professional home services company delivering all-round
          cleaning, painting and interior solutions across India at honest prices.
          The customer is the king, and we are the servant.
        </p>
        <p>
          Our goal has been to establish new benchmarks for quality in the home
          services sector from the beginning. At every turn, we strive to go
          above and beyond what our customers expect.
        </p>
        <p>
          Since we started in 2018, we have consistently provided excellent
          service. Achieving quality at a low cost is challenging, but we
          succeeded &mdash; and our team of skilled, dedicated professionals is
          committed to delivering the best results, every time.
        </p>
        <div className="about-features">
          {features.map((feature) => (
            <div className="about-feature" key={feature}>
              <CheckCircleOutlineIcon />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="read">
          <a className="btn" href="https://api.whatsapp.com/send?phone=917021595850">Get Quote</a>
        </div>
      </div>
    </div>
   </>
  )
}

export default About

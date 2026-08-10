import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import {
  sectionTitleClass,
  aboutClass,
  aboutImgWrapClass,
  aboutImgFrameClass,
  aboutImgInnerClass,
  aboutLeftClass,
  subTitleClass,
  aboutSubTitleRowClass,
  aboutSubTitleRuleClass,
  hnyTitleClass,
  aboutLeadPClass,
  aboutFeaturesClass,
  aboutFeatureClass,
  aboutFeatureIconWrapClass,
  aboutFeatureIconClass,
  btnLargeClass,
} from '../uiClasses'

const features = [
  "Eco-friendly cleaning methods",
  "Skilled & background-verified staff",
  "Transparent, affordable pricing",
  "Serving customers since 2018",
]

const bodyPClass = "mb-3 text-base leading-[1.7] text-ink-soft"

const About = () => {
  return (
   <>
    <h4 className={sectionTitleClass}>About Us</h4>
    <div className={aboutClass}>
      <div className={aboutImgWrapClass}>
        <div className={aboutImgFrameClass}></div>
        <img src="https://p.w3layouts.com/demos_new/template_demo/20-03-2021/cleanfreshly-liberty-demo_Free/1414300734/web/assets/images/ab1.jpg" alt="Chandelite cleaning team at work" className={aboutImgInnerClass} />
      </div>
      <div className={aboutLeftClass}>
        <div className={aboutSubTitleRowClass}>
          <span className={aboutSubTitleRuleClass}></span>
          <span className={subTitleClass}>Who We Are</span>
        </div>
        <h3 className={hnyTitleClass}>Professional Cleaning, Painting &amp; Home Services</h3>
        <p className={aboutLeadPClass}>
          Chandelite is a professional home services company delivering all-round
          cleaning, painting and interior solutions across India at honest prices.
          The customer is the king, and we are the servant.
        </p>
        <p className={bodyPClass}>
          Our goal has been to establish new benchmarks for quality in the home
          services sector from the beginning. At every turn, we strive to go
          above and beyond what our customers expect.
        </p>
        <p className={bodyPClass}>
          Since we started in 2018, we have consistently provided excellent
          service. Achieving quality at a low cost is challenging, but we
          succeeded &mdash; and our team of skilled, dedicated professionals is
          committed to delivering the best results, every time.
        </p>
        <div className={aboutFeaturesClass}>
          {features.map((feature) => (
            <div className={aboutFeatureClass} key={feature}>
              <span className={aboutFeatureIconWrapClass}>
                <CheckCircleOutlineIcon className={aboutFeatureIconClass} />
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div>
          <a className={btnLargeClass} href="https://api.whatsapp.com/send?phone=917021595850">Get Quote</a>
        </div>
      </div>
    </div>
   </>
  )
}

export default About

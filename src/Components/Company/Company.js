import React, { useEffect } from "react";
import "./Company.css";
import companyImage from "../../assets/company_image.png";
import AboutUs from "./AboutUs/AboutUs";
import AboutCards from "./AboutCards/AboutCards";
import OurVision from "./OurVision/OurVision";
import Footer from "../Footer/Footer";
import FooterSocialMedia from "../Footer-Social-Media/FooterSocialMedia";

function Company() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="company-main">
        <div className="company-main-one">
          <div>
            <h1 style={{ fontSize: "50px" }}>
              Your Trusted Partner for ERP, LMS, and Attendance Systems for
              Schools
            </h1>
          </div>
          <div style={{ width: "90%", padding: "10px" }}>
            <p style={{}}>
              Our expert team collaborates seamlessly to deliver reliable,
              user-friendly ERP and LMS solutions. We're committed to providing
              top-notch, cost-effective services for all industries.
            </p>
          </div>
        </div>
        <div className="company-main-two">
          <img src={companyImage} alt="company"></img>
        </div>
      </div>
      <AboutUs></AboutUs>
      <AboutCards></AboutCards>
      <OurVision></OurVision>
      <Footer></Footer>
      <FooterSocialMedia></FooterSocialMedia>
    </>
  );
}

export default Company;

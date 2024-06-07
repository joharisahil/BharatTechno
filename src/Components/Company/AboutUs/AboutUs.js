import React from "react";
import "./AboutUs.css";
import dotImage from "../../../assets/dotdtory.png";

function AboutUs() {
  return (
    <div className="about-us-main">
      <div className="about-us-main-one">
        <div style={{ padding: "20px" }}>
          <h1 style={{ fontSize: "50px" }}>Who We Are</h1>
        </div>
        <div>
          <p>
            We are a team of highly experienced tech and market professionals
            with over two decades of expertise. Our diverse background spans
            multiple industries, allowing us to deliver innovative and effective
            ERP and LMS solutions. Our commitment is to provide reliable,
            user-friendly, and cost-effective services tailored to meet your
            unique needs.
          </p>
        </div>
      </div>
      <div className="about-us-main-two">
        <div style={{ padding: "20px" }}>
          <h1 style={{ fontSize: "50px" }}>What We Do</h1>
        </div>
        <div>
          <p>
            We specialize in developing cutting-edge ERP and LMS solutions
            tailored to your specific needs. Our team combines technical
            expertise with industry insights to create user-friendly, reliable,
            and market-compatible systems. We are dedicated to delivering
            high-quality, cost-effective services that streamline operations,
            enhance learning experiences, and drive business success across
            various sectors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

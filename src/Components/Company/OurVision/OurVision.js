import React from "react";
import "./OurVision.css";
function OurVision() {
  return (
    <div className="ourvision-main">
      <div className="ourvision-main-one">
        <h1 style={{ textAlign: "center" }}>
          We Give our Efforts To reach to a place from where we can see our
          mission and vision come true
        </h1>
      </div>
      <div className="ourvision-main-two">
        <div style={{ padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>Our Vision</h1>
          <p
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "20px",
            }}
          >
            Our vision is to empower organizations with innovative and efficient
            ERP and LMS solutions that enhance productivity, streamline
            operations, and foster growth. We strive to be leaders in the
            industry, continually adapting to evolving technologies and market
            demands, while maintaining our commitment to excellence,
            reliability, and customer satisfaction.
          </p>
        </div>
        <div style={{ padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>Our Mission</h1>
          <p
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "20px",
            }}
          >
            Our mission is to deliver top-quality ERP and LMS solutions that are
            reliable, user-friendly, and cost-effective. We aim to help
            organizations across various sectors achieve their goals by
            providing innovative technology and exceptional support. We are
            dedicated to fostering long-term partnerships and driving success
            through continuous improvement and customer-focused service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurVision;

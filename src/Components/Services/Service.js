import { React, useEffect } from "react";
import "./Service.css";
import OurServices from "./OurServices/OurServices";
import FooterSocialMedia from "../Footer-Social-Media/FooterSocialMedia";

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="service-main">
        <div className="service-haading">
          <h1>Empowering Innovation, Simplifying Complexity</h1>
        </div>
        <div className="service-content">
          <p>
            Empowering businesses with our advanced Attendance Marking Systems,
            ERP solutions, and Learning Management Systems, integrated
            seamlessly with our cutting-edge GPS technology.
          </p>
        </div>
      </div>
      <OurServices></OurServices>
      <FooterSocialMedia></FooterSocialMedia>
    </>
  );
}

export default Service;

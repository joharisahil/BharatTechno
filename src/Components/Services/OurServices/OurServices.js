import React, { useState } from "react";
import { TbBrandPython } from "react-icons/tb";
import { AiFillAndroid } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import {
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoAngular,
  BiLogoFlutter,
} from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import MobileDevelopmentImage from "../../../assets/mobile-development.png";
import WebDevelopmentImage from "../../../assets/web_development.png";
import AI from "../../../assets/AI.png";
import saasDevelopmentImage from "../../../assets/saas_image.png";
import { useNavigate } from "react-router-dom";

import "./OurServices.css";
import Footer from "../../Footer/Footer";

function OurServices() {
  const [para, setPara] = useState(false);
  function handlePargraph() {
    setPara(!para);
  }
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/company");
  };
  return (
    <>
      <div className="services-main">
        <div className="services-main-one">
          <div>
            <h2>Our Mobile App Products</h2>
          </div>
          <div>
            <p>
              At Techeefy, we offer advanced ERP and LMS mobile applications
              designed for seamless use anytime, anywhere. Our ERP system
              integrates key business processes, enhancing efficiency for
              educational institutions and various industries. The LMS app
              supports diverse learning formats, fostering effective education
              on the go. Our robust attendance marking system streamlines
              tracking for students and staff, ensuring real-time reporting.{" "}
              {para ? (
                <span>
                  Additionally, our bus conductor app simplifies route
                  management and ticketing, with integrated GPS for real-time
                  bus tracking. Techeefy’s mobile solutions ensure accessibility
                  and productivity, empowering businesses and educational
                  institutions to operate efficiently from any location.
                </span>
              ) : (
                ""
              )}
            </p>
            <button
              type="button"
              class="btn btn-light"
              style={{
                width: "150px",
                height: "45px",
                fontWeight: "bolder",
                color: "blue",
              }}
              onClick={handlePargraph}
            >
              {para ? <span>Show Less</span> : <span>Show More</span>}
            </button>
          </div>
          <div
            style={{
              marginLeft: "-70px",
              padding: "30px",
              width: "100%",
            }}
            className="listdiv"
          >
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <li>
                <BiLogoFlutter style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <AiFillAndroid
                  style={{ width: "40px", height: "40px" }}
                ></AiFillAndroid>
              </li>
              <li>
                <BiLogoNodejs
                  style={{ width: "40px", height: "40px" }}
                ></BiLogoNodejs>
              </li>
              <li>
                <SiMysql style={{ width: "40px", height: "40px" }}></SiMysql>
              </li>
              <li>
                <BiLogoMongodb style={{ width: "40px", height: "40px" }} />
              </li>
            </ul>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleNavigate}
              style={{
                width: "100px",
                height: "50px",
                fontWeight: "bolder",
                boxShadow: "5px 5px #7770e2",
              }}
            >
              Explore
            </button>
          </div>
        </div>
        <div className="services-main-two">
          <img src={MobileDevelopmentImage}></img>
        </div>
      </div>
      <div className="services-main">
        <div className="services-main-two">
          <img src={WebDevelopmentImage}></img>
        </div>
        <div className="services-main-one">
          <div>
            <h2>Our Web App Products</h2>
          </div>
          <div>
            <p>
              In our web products section, Techeefy offers sophisticated ERP and
              LMS solutions, complete with an intuitive Admin Panel for seamless
              management. Our ERP system integrates essential business
              processes, enhancing operational efficiency and data management.
              The LMS supports diverse educational formats, providing a
              comprehensive learning experience. The powerful Admin Panel allows
              administrators to easily manage users, courses, and data, ensuring
              smooth operation and secure information storage in the database.{" "}
              {para ? (
                <span>
                  These robust web products are designed to optimize
                  productivity and streamline workflows for educational
                  institutions and businesses alike.
                </span>
              ) : (
                ""
              )}
            </p>
            <button
              type="button"
              class="btn btn-light"
              style={{
                width: "150px",
                height: "45px",
                fontWeight: "bolder",
                color: "blue",
              }}
              onClick={handlePargraph}
            >
              {para ? <span>Show Less</span> : <span>Show More</span>}
            </button>
          </div>
          <div
            style={{
              marginLeft: "-70px",
              padding: "30px",
              width: "100%",
            }}
            className="listdiv"
          >
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <li>
                <BiLogoAngular style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <BiLogoReact
                  style={{ width: "40px", height: "40px" }}
                ></BiLogoReact>
              </li>
              <li>
                <BiLogoNodejs
                  style={{ width: "40px", height: "40px" }}
                ></BiLogoNodejs>
              </li>
              <li>
                <SiMysql style={{ width: "40px", height: "40px" }}></SiMysql>
              </li>
              <li>
                <BiLogoMongodb style={{ width: "40px", height: "40px" }} />
              </li>
            </ul>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleNavigate}
              style={{
                width: "100px",
                height: "50px",
                fontWeight: "bolder",
                boxShadow: "5px 5px #7770e2",
              }}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="services-main">
        <div className="services-main-one">
          <div>
            <h2>Our Artificial Intelligence Based Products</h2>
          </div>
          <div>
            <p>
              In our AI products section, Techeefy offers exclusive,
              cutting-edge AI-enhanced solutions integrated into our ERP, LMS,
              and attendance systems. Unique to the market, our AI modules
              streamline processes, improve data accuracy, and accelerate
              decision-making. In ERP, AI optimizes inventory management and
              predictive analytics. In LMS, it personalizes learning experiences
              and automates administrative tasks. Our AI-powered attendance
              system ensures precise tracking and reporting for students and
              staff.{" "}
              {para ? (
                <span>
                  These advanced AI products, available only from Techeefy, make
                  operations faster and more efficient, showcasing our
                  commitment to innovative technology.
                </span>
              ) : (
                ""
              )}
            </p>
            <button
              type="button"
              class="btn btn-light"
              style={{
                width: "150px",
                height: "45px",
                fontWeight: "bolder",
                color: "blue",
              }}
              onClick={handlePargraph}
            >
              {para ? <span>Show Less</span> : <span>Show More</span>}
            </button>
          </div>
          <div
            style={{
              marginLeft: "-70px",
              padding: "30px",
              width: "100%",
            }}
            className="listdiv"
          >
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <li>
                <TbBrandPython style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <GiArtificialIntelligence
                  style={{ width: "40px", height: "40px" }}
                />
              </li>
              <li>
                <BiLogoNodejs
                  style={{ width: "40px", height: "40px" }}
                ></BiLogoNodejs>
              </li>
              <li>
                <SiMysql style={{ width: "40px", height: "40px" }}></SiMysql>
              </li>
              <li>
                <BiLogoMongodb style={{ width: "40px", height: "40px" }} />
              </li>
            </ul>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleNavigate}
              style={{
                width: "100px",
                height: "50px",
                fontWeight: "bolder",
                boxShadow: "5px 5px #7770e2",
              }}
            >
              Explore
            </button>
          </div>
        </div>
        <div className="services-main-two">
          <img src={AI}></img>
        </div>
      </div>
      <div className="services-main">
        <div className="services-main-two">
          <img src={saasDevelopmentImage}></img>
        </div>
        <div className="services-main-one">
          <div>
            <h2>Our Custom Development</h2>
          </div>
          <div>
            <p>
              In our custom development section, Techeefy excels at tailoring
              our products to meet specific customer needs. We offer
              personalized solutions, customizing our ERP, LMS, and other
              systems to include the exact modules and features clients require.
              Our expert team works closely with customers to understand their
              unique challenges and goals, ensuring that the final product
              aligns perfectly with their expectations.{" "}
              {para ? (
                <span>
                  This bespoke approach guarantees that our solutions not only
                  fit seamlessly into existing workflows but also enhance
                  overall efficiency and productivity. With Techeefy, clients
                  receive a product that is truly their own, designed to meet
                  their precise requirements.
                </span>
              ) : (
                ""
              )}
            </p>
            <button
              type="button"
              class="btn btn-light"
              style={{
                width: "150px",
                height: "45px",
                fontWeight: "bolder",
                color: "blue",
              }}
              onClick={handlePargraph}
            >
              {para ? <span>Show Less</span> : <span>Show More</span>}
            </button>
          </div>
          <div
            style={{
              marginLeft: "-70px",
              padding: "30px",
              width: "100%",
            }}
            className="listdiv"
          >
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <li>
                <BiLogoAngular style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <BiLogoReact
                  style={{ width: "40px", height: "40px" }}
                ></BiLogoReact>
              </li>
              <li>
                <BiLogoNodejs
                  style={{ width: "40px", height: "40px" }}
                ></BiLogoNodejs>
              </li>
              <li>
                <SiMysql style={{ width: "40px", height: "40px" }}></SiMysql>
              </li>
              <li>
                <BiLogoMongodb style={{ width: "40px", height: "40px" }} />
              </li>
            </ul>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleNavigate}
              style={{
                width: "100px",
                height: "50px",
                fontWeight: "bolder",
                boxShadow: "5px 5px #7770e2",
              }}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default OurServices;

import React from "react";
import project from "../../assets/project.jpg";
import project_image from "../../assets/project-image-2.jpg";
import project_image_three from "../../assets/project-image-3.jpg";
import { useNavigate } from "react-router-dom";
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TbBrandPython } from "react-icons/tb";
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoAws,
} from "react-icons/bi";

function Project() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/services");
  };
  return (
    <div>
      <div className="main-content-project">
        <div className="main-content-one">
          <div>
            <h2>Enterprise Resource Planning Software</h2>
          </div>
          <div className="main-content-one-paragraph">
            <p>
              One-stop solution for effective management and uninterrupted
              control of Inspired Behavioral Inc., institutions.
            </p>
          </div>
          <div>
            <h3>Technology Stack</h3>
          </div>
          <div className="main-content-one-tech-stack-list">
            <ul>
              <li>
                <BiLogoReact style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <BiLogoNodejs style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <BiLogoMongodb style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <BiLogoAws
                  style={{ width: "40px", height: "40px" }}
                ></BiLogoAws>
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
        <div className="main-content-two" style={{}}>
          <img src={project} alt="project-image"></img>
        </div>
      </div>
      <div className="main-content-project">
        <div className="main-content-two" style={{}}>
          <img src={project_image} alt="project-image"></img>
        </div>
        <div className="main-content-one">
          <div>
            <h2>Learning Management System Software</h2>
          </div>
          <div className="main-content-one-paragraph">
            <p>
              A software application with a web-based technology that helps
              organizations plan, implement, and assess learning processes.
            </p>
          </div>
          <div>
            <h3>Technology Stack</h3>
          </div>
          <div className="main-content-one-tech-stack-list">
            <ul>
              <li>
                <BiLogoReact style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <BiLogoNodejs style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <BiLogoMongodb style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <BiLogoAws
                  style={{ width: "40px", height: "40px" }}
                ></BiLogoAws>
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
      <div className="main-content-project">
        <div className="main-content-one">
          <div>
            <h2>Attendence Marking System Using Artificial Intelligence</h2>
          </div>
          <div className="main-content-one-paragraph">
            <p>
              Revolutionizing attendance tracking, Techeefy's AI-powered system
              offers unprecedented accuracy and efficiency. Seamlessly
              integrated into our ERP and LMS, it ensures real-time monitoring,
              eliminating manual errors. Experience the future of attendance
              management with our cutting-edge AI technology.
            </p>
          </div>
          <div>
            <h3>Technology Stack</h3>
          </div>
          <div className="main-content-one-tech-stack-list">
            <ul>
              <li>
                <TbBrandPython style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <BiLogoNodejs style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <BiLogoMongodb style={{ width: "40px", height: "40px" }} />
              </li>
              <li>
                <BiLogoAws
                  style={{ width: "40px", height: "40px" }}
                ></BiLogoAws>
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
        <div className="main-content-two" style={{}}>
          <img src={project_image_three} alt="project-image"></img>
        </div>
      </div>
    </div>
  );
}

export default Project;

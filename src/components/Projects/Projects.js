import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/chatbot.png";
import facemask from "../../Assets/Projects/facemask.png";
import hostel from "../../Assets/Projects/hostel.png";
import useScrollAnimation from "../../useScrollAnimation";

function Projects() {
  useScrollAnimation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="animate-section">
          <h1 className="project-heading animate-child">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white" }} className="animate-child">
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {[
              {
                img: chatbot,
                title: "AI E-Commerce Chatbot",
                desc: "NLP-powered chatbot built with Python, Flask, and Django for Swatrix Innovations. Integrated with APIs for smooth deployment, optimized SQL queries and response handling, reducing customer response time by 60%.",
                link: "https://github.com/mahek620",
              },
              {
                img: facemask,
                title: "Face Mask Detection System",
                desc: "Real-time face mask detector built with Python, OpenCV, and TensorFlow. Trained on 10,000+ images, benchmarked 10+ models achieving 95%+ accuracy. Deployed as a scalable live video stream processing solution.",
                link: "https://github.com/mahek620",
              },
              {
                img: hostel,
                title: "Hostel Management System",
                desc: "Full-stack student management portal built with Django, SQLite, and Bootstrap following complete SDLC. Managed 100+ records with automated room allocation, reducing manual effort by 50% with responsive cross-browser design.",
                link: "https://github.com/mahek620",
              },
            ].map((project, index) => (
              <Col md={4} className="project-card animate-child" key={index}>
                <ProjectCard
                  imgPath={project.img}
                  isBlog={false}
                  title={project.title}
                  description={project.desc}
                  ghLink={project.link}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
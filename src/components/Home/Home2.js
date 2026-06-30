import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import useScrollAnimation from "../../useScrollAnimation";

function Home2() {
  useScrollAnimation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description animate-section">
            <div className="animate-child">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
            </div>
            <div className="animate-child">
              <p className="home-about-body">
                I'm a passionate Software Engineer and AI enthusiast who loves
                turning ideas into real-world solutions.
                <br />
                <br />
                I work with{" "}
                <i>
                  <b className="purple">Python, Django, Flask, and React </b>
                </i>
                to build intelligent, scalable applications.
                <br />
                <br />
                My interests include{" "}
                <i>
                  <b className="purple">
                    AI/ML, Full-Stack Development, and Computer Vision
                  </b>
                </i>
                .
                <br />
                <br />
                I love building things that make a difference — from{" "}
                <b className="purple">NLP-powered chatbots</b> to{" "}
                <b className="purple">real-time face mask detectors</b>.
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar animate-section">
            <div className="animate-child">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social animate-section">
            <div className="animate-child">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a href="https://github.com/mahek620" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><AiFillGithub /></a>
                </li>
                <li className="social-icons">
                  <a href="https://linkedin.com/in/mahek-raj" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><FaLinkedinIn /></a>
                </li>
                <li className="social-icons">
                  <a href="mailto:mahekraj620@gmail.com" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><AiOutlineMail /></a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
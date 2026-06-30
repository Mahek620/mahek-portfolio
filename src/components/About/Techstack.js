import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiDjango,
  SiFlask,
  SiTensorflow,
  SiOpencv,
  SiPostgresql,
  SiSqlite,
  SiBootstrap,
  SiScikitlearn,
  SiPowerbi,
} from "react-icons/si";
import { FaJava, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython fontSize={"24px"} />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava fontSize={"24px"} />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 fontSize={"24px"} />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 fontSize={"24px"} />
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt fontSize={"24px"} />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap fontSize={"24px"} />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango fontSize={"24px"} />
        <div className="tech-icons-text">Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask fontSize={"24px"} />
        <div className="tech-icons-text">Flask</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow fontSize={"24px"} />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv fontSize={"24px"} />
        <div className="tech-icons-text">OpenCV</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn fontSize={"24px"} />
        <div className="tech-icons-text">Scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql fontSize={"24px"} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite fontSize={"24px"} />
        <div className="tech-icons-text">SQLite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt fontSize={"24px"} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi fontSize={"24px"} />
        <div className="tech-icons-text">Power BI</div>
      </Col>
    </Row>
  );
}

export default Techstack;
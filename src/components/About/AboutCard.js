import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Mahek Raj</span> from{" "}
            <span className="purple">Dhanbad, Jharkhand, India</span>.
            <br />
            I'm a final-year B.Tech student in{" "}
            <span className="purple">
              Computer Science and Engineering (Data Science)
            </span>{" "}
            at{" "}
            <span className="purple">
              Aditya College of Engineering, Surampalem
            </span>
            .
            <br />
            I have interned as a{" "}
            <span className="purple">Web Development Intern at APSSDC</span>{" "}
            and as an{" "}
            <span className="purple">AI Intern at Swatrix Innovations</span>.
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Visualization 📊
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Open Source Projects 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mahek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
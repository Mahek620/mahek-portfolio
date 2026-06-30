import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const nameRef = useRef(null);
  const hiRef = useRef(null);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
    const finalText = "MAHEK RAJ";
    const duration = 2200; // slower = more dramatic
    const intervalTime = 45;
    let iterations = 0;
    const totalIterations = duration / intervalTime;

    // Animate "Hi There!" sliding in slowly
    const hi = hiRef.current;
    if (hi) {
      hi.style.opacity = "0";
      hi.style.transform = "translateX(-40px)";
      hi.style.transition = "opacity 1s ease, transform 1s ease";
      setTimeout(() => {
        hi.style.opacity = "1";
        hi.style.transform = "translateX(0)";
      }, 300);
    }

    // Matrix decode on name
    const name = nameRef.current;
    if (!name) return;

    name.style.opacity = "1";

    const interval = setInterval(() => {
      name.innerText = finalText
        .split("")
        .map((letter, index) => {
          if (letter === " ") return " ";
          // Lock letters progressively from left to right
          if (index < Math.floor((iterations / totalIterations) * finalText.length)) {
            return letter;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      iterations++;

      if (iterations >= totalIterations) {
        clearInterval(interval);
        name.innerText = finalText;

        // Glow pulse after decode finishes
        name.style.transition = "text-shadow 0.3s ease";
        name.style.textShadow =
          "0 0 20px #cd5ff8, 0 0 40px #c770f0, 0 0 80px #9b30d9";
        setTimeout(() => {
          name.style.textShadow = "";
        }, 1000);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 ref={hiRef} style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M{" "}
                <strong
                  ref={nameRef}
                  className="main-name"
                  style={{ opacity: 0, letterSpacing: "2px" }}
                >
                  MAHEK RAJ
                </strong>
              </h1>

              <motion.div
                style={{ padding: 50, textAlign: "left" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                <Type />
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-img-float"
                style={{ maxHeight: "450px" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
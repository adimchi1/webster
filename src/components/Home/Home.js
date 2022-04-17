import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Book Cover.jpeg";
import Particle from "../Particle";

import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
          <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              Webster is excited (and a little anxious) about the new year and new school. He is different. 
             However, this year will be different! As his mother drops him off and waves goodbye, he heads 
                
                into a day filled with mishaps and meanies. Webster discovers that what makes him unusual <br></br>
                makes him unique. Everyone is different, and that is magnificent!
                makes him unique. Everyone is different, and that is magnificent!<p></p>
                  <br/>
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                
              </h1>

              
           

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            
          </Row>
        </Container>
      </Container>
     
    </section>
  );
}

export default Home;

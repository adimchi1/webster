import React from "react";
import Card from "react-bootstrap/Card";
import {Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import Type from "./Type";
import ELE from "../../Assets/Elettra.jpeg";
import Launch from "@material-ui/icons/Launch"
import Email from "@material-ui/icons/Email"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           
           
           <span className="purple"> Kim </span> grew up an only child in<span className="purple"> Conroe, Texas</span> . She graduated from <span className="purple"> Texas A&M University</span>
            in 1992 with a degree in Elementary Education. She was a fourth-grade teacher for several years,
            which she absolutely loved! <span className="purple">Kim</span> and her husband <span className="purple">Charles</span> have two young adult kids and live
             with their dog, <span className="purple">Stella</span>, and cat, <span className="purple">Gucci</span>, in <span className="purple">Houston, Texas</span>,<span className="purple"> Texas</span>. <span className="purple">Kim</span> still loves working with kids in
              education and is an academic tutor. She enjoys traveling, music, and spending time with family
               and friends.
            <br />
          
           <br/>
           <br/>
          Kim started writing Webster when her kids were little. The story idea came from her experience
          teaching and seeing all the dynamics of different personalities in a classroom. She saw kids’
          insecurities, the courage it takes to try to make friends, and the heartbreak when they are
          excluded, or kids are being mean. Because she was busy being a mom, she ended up putting
          Webster away in a drawer where it sat for about twenty years. She always knew she would
          follow through someday with publishing her children’s book. Once her two little spiders
          graduated from high school and went away to college, she pulled it back out and got to work on
          her passion project!<br/>
        
          </p>
         
          <p style={{color: "rgb(155 126 172)" }}>
                           Be kind, be accepting, be a good friend, be appreciative of differences, and be yourself!
          </p>
          <footer className="blockquote-footer">Kimberly Miller</footer>
        </blockquote>
         <ul>
           
            <li className="about-activity">
              <ImPointRight /> the Illustrator: <span className="purple">Elettra Cudignotto </span> <br/>
               <Col md={30} style={{ paddingBottom: 50 }}style={{ paddingTop: 50 }}>
              <img
                src={ELE}
                alt="elettra"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
                style={{maxWidth:"200px"}}
                style={{borderRadius:99}}
                
              />
            </Col>

            Elettra was born in 1990 and is from Vicenza, Italy. In 2012, she graduated with a degree in Visual Arts and in 2014, obtained a degree in Economics and Management of Arts. She began to work as a freelance illustrator in 2015, and this remains her full-time, beloved work—which surprises her day by day! 

You can find out more about Elettra by visiting her website <a
                href="www.elettracudignotto.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Launch />
              </a> or her Instagram @elettraillustration. Elettra can also be reached via email @  <a
                href="elettra90@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Email />
              </a> 

            </li>
          </ul>
          
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

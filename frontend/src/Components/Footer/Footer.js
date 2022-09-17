import React from "react";
import "./FooterStyle.css";
import { Row, Col } from "reactstrap";

export default function Footer() {
  return (
    <div className="footer-card">
 
     
      <Row>
      
        <Col>
          <div className="footer--head1">Featured on </div>
          <p className="break-line" />
        </Col>
      </Row>

      <Row>
        <Col
          className=""
          md={{
            offset: 2,
            size: 9,
          }}
          sm="12"
        >
          <div className="footer-card-content">
            <img
              src={require("../assets/NicePng_white-png_135300.png")}
              height={30}
              width={85}
              className="business--logo"
              alt=""
            />
            <img
              src={require("../assets/NicePng_direct-tv-logo-png_2230304.png")}
              height={35}
              width={70}
              className="business--logo"
              alt=""
            />
            <img
              src={require("../assets/NicePng_tripadvisor-logo-png_9588046.png")}
              height={42}
              width={90}
              className="business--logo"
              alt=""
            />
            <img
              src={require("../assets/NicePng_mountain-drawing-png_2943116.png")}
              height={65}
              width={85}
              className="business--logo"
              alt=""
            />
        
          </div>
        </Col>
      </Row>

      <Row>
        <Col
          className=""
          md={{
            offset: 2
          }}
          sm="9"
        >
          <p>
            <small className="footer-details">
            To find a local brewery, start by looking it up online. Using Brewery Finder is an easy way 
            to learn about different types of beers and locate nearby breweries. It also works as a tool for 
            finding new beers or rating your favorites on a scale of 1 to 10+. Be sure to check out these 
            other resources if you want to learn more! lists over 13,000 beers from around the world, graded 
            on a scale of 100 points each. It shows each brew's style, country of origin, age requirement, 
            alcohol percentage, price and more information about what makes this distinct beverage unique to 
            its culture?
            </small>
          </p>
        </Col>
      </Row>

      <Row>
        <Col
          className=""
          md={{
            offset: 3,
            size: 7,
          }}
          sm="12"
        >
          <div>
            <p>
              <small className="follow-text">FOLLOW US ON SOCIAL MEDIA</small>{" "}
              <label className="footer-right">
                <i className="fab fa-instagram" />
                <i className="fab fa-facebook-square" />
                <i className="fab fa-linkedin" />
                <i className="fab fa-twitter-square" />
              </label>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

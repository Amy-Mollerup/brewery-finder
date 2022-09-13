import React from "react";
import {Row, Col } from "reactstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./BrewerDashStyle.css";
import {Link} from "react-router-dom";

export default function BrewerDashboard() {
  return (
    <>
      <Header />

      <div className="dash--container">
        {/* <div className="brewery-info"> */}
        <Row className="dashboard--section">
          <Col
            className="dash--profile"
            sm={{
              offset: 0,
              size: "auto",
            }}
          >
         {/*  Company or Brewer profile image and name will retrieve API  */}
            <img src={require('../assets/profilePic1.png')} alt="Avatar" />
            <span> Jane Brewer Co.</span>
             </Col>
        </Row>

        <Row>
          <Col
            className="dashboard--item"
            md={{
              offset: 2,
              size: 3,
            }}
          >
            <img src={require('../assets/brewer-DashPic.png')} alt=""  />
            <h3>Brewery Information</h3>
            <p>
            Brewing Information  plans, schedules and tracks beer 
            production, integrates data, identifies costs and potential savings, 
            and maintains quality control across the brew house and cellars to 
            produce consistent, high quality beer 
            </p>
          </Col>

          <Col
            className="dashboard--item"
            md={{
              size: 3,
            }}
          >
            <Link className = "svgbrew" to="/beerDetails">
            <img className ="svg" src={require('../assets/cheers-DashPic.png')} alt="" />
            </Link>
            <h3 className = "h3brew">Beer</h3>
            <p>
            Filter and search a list of all your beers – This contains the ‘master’ 
            assigned Ingredients, availability and much more.
            </p>
          </Col>

          <Col
            className="dashboard--item"
            md={{
              size: 3,
            }}
          >
            <img src={require('../assets/beerlover-DashPic.png')} alt="" />
            <h3>Beer Lovers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </Col>

          <Col
            md={{
              size: 3,
            }}
          ></Col>
        </Row>
      </div>

      <Footer />
    </>
  );
}

import React from "react";
import {Row, Col } from "reactstrap";
import "./BrewerDashStyle.css";
import {Link} from "react-router-dom";
import BreweryCardDemoPage from "../../Components/BreweryCardComponent/BreweryCardDemoPage";

export default function BrewerDashboard(props) {
  return (
    <>

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
            <img src={require('../../Components/assets/profilePic1.png')} alt="Avatar" />
            <span> Jane Brewer Co.</span>
             </Col>
             <Col>
             <h1>Your Breweries</h1>
             </Col>
        </Row>

        <BreweryCardDemoPage brewer={props.user.id}/>
      </div>
    </>
  );
}

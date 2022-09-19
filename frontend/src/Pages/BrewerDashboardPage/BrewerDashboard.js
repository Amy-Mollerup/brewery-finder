import React from "react";
import { Row, Col } from "reactstrap";
import "./BrewerDashStyle.css";
import { Link } from "react-router-dom";
import BreweryCardDemoPage from "../../Components/BreweryCardComponent/BreweryCardDemoPage";

export default function BrewerDashboard(props) {
  return (
    <>
      <Row className="dash--container">
        <Col
          className="dash--profile"
          sm={{
            offset: 1,
            order: 0,
            size: 4,
          }}
        >
          <img
            src={require("../../Components/assets/profilePic1.png")}
            alt="Avatar"
          />
          <span> Jane Brewer Co.</span>
        </Col>
        <Col
          className=""
          sm={{
            offset: 0,
            order: 1,
            size: 19,
          }}
        >
          <BreweryCardDemoPage brewer={props.user.id} />
        </Col>
      </Row>
    </>
  );
}

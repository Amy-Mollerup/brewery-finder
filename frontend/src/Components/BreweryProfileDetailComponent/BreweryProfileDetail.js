import React from "react";
import { Row, Col } from "reactstrap";
import "./BreweryProfileStyle.css";

export default function BreweryProfileDetail() {
  return (
    <Row xs="2">
      <Col className="breweryInfo--profile" xs='1'>
        <img src={require("../assets/profilePic1.png")} alt="Avatar" />{" "}
      </Col>
      <Col className="breweryName--contain">
        <span> Jane Brewer Co. </span>
      </Col>
    </Row>
  );
}

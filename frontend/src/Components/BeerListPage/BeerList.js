import React from "react";
import {Row, Col, Button } from "reactstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



export default function BeerList() {
return (
    <>
      <Header />

      <Row xs="3">
        <Col xs="2">
         Beer Name
        </Col>

        <Col md="5">
          Beer Details
        </Col>

        <Col md="5">
         <button> Edit</button>
         <button> Delete</button>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

import React from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import "./BreweryFormStyle.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BusinessHours from "../BusinessHoursComponent/BusinessHours";
import BrewerInformation from "../BrewerInformationComponent/BrewerInformation";
import FileUploader from "../FileUploaderComponent/FileUploader";
import BreweryProfileDetail from "../BreweryProfileDetailComponent/BreweryProfileDetail";

export default function BreweryForm() {
  return (
    <>
      <Header />
      <Row xs="3">
        <Col xs="2">
          <BreweryProfileDetail />
        </Col>

        <Col md="4">
          <BrewerInformation />
        </Col>

        <Col md="5">
          <BusinessHours />
          <FileUploader />
          <Button> Submit </Button>
        </Col>
      </Row>

      <Footer />
    </>
  );
}

import React from "react";
import {Row, Col, Button } from "reactstrap";
import FileUploader from "../FileUploaderComponent/FileUploader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./BeerDetailStyle.css";
import BreweryProfileDetail from "../BreweryProfileDetailComponent/BreweryProfileDetail";
import BeerForm from "../BeerFormComponent/BeerForm";


export default function BeerDetails() {
return (
    <>
      <Header />

      <Row xs="3">
        <Col xs="2">
          <BreweryProfileDetail />
          
        </Col>

        <Col md="5">
          <BeerForm />
          <FileUploader />  
          <Button> Submit </Button>
        </Col>

        <Col md="5">
         <h5> Beer Client Preview </h5>  
        </Col>
      </Row>
      <Footer />
    </>
  );
}

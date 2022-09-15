import React from "react";
import {Row, Col, Button } from "reactstrap";
import FileUploader from "../../Components/FileUploaderComponent/FileUploader";
import "./BeerDetailStyle.css";
import BreweryProfileDetail from "../../Components/BreweryProfileDetailComponent/BreweryProfileDetail";
import BeerForm from "../../Components/BeerFormComponent/BeerForm";


export default function BeerDetails() {
return (
    <>

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
    </>
  );
}

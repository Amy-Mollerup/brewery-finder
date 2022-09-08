import React from "react";
import {Row, Col, Button } from "reactstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BreweryProfileDetail from "../BreweryProfileDetailComponent/BreweryProfileDetail";
import BrewerBeerList from "../BeerListComponent/BrewerBeerList";



export default function BeerList() {
return (
    < div className="ur">
     <Header />
      <Row >
        <Col xs="1" className="mt-1">
         <BreweryProfileDetail />
        </Col>
        <Col sm="22">
          <BrewerBeerList />
        </Col>
        </Row>
      <Footer />
    </div>
  );
}

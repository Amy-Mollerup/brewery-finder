import React from "react";
import { Row, Col, Button, Container } from "reactstrap";
import BreweryProfileDetail from "../BreweryProfileDetailComponent/BreweryProfileDetail";
import BrewerBeerList from "./BreweryBeerListComponent/BrewerBeerList";

export default function BeerList() {
  return (
    <>
      <Row>
        <Col
          md={{
            offset: 0,
            size: 1,
          }}
          sm="12"
        >
          <BreweryProfileDetail />
        </Col>

        <Col
          sm={{
            offset: -1,
            size: "auto",
          }}
        >
          <BrewerBeerList />
        </Col>
      </Row>
    </>
  );
}

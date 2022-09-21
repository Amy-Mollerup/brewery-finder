import React from "react";
import { Row, Col } from "reactstrap";
import Top4BeerLoverComponent from "./BeerLoverWelcomeComponent/Top4BeerLoverComponent";
import BeerLoverComponent from "./BeerLoverWelcomeComponent/BeerLoverComponent";




export default function BeerLoverWelcomePage() {
  return (
    <>
      <Row>
        <Col
          className=""
          sm={{
        offset: 1,
        order: 0,
        size: 3
      }}
        >
          <BeerLoverComponent />
        </Col>
        <Col
          className=""
          md={{
        offset: 2,
        order: 1,
        size: 6
      }}
        >
          <Top4BeerLoverComponent />
        </Col>
      </Row>
    </>
  );
}

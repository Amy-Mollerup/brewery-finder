import React from "react";
import {Row, Col } from "reactstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Top4BeerLoverComponent from "../BeerLoverWelcomeComponent/Top4BeerLoverComponent";
import BeerLoverComponent from "../BeerLoverWelcomeComponent/BeerLoverComponent";




export default function BeerLoverWelcomePage() {
return (
   <>
   <Header />
<Row>
<Col
  className=""
  sm="5"
  fluid="sm"
>
  <BeerLoverComponent />
</Col>
<Col
  className=""
  sm="7"
  fluid="sm"
>
   <Top4BeerLoverComponent />
</Col>
</Row>

      <Footer />
      </>
  );
}

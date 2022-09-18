import React from "react";
import { Row, Col, Card } from "reactstrap";
import "./BreweryInfomationStyle.css";
import dummyData from "./data/BreweryInfo-Dummy";

export default function BreweryInformationModal() {
  const BreweryInformationModal = dummyData.map((item) => (
    <Card key={item.id} className="brewerInfo---Container">
      <Row>
        <Col
          className="breweryInfo---Image"
          xs={{
            order: 0,
            size: 2,
            offset: 1,
          }}
        >
          <img src={item.image} alt="" />
        </Col>

        <Col
          className="brewerInfo---dash"
          lg={{
            order: 0,
            size: 8,
          }}
        >
          <Col>
            <div className="one-line">
              <h2>Name</h2>
              <h3 className="highlighted">
              {item.name}</h3>
            </div>
            <div className="one-line">
              <h2>Address</h2>
              <h3 className="highlighted">
                {item.street}   <br />
                {item.city}  <br />
                {item.state}  <br />
                {item.post_code}
              </h3>
            </div>
            <div className="one-line">
              <h2>Phone</h2>
              <h3 className="highlighted">
              {item.phone}</h3>
            </div>
              <div className="one-line">
              <h2>Website</h2>
              <h3 className="highlighted">
              {item.website} </h3>
            </div>
          </Col>
         
         {/*  <Col>
            <div className="two-line">
              <h2>Phone</h2>
              <h2>Website</h2>
            </div>
            <div className="two-line">
              <h3 className="highlighted">{item.phone}</h3>
              <h3 className="highlighted">{item.website}</h3>
            </div>
          </Col> */}
          <Col>
            <div className="one-line-bio">
              <h2>Who we are?</h2>
            
              <p className="highlighted">{item.description}</p>
            </div>
            <Col>
              <button>Beer List</button>
            </Col>
          </Col>
        </Col>
      </Row>
    </Card>
  ));

  return <>{BreweryInformationModal}</>;
}

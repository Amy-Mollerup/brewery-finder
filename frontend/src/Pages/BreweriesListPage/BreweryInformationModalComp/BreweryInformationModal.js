import React from "react";
import { Row, Col, Card } from "reactstrap";
import "./BreweryInformationStyle.css";
import { Link } from "react-router-dom";

export default function BreweryInformationModal(props) {


  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const breweryHours = daysOfWeek.map((value, index) => {
    
    return (
      <Row>
        <Col>
          {value}
        </Col>
        <Col>
          Open: {props.brewery.breweryHours[index] ? props.brewery.breweryHours[index][0] : "Closed"}
        </Col>
        <Col>
          Close: {props.brewery.breweryHours[index] ? props.brewery.breweryHours[index][1] : "Closed"}
        </Col>
      </Row>
    )
  })

  const BreweryInformationModal = (
    <Card key={props.brewery.breweryId} className="brewerInfo---Container">
      <Row>
        <Col
          className="breweryInfo---Image"
          xs={{
            order: 0,
            size: 2,
            offset: 1,
          }}
        >
          <img src={props.brewery.image} alt="" />
        </Col>

        <Col
          className="brewerInfo---dash"
          lg={{
            order: 0,
            size: 8,
          }}
        >
          <Col>
            <br />
            <div className="one-line">
              <h2>Name</h2>
              <h3 className="highlighted">{props.brewery.breweryName}</h3>
            </div>
            <div className="one-line">
              <h2>Address</h2>
              <h3 className="highlighted">
                {props.brewery.breweryStreet} <br />
                {props.brewery.breweryCity} <br />
                {props.brewery.breweryState} <br />
                {props.brewery.breweryPostCode}
              </h3>
            </div>
            <div className="one-line">
              <h2>Phone</h2>
              <h3 className="highlighted">{props.brewery.phoneNumber}</h3>
            </div>
            <div className="one-line">
              <h2>Website</h2>
              <h3 className="highlighted">{props.brewery.website} </h3>
            </div>
            <div className="one-line">
              <h2>Website</h2>
              <h3 className="highlighted">{breweryHours} </h3>
            </div>
          </Col>

          <Col>
            <div className="one-line-bio">
              <h2>Who we are?</h2>

              <p className="highlighted">{props.brewery.description}</p>
            </div>
            <Col>
            <Link to={`/beerList/${props.brewery.breweryId}`}>
              <button id="beerPath-link">
                {/* do not delete span tags */}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                   Beer List
              </button>
            </Link>
          
            </Col>
          </Col>
        </Col>
      </Row>
    </Card>
  );

  return <>{BreweryInformationModal}</>;
}
import React from 'react'
import { Row, Col, Button, Container } from "reactstrap";


const BeerListCard = (props) => {
  return (
    <div className="UserBeerList--container">
          <Row>
            <Col>
              <div className="beerList--product">
                <div className="beerList--img">
                  <img src={props.beer.beerImage} alt="beerImage" />
                </div>
    
                <div className="beerList--text">
                  <div className="category">
                    
                  </div>
                  <div className="title--product">
                    <h3>{props.beer.beerName}</h3>
                  </div>
                  <div className="description--prod">
                    <p>{props.beer.beerDescription}</p>
                  </div>
                  <div className="card--footer">
                    <div className="beerList--left">
                      <span class="price">ABV {props.beer.beerABV}% </span>{" "}
                      <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
  )
}

export default BeerListCard
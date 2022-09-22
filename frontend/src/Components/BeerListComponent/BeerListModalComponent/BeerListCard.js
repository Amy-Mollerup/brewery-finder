import React from 'react'
import { Row, Col } from "reactstrap";
import "./BeerListModalStyle.css"


/* CSS is link to Pages>UserBeerList>Component>UserBeerListStyle.css */



const BeerListCard = (props) => {
  return (
    <div className="beerList----container">
          <Row>
            <Col>
              <div className="beerList----product">
                <div className="beerList----img">
                  <img src={props.beer.beerImage} alt=""  />
                </div>
    
                <div className="beerList----text">
                  <div className="category">
                    
                  </div>
                  <div className="title----product">
                    <h3>{props.beer.beerName}</h3>
                  </div>
                  <div className="description----prod">
                    <p>{props.beer.beerDescription}</p>
                  </div>
                  <div className="card----footer">
                    <div className="beerList----left">
                      <span className="price">ABV {props.beer.beerABV}% </span>{" "}
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
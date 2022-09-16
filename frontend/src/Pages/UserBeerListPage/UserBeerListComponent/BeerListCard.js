import React from 'react';
import Popup from "reactjs-popup";
import { Row, Col, Button, Container } from "reactstrap";
import BeerReviewPage from "../../../Components/BLReviewModalComp/BeerReviewPage";


const BeerListCard = (props) => {
  
    const reviewLiked = <BeerReviewPage beerId={props.beer.beerId} beer={props.beer}/>;
    
    return (
        <div className="UserBeerList--container">
        <Row>
          <Col>
            <div className="beerList-cp-product">
              <div className="beerList-cp-img">
                <img src={props.beer.beerImage} alt="beerImage" />
              </div>
  
              <div className="beerList-cp-text">
                <div className="category">
                  {/* https://react-popup.elazizi.com/react-modal */}
                  <Popup
                    trigger={<span>{props.beer.beerType}</span>}
                    position="center center"
                    modal
                    >
                    {(close) => (
                      <div>
                        {reviewLiked}
                        <a className="close" onClick={close}>
                          {" "}
                          &times;
                        </a>
                      </div>
                    )}
                  </Popup>
                </div>
                <div className="title-product">
                  <h3>{props.beer.beerName} <br/> {props.beer.beerABV}% ABV</h3>
                </div>
                <div className="description-prod">
                  <p>{props.beer.beerDescription}</p>
                </div>
                <div className="card-footer">
                  <div className="beerList-left">
                    {" "}
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <div className="beerList-right">
                    <a href="#" className="review-btn">
                      <i className="zmdi zmdi-shopping-basket"></i>
                    </a>
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
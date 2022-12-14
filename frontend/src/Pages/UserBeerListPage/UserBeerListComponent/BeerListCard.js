import React from 'react';
import Popup from "reactjs-popup";
import { Row, Col, Button, Container } from "reactstrap";
import BeerReviewPage from "../../../Components/BLReviewModalComp/BeerReviewPage";
import FooterPage from "../../../Components/Footer/Footer";

const BeerListCard = (props) => {
  
    const reviewLiked = <BeerReviewPage beerId={props.beer.beerId} beer={props.beer}/>;
    
    return (
      <>
        <div className="UserBeerList--container">
        <Row>
          <Col>
            <div className="beerList-cp-product">
              <div className="beerList-cp-img">
                <img src={props.beer.beerImage} alt="beerImage" height={210} />
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
                  <h3>{props.beer.beerName} <br/> <span>{props.beer.beerABV}% ABV</span></h3>
                </div>
                <div className="description-prod">
                  <p>{props.beer.beerDescription}</p>
                </div>
                <div className="card-footer">
                  <div className="beerList-left">
                    {" "}
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>

                  {/*More Info direct to beer details */}
                 {/*  <div className="beerList-right">
                    <a href="#" className="review-btn">
                      <i className="zmdi zmdi-shopping-basket-review-link"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
       
      </div>
      
      </>
  )
}

export default BeerListCard
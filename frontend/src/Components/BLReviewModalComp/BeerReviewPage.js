import React, { useEffect } from "react";
import {Row, Col} from "reactstrap";
import "./BeerReviewPageStyle.css";
import "../BeerListComponent/data/product_data";
import BeerPic from "../assets/Beer Can Stone.png";
import Reviewer from "../ReviewerComponent/Reviewer";
import reviewData from "../ReviewerComponent/data/ReviewData";
import axios from "axios";

export default function BeerReviewPage(props) {

  const [reviews, setReviews] = React.useState([])
  const [brewery, setBrewery] = React.useState('')


    function getReviews(){
      const url = 'http://localhost:8081/beer/' + props.beerId + '/reviews'
      axios.get(url, [])
      .then(resp => {
          setReviews(resp.data)
      })
    }

    function getBrewery(){
      const url = 'http://localhost:8081/breweries/' + props.beer.brewery
      axios.get(url, [])
      .then(resp => {
        setBrewery(resp.data.breweryName)
      })
    }
    
    useEffect(() => {getReviews()
       getBrewery()}, [])


    const reviewLists = reviews.map((item) =>
    <div className="reviewRating--card" key={item.id}>  
        <div className="card_header">
             <p>{item.review}</p>
            {/* <h4>{item.username}</h4> */}
            <p className="reviewRating--display">{item.rating}</p>
            
            
        </div>
    </div>

);


  return (
    <div id="container" className="beer-review">
    <Row  xs="2">
      <Col id="product-img">
         <img
          src={props.beer.beerImage}
          alt=""
          title="beer-pic"
          className="beer fade-in one"
          height={250}
        />
      </Col>

      <Col id="product-info" className="clearfix-auto">
      <div id="product-spec" className="beer-wrapper">
          <h1>{props.beer.beerName}</h1>
          {/* <h3 className="rrp">No Achol</h3> */}
          <h3 className="beer--type">{props.beer.beerType}</h3>
        </div>
    
        <h4 className="clearfix"> </h4>
        <p>
        {props.beer.beerDescription}{" "}
        </p>

         <div id="product-options" className="clearfix-auto">
          <div id="color1" className="beer-wrapper">
            {" "}
            <h3 id="color3">
              Brewer<label>{props.beer.breweryName}</label>{" "}
            </h3>
          </div>
          <div>
            <h3 id="color2">
              ABV <label>{props.beer.beerABV}%</label>{" "}
            </h3>
          </div>
        </div>
      </Col>

      <Col className="review-card" xs="5">
            {reviewLists} 
            
        </Col>

        <Col className="reviewPost--contain" xs="6">
        <Reviewer />  
        </Col>

    </Row>

    </div>
  );
}


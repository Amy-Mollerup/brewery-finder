import React, { useEffect } from "react";
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
          console.log(resp.data);
      })
    }

    function getBrewery(){
      const url = 'http://localhost:8081/breweries/' + props.beer.brewery
      axios.get(url, [])
      .then(resp => {
        setBrewery(resp.data.breweryName)
        console.log(resp.data)
        console.log(brewery)
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
    <section id="container" className="beer-review">
      <div id="product-img">
        <img
          src={props.beer.beerImage}
          alt=""
          title="BeerLover"
          className="beer-logo"
        />

        <img
          src={props.beer.beerImage}
          alt=""
          title="beer-pic"
          className="beer fade-in one"
        />
      </div>

      <div id="product-info" className="clearfix-auto">
        <div id="product-spec" className="beer-wrapper">
          
          <h1>{props.beer.beerName}</h1>

          {/* <h3 className="rrp">No Achol</h3> */}
          <h3 className="beer--type">{props.beer.beerType}</h3>
        </div>

        <div id="ratings">
          <span className="review-rating">
            <span className="user-review ninety"></span>
          </span>
        </div>

        <h4 className="clearfix"></h4>
        <p>
        {props.beer.beerDescription}{" "}
        </p>

        <div id="product-options" className="clearfix-auto">
          <div id="color1" className="beer-wrapper">
            {" "}
            <h3>
              Brewer<label>{brewery}</label>{" "}
            </h3>
          </div>
          <div>
            <h3 id="color2">
              ABV <label>{props.beer.beerABV}%</label>{" "}
            </h3>
          </div>
        </div>

        {/*  <a href="#" title="Add to cart" className="button clearfix-auto" >
      <img src='https://www.dropbox.com/s/s8c7kezjjdqey6e/shopping%20cart.svg?raw=1' className="shopping-cart"/>
      Add to cart</a>
    
    <a href="#" />
      <img src='https://www.dropbox.com/s/9ojob3v6oae6rp5/sharing-interface.svg?raw=1' className="share" alt="Share this"/> */}
      
      <div className="review-card">
            {reviewLists}
        </div>
        
        <div className="reviewPost--contain">
          <Reviewer />
        </div>
      </div>
    </section>
  );
}

{
  /* <div id="product-options" className="clearfix-auto">
<div id="color" className="beer-wrapper">
  <h4 className="">ABV</h4>
  <label> 4.4%–6.1% </label>
</div>

<div id="size" className="beer-wrapper">
  <h4>ABV</h4>

  <span className="arr"></span>
  <label> 4.5%</label>
</div>
<div>
  <h4>Brewery</h4>
  <span className="arr"></span>
  <label> 5.5%</label>
</div>
</div> */
}

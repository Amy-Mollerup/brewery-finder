import React from "react";
import "./BeerReviewPageStyle.css";
import "../BeerListComponent/data/product_data";
import BeerPic from "../assets/Beer Can Stone.png";
import Reviewer from "../ReviewerComponent/Reviewer";
import reviewData from "../ReviewerComponent/data/ReviewData";

export default function BeerReviewPage() {

    const reviewLists = reviewData.map((item) =>
    <div className="reviewRating--card" key={item.beerId}>  
        <div className="card_header">
            <p>{item.comments}</p>
            <h4>{item.username}</h4>
            <p className="reviewRating--display">{item.rating}</p>
            
        </div>
    </div>

);


  return (
    <section id="container" className="beer-review">
      <div id="product-img">
        <img
          src="../assets/beer-bottle.png"
          alt=""
          title="BeerLover"
          className="beer-logo"
        />

        <img
          src={BeerPic}
          alt=""
          title="beer-pic"
          className="beer fade-in one"
        />
      </div>

      <div id="product-info" className="clearfix-auto">
        <div id="product-spec" className="beer-wrapper">
          {/*  Beer Tile from API call */}
          <h1>Stone</h1>
          {/* Beer Type from API Call */}

          {/* <h3 className="rrp">No Achol</h3> */}
          <h3 className="beer--type">IPA Dark</h3>
        </div>

        <div id="ratings">
          <span className="review-rating">
            <span className="user-review ninety"></span>
          </span>
        </div>

        <h4 className="clearfix"></h4>
        <p>
          This beer hybrid is crafted using both ale and lager brewing
          techniques. The result is light, refreshing and easy to drink.
          Technically, a true Kolsch has to come from Cologne, Germany, but
          you’ll find Kolsch-style beers at craft breweries all over America.{" "}
        </p>

        <div id="product-options" className="clearfix-auto">
          <div id="color1" className="beer-wrapper">
            {" "}
            <h3>
              Brewer<label>Jane Brewer Co</label>{" "}
            </h3>
          </div>
          <div>
            <h3 id="color2">
              ABV <label>4.5% - 6 %</label>{" "}
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
  /* <div id="product-options" class="clearfix-auto">
<div id="color" class="beer-wrapper">
  <h4 class="">ABV</h4>
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

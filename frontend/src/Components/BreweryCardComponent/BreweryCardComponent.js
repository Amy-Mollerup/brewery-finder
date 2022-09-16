import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "./BreweryCardStyle.css";
import BreweryInfo from "./data/Breweries_list";
import axios from "axios";

const BreweryCardComponent = () => {
  const profilePic = "https://source.unsplash.com/random/?beer";
  const cardBackGround = "https://source.unsplash.com/random/?blurry";

  /* const [breweries, setBreweries] = React.useState([]);
  
  function getBreweryList() {
    axios.get('http://localhost:8081/breweries')
    .then(resp => {
      setBreweries(resp.data);
    })
  }

  useEffect(() => getBreweryList(), [])

  const breweriesList = breweries.map((item) =>
    <BreweryListCard brewery={item} key={item.breweryId} />
  );
 */
  const breweryList = BreweryInfo.map((item) => (
    <div className="BreweryCard">
      <div className="BcHeader-BreweryCard">
        <img src={cardBackGround} alt= "" className="BcHeader-image" />
        <div className="BcHeader">
          <h1 className="main-heading"> {item.name} </h1>
          <span className="tag">Brewery</span>
          <div className="stats">
            <span className="stat-module">
              <span className="stat-address">{item.street} ,</span>
              <span className="stat-address">{item.city} </span>
              <span className="stat-address">{item.state} </span>
              <span className="stat-address">{item.post_code}</span>
              <br></br>
              <span className="stat-address">Phone: {item.phone}</span>
              <span className="stat-address">{item.website}</span>
            </span>
                   
          </div>
        </div>{" "}
        {/* END Header */}
      </div>


      <div className="overlay-BcHeader" />
      <div className="BrewBody">
        {/* onClick needs link to beerlist page - filter by Brewery ID */}
        <div class="BrewBody-action-button u-flex-center" onClick={"#0"}>
          <img
            src="https://img.icons8.com/ios/50/000000/beer-bottle-cap.png"
            alt=" More Beers"
          />
        </div>
        <img
          src={profilePic}
          alt="Brewery Name"
          className="BrewBody-image"
          height={95}
          width={95}
        />

        

        <div className="u-clearfix" />
        <div className="BrewBody-info">
          <p>{item.description}</p>
        </div>
        
        <div className="BrewBody-more">
        <ButtonGroup >
          <Button id="editDelete--button"  size="sm" onClick={"#0"}> Edit </Button> 
          <Button  id="editDelete--button" size="sm"onClick={"#0"}> Delete </Button>
        </ButtonGroup></div>
      </div>
     
    </div>
  ));

  return (
  <>
  {breweryList}
  </>
  );
};

export default BreweryCardComponent;

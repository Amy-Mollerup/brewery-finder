import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "./BreweryCardStyle.css";
import BreweryForm from '../../Pages/BreweryFormPage/BreweryForm'
import Popup from "reactjs-popup";
import axios from "axios";


const BreweryCardComponent = (props) => {
  const cardBackGround = "https://source.unsplash.com/random/?blurry";
  const brewery = props.brewery;

  const API_BASE = 'http://localhost:8081/breweries/'


  const editBrewery = () => {
    props.openBreweryForm(brewery.breweryId)
  }

  const viewBreweryBeers = () => {
    props.viewBeers(brewery.breweryId)
  }

// Will implement deleting functionality later
  function deleteBrewery() {
    axios.delete(API_BASE + props.brewery.breweryId)
  }
  
  return (
  <>
  
  <div className="BreweryCard">
      <div className="BcHeader-BreweryCard">
        <img src={cardBackGround} alt= "" className="BcHeader-image" />
        <div className="BcHeader">
          <h1 className="main-heading"> {brewery.breweryName} </h1>
          <span className="tag">Brewery</span>
          <div className="stats">
            <span className="stat-module">
              <span className="stat-address">{brewery.breweryStreet} ,</span>
              <span className="stat-address">{brewery.breweryCity} </span>
              <span className="stat-address">{brewery.breweryState} </span>
              <span className="stat-address">{brewery.breweryPostCode}</span>
              <br></br>
              <span className="stat-address">Phone: {brewery.phoneNumber}</span>
              <span className="stat-address">{brewery.website}</span>
            </span>
                   
          </div>
        </div>{" "}
        {/* END Header */}
      </div>


      <div className="overlay-BcHeader" />
      <div className="BrewBody">
        {/* onClick needs link to beerlist page - filter by Brewery ID */}
        <div class="BrewBody-action-button u-flex-center" onClick={viewBreweryBeers}>
          <img
            src="https://img.icons8.com/ios/50/000000/beer-bottle-cap.png"
            alt=" More Beers"
          />
        </div>
        <img
          src={brewery.image}
          alt="No Brewery Icon Given"
          className="BrewBody-image"
          height={95}
          width={95}
        />

        

        <div className="u-clearfix" />
        <div className="BrewBody-info">
          <p>{brewery.description}</p>
        </div>
        
        <div className="BrewBody-more">
        <ButtonGroup >
          <Button id="editDelete--button" size="sm" onClick={editBrewery}> Edit </Button>
          <Popup
            trigger={<Button id="editDelete--button" size="sm"> Delete </Button>}
            position="center center"
            modal
            >{(close) => (
              <div>
              <p>Really delete?</p>
              <button onClick={deleteBrewery}>Yes</button>
              <button onClick={close}>No</button>
              </div>
            )}
            </Popup>
        </ButtonGroup></div>
      </div>
     
    </div>
  </>
  );
};

export default BreweryCardComponent;

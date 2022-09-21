import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "./BreweryCardStyle.css";
import BreweryForm from '../../Pages/BreweryFormPage/BreweryForm'
import Popup from "reactjs-popup";
import axios from "axios";
import { Link } from "react-router-dom";

const BreweryCardComponent = (props) => {
  const cardBackGround = "https://source.unsplash.com/random/color/?red";
  const brewery = props.brewery;

  function deleteBrewery() {
    props.deleteBrewery(props.brewery.breweryId)
    window.location.reload()
  }


 

  return (
  <>
  

  <div className="BreweryCard col-md-2 col-md-2" style={{opacity: brewery.active ? "1" : "0.5"}}>
      <div className="BcHeader-BreweryCard">
        <img src={cardBackGround} alt= "" className="BcHeader-image" />
        <div className="BcHeader">
          <h1 className="main-heading"> {brewery.breweryName} </h1>
          <span className="tag">Brewery</span>
          {!brewery.active && <span className="tag">Inactive</span>}
          <div className="stats">
            <span className="stat-module">
              <span className="stat-address">{brewery.breweryStreet}</span>
              <span className="stat-address">{brewery.breweryCity}, </span>
              <span className="stat-address">{brewery.breweryState} </span>
              <span className="stat-address">{brewery.breweryPostCode}</span>
              <br></br>
              <span className="stat-address">Phone: {brewery.phoneNumber}</span>
              <br />
              <span className="stat-address">Website: {brewery.website}</span>
            </span>
                   
          </div>
        </div>{" "}
        {/* END Header */}
      </div>


      <div className="overlay-BcHeader" />
      <div className="BrewBody">
        {/* onClick needs link to beerlist page - filter by Brewery ID */}
        <div className="BrewBody-action-button u-flex-center"><Link to={`/brewerBeerList/${brewery.breweryId}`}>
          <img
            src="https://img.icons8.com/ios/50/000000/beer-bottle-cap.png"
            alt=" More Beers"
          />
          </Link>
        </div>
        <img
          src={brewery.image}
          alt=""
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
            <Button id="editDelete--button" size="sm">
              <Link to={`/brewery/${brewery.breweryId}`}>Edit</Link>
            </Button>
          <Popup
            trigger={<Button id="editDelete--button" size="sm"> Delete </Button>}
            position="center center"
            modal
            >{(close) => (
              <div className="DeletePopUp--container">
              <p>Really delete?</p>
              <button id="Option--YesNo" onClick={deleteBrewery}>Yes</button>
              <button id="Option--YesNo" onClick={close}>No</button>
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

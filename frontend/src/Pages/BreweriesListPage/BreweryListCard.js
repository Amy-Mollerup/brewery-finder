import React, {useState } from "react";
import Popup from "reactjs-popup";
import BeerListModal from "../../Components/BeerListComponent/BeerListModalComponent/BeerListModal";
import BreweryInformationModal from "./BreweryInformationModalComp/BreweryInformationModal";
import "./BreweriesListStyle.css";
const BreweryListCard = (props) => {
  const beerList = <BeerListModal brewery={props.brewery} />;
  const brewerInfo = <BreweryInformationModal brewery={props.brewery}/>;


  return (
    <div className="businessCard--content">
      <div id="busicard">
        <div className="user">
         
  {/*       <img src={`${props.brewery.image ? props.brewery.image : "./data/Add-IMG.png" }`} 
alt="images"/> */}

<img
        src= {props.brewery.image}
        alt=""
        onError={event => {
          event.target.src = " " 
          
        }}
      />

         
          {/* <img src={props.brewery.image} alt=""/> */}
         {/*     <img
            src={props.brewery.image}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "../../Components/assets/Add-IMG.png";
            }}
            alt={props.brewery.breweryName}
          /> */}
        </div>
        <h1>{props.brewery.breweryName}</h1>

        <div className="info">
          <p>
            {props.brewery.breweryStreet} {props.brewery.breweryCity}{", "} <br />
            {props.brewery.breweryState} {props.brewery.breweryPostCode}
          </p>

          {/*      <span className="hrtop"></span> */}
          <p> {props.brewery.phoneNumber} </p>
        </div>

        <div className="beerListFromId">
          <Popup
            trigger={<span> More Info</span>}
            position="center center"
            modal
          >
            {(close) => (
              <div>
                <BreweryInformationModal brewery={props.brewery}/>
                <a className="close" onClick={close}>
                  {" "}
                  &times;
                </a>
              </div>
            )}
          </Popup>
        </div>

        <div className="beerListFromId">
          <Popup
            trigger={<span> Beer List</span>}
            position="center center"
            modal
          >
            {(close) => (
              <div>
                {beerList}
                <a className="close" onClick={close}>
                  {" "}
                  &times;
                </a>
              </div>
            )}
          </Popup>
        </div>

        <div className="beerListFromId">
          <a href={props.brewery.website}>
          Website    </a>
        </div>
      </div>
    </div>
  );
};

export default BreweryListCard;

import React from "react";
import Popup from "reactjs-popup";
import BeerListModal from "../../Components/BeerListComponent/BeerListModalComponent/BeerListModal";
import BreweryInformationModal from "../../Components/BreweryInformationModalComp/BreweryInformationModal";

const BreweryListCard = (props) => {
  const beerList = <BeerListModal brewery={props.brewery} />;
  const brewerInfo = <BreweryInformationModal />;
  return (
    <div className="businessCard--content">
      <div id="busicard">
        <div className="user">
          <img src={props.brewery.image} alt={props.brewery.breweryName} />
          {/*    <img
            src={props.brewery.image}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "./data/NoImageFound.png";
            }}
            alt={props.brewery.breweryName}
          /> */}
        </div>
        <h1>{props.brewery.breweryName}</h1>

        <div className="info">
          <p>
            {props.brewery.breweryStreet} {props.brewery.breweryCity} <br />{" "}
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
                {brewerInfo}
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

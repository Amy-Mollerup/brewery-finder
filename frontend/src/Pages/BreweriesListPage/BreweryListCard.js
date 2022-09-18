import React from 'react'
import Popup from "reactjs-popup";
import BeerListModal from "../../Components/BeerListComponent/BeerListModalComponent/BeerListModal";

const BreweryListCard = (props) => {

    const beerList = <BeerListModal brewery={props.brewery}  />

  return (
    <div className="businessCard--content">
      <div id="busicard">
          <div className="user">
          <img src={props.brewery.image} alt =""/>
        </div>
        <h1>{props.brewery.breweryName}</h1>
    
          <div className='info'>
            <p>{props.brewery.breweryStreet} {props.brewery.breweryCity} <br/> {props.brewery.breweryState} {props.brewery.breweryPostCode}</p> 
                 
     {/*      <span className="hrtop"></span> */}
         <p> {props.brewery.phoneNumber} </p>
          <div className='website'><a href={props.brewery.website}> Visit Website </a></div>
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
      </div>
    </div>
  )
}

export default BreweryListCard
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Popup from "reactjs-popup";
import "./BreweriesListStyle.css";
import  bList from "./data/Breweries_list"
import BeerListModal from "../../Components/BeerListComponent/BeerListModalComponent/BeerListModal";

const BreweriesListComp = () => {
  const beerList = <BeerListModal  />

  const breweriesList =bList.map((item) =>
    <div className="businessCard--content">
      <div id="busicard">
          <div className="user">
          <img src={item.image} alt =""/>
        </div>
        <h1>{item.name}</h1>
        <ul className="info">
          <li>{item.street} 
            {item.city} {item.state}  
          {item.post_code} </li>
                 
     {/*      <span className="hrtop"></span> */}
         <li> {item.phone} </li>
          <li> <a href={item.website}>{item.website} </a></li>

        </ul>
        
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
  );


  return (
    <div className="main_content">
        {/* <h3>Beer List</h3> */}
        {breweriesList}
    </div>
)

}

export default BreweriesListComp;
import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./BreweriesListStyle.css";


import BreweryListCard from "./BreweryListCard";
import axios from "axios";

const BreweriesListComp = () => {

  const [breweries, setBreweries] = React.useState([]);
  
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


  return (
    <div className="main_content">
        {/* <h3>Beer List</h3> */}
        {breweriesList}
    </div>
)

}

export default BreweriesListComp;
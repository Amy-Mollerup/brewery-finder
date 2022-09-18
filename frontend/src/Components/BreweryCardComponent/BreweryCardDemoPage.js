import React from 'react'
import {Row} from 'reactstrap'
import BreweryCardComponent from './BreweryCardComponent'
import "./BreweryCardStyle.css"
import BreweryInfo from "./data/Breweries_list";
import axios from "axios";
import { useEffect } from 'react';

export default function BreweryCardDemoPage(props) {

  const [breweries, setBreweries] = React.useState([]);

  const API_BASE = 'http://localhost:8081'
  
  function getBreweryList() {
    axios.get(`${API_BASE}/brewer/${props.brewer}`)
    .then(resp => {
      setBreweries(resp.data);
    })
  }

  // function deleteBrewery(breweryId) {
  //   axios.delete(`${API_BASE}/breweries/${breweryId}`)
  //   .then(resp => {
  //     if(resp.status === 200) {
  //       alert("Brewery Deleted")
  //     } else {
  //       alert("An error has occured")
  //     }
  //   })
  //   .catch(err => {
  //     console.err(err)
  //     alert("An error has occured")
  //   })
  // }

  useEffect(() => getBreweryList(), [])

  const breweryList = breweries.length > 1 ? 
        breweries.map((item) => <BreweryCardComponent brewery={item}/>) : 
        <BreweryCardComponent brewery={breweries}/>
  return (
    
    <Row className="BreweryCard--DemoPage" sm="4" fluid="md">
       {breweryList}
       <span> </span>
    </Row>


   
  )
}

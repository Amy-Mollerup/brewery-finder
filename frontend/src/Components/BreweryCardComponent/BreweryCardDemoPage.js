import React from 'react'
import {Row} from 'reactstrap'
import BreweryCardComponent from './BreweryCardComponent'
import "./BreweryCardStyle.css"
import BreweryInfo from "./data/Breweries_list";
import axios from "axios";
import { useEffect } from 'react';

export default function BreweryCardDemoPage(props) {

  const [breweries, setBreweries] = React.useState([]);
  
  function getBreweryList() {
    axios.get(`http://localhost:8081/brewer/${props.brewer}`)
    .then(resp => {
      setBreweries(resp.data);
      console.log(resp)
    })
  }

  useEffect(() => getBreweryList(), [])

  const breweryList = breweries.length > 1 ? 
        breweries.map((item) => <BreweryCardComponent brewery={item} openBreweryForm={props.openBreweryForm} viewBeers={props.viewBeers}/>) : 
        <BreweryCardComponent brewery={breweries} openBreweryForm={props.openBreweryForm} viewBeers={props.viewBeers}/>
  return (
    
    <Row className="BreweryCard--DemoPage" sm="4" fluid="md">
       {breweryList}
       <span> </span>
    </Row>


   
  )
}

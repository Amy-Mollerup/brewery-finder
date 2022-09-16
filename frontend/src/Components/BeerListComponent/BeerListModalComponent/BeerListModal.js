import "./BeerListModalStyle.css";
import "../data/product_data";
import { Row, Col, Button, Container } from "reactstrap";
import product_card from "../data/product_data";
import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import BeerListCard from './BeerListCard';

export default function BeerListModal(props) {
    const [beers, setBeers] = React.useState([]);

    function getBeers(){
      axios.get('http://localhost:8081/' + props.brewery.breweryId + '/beers',[])
      .then(resp => {
        setBeers(resp.data)
        console.log(resp.data)
      })
    }

    useEffect(() => getBeers(),[])

    const listItems = beers.map((item) => <BeerListCard beer={item} />);


   
  return (
    <div id= "beer--container" className="shell">
      {/* <h3>Beer List</h3> */}
      <Row md="4"> {listItems} </Row>
    </div>
  );
};




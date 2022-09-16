import React from "react";
import { Link } from "react-router-dom";

import "./BeerLoverCompStyle.css";

export default function BeerLoverComponent() {
  return (
    <div  className="beerLover--container">
        <h2>Top Brewery </h2>
                <h3>in Town</h3>
    <p>People love drinking at local establishments.<strong>The quality of the beer is great </strong>thanks to all 
    of the hard work these businesses put into making it perfect!</p>
    <Link to='/breweryList'><button>Brewery </button></Link>
    <Link to='/beerList'><button>Beer</button></Link>
       </div>
  );
}

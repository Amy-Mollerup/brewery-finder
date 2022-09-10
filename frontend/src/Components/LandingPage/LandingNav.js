import React, {useState} from "react";
import { Button } from "reactstrap";
import logo from "../assets/beer-bottle.png";

function LandingNav() {
    const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      <a href="https://google.com">
        {" "}
        Brewery <img src={logo} alt="logo" className="logo" />
        Finder
      </a>

      <ul className={open ? "nav-links active" : "nav-links"} >
        <li>About</li>
        <li>Beers</li>
        <li>Contact</li>
        
      
        <i className={open ? "fas fa-bars close": "fas fa-bars open"}
        onClick= {() => setOpen(true)}></i>
        <i className={open ? "fas fa-times close":  "fas fa-times open"}
         onClick= {() => setOpen(false)}></i>
      </ul>
    </nav>
  );
}

export default LandingNav;

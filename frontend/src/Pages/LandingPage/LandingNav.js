import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './LandingNav.css'
import logo from "../../Components/assets/beer-bottle.png";

function LandingNav(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='landing-nav'>
      <Navbar>
      <NavbarBrand href="/">
          Brewery <img src={logo} alt="logo" className="logo" /> Finder
      </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar}/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {/* Change me when site is finished! */}
            <NavItem>
              <NavLink href="/welcome">BL Welcome</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/brewerDash">Brewer Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/breweryList">Brewery List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/beerForm">Beer Form</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/brewerBeerList">Brewer Beer List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/brewery">Brewery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/beerList">Beer List</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default LandingNav;

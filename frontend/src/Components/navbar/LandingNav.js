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
import beerlogo from "../assets/beer-bottle.png";

function LandingNav(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
      <NavbarBrand href="/" className="me-auto">
        <h4 className="logocont">Brewery<img src={beerlogo} alt="logo" className="navlogo" /> Finder</h4>
      </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/about">Beers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Settings</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default LandingNav;
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
import logo from "../assets/beer-bottle.png";

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
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default LandingNav;

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
import './HeaderStyle.css'
import logo from "../../Components/assets/beer-bottle.png";

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='header'>
      <Navbar>
        <NavbarBrand id="logo--place" href={props.loggedIn ? props.homePage : '/landingPage'}>
          Brewery <img src={logo} alt="logo" className="logo" /> Finder
        </NavbarBrand>
        <NavbarToggler id="navbar-toggler" onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar >
            {/* Change me when site is finished! */}
            {(props.authorities === "ROLE_USER" || props.authorities === "ROLE_ADMIN") &&
            <>
            <NavItem>
              <NavLink href="/welcome">BL Welcome</NavLink>
            </NavItem>
                        <NavItem>
              <NavLink href="/breweryList">Brewery List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/beerList">Beer List</NavLink>
            </NavItem>
            </>
            }
            {(props.authorities === "ROLE_BREWER" || props.authorities == "ROLE_ADMIN") &&
            <>
            <NavItem>
              <NavLink href="/brewerDash">Brewer Dashboard</NavLink>
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
            </>
            }
            {props.loggedIn &&
              <NavItem>
                <NavLink onClick={props.handleLogout} href="/landingPage">Logout</NavLink>
              </NavItem>
            }
            {!props.loggedIn &&
            <>
            <NavItem>
              <NavLink href="/landingPage">Landing Page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

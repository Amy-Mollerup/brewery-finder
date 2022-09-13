import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logo from "../assets/beer-bottle.png";
import { Link } from "react-router-dom";
import '../Header/HeaderStyle.css';

export default function Header(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/landingPage">
            Brewery <img src={logo} alt="logo" className="logo" /> Finder
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="justify-content-end" navbar>

                <NavItem>
                    <NavLink href="/home">
                        Home
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href = "/beerDetails">
                        Beers
                    </NavLink>
                </NavItem>
                
                <NavItem>
                    <NavLink href="/breweryDash">
                        Dashboards
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/">
                        Contact
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/login">
                        Login
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/register">
                        Register
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/beerList">
                        Beer List
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/brewery">
                        BreweryForm
                    </NavLink>
                </NavItem>

                {/* <Route path='/landingPage'component={() => <Hero/>}/>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>\
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                    <Route path='/beerDetails' component={() => <BeerDetails/>}/>
                    <Route path='/brewery' component={() => <BreweryForm />}/>
                    <Route path='/beerList' component={() => <BeerList />}/>
                    <Route path='/breweryDash' component={() => <BrewerDashboard/>}/>
                    <Redirect to='/ladingPage'/> */}

                
                
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Settings
                </DropdownToggle>
                <DropdownMenu right>
                        <DropdownItem tag="span">
                          <Link href="/profile">
                            <NavLink> Profile </NavLink>
                          </Link>
                        </DropdownItem>
                        <DropdownItem  divider />
                        <DropdownItem tag="span">
                          <Link href="/support">
                            <NavLink> Support </NavLink>
                          </Link>
                        </DropdownItem>
                        <DropdownItem  divider />
                        <DropdownItem tag="span">
                          <Link href="/logout">
                            <NavLink> Logout </NavLink>
                          </Link>
                        </DropdownItem>


                        
                </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

        
        </Collapse>
      </Navbar>
    </div>
  );
}

/* return (
    <nav>
      <a href="https://google.com">
        Brewery <img src={logo} alt="logo" className="logo" />
        Finder
      </a>

      <ul>
        <li>Beers</li>
        <li>Dashboard</li>
        <li>Contact</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
 */

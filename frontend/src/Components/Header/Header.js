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

export default function Header(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="#">
            Brewery <img src={logo} alt="logo" className="logo" /> Finder
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="justify-content-end" navbar>
                <NavItem>
                    <NavLink  href="/components/">
                        Dashboard
                    </NavLink>
                </NavItem>
                
                <NavItem>
                    <NavLink href="#">
                        Beers
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="#">
                        Contact
                    </NavLink>
                </NavItem>

                
                
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Settings
                </DropdownToggle>
                <DropdownMenu right>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
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

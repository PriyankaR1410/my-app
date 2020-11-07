import React, { Component } from "react";

// plugins
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {FormControl, Form, ControlLabel, HelpBlock, Checkbox, Radio} from 'react-bootstrap';
import NumericInput from 'react-numeric-input';


// component
import Header from "../../components/header";
  
// css

import "./dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="dashBoard-header">
          <Header />
        </div>
        <div className="dash-board-container">
            <div class="container">
        <div class="section-title">
                <h2>BUY</h2>
              </div>
              <Navbar bg="dark" variant="dark">
                 <Nav className="mr-auto">
                     <NavDropdown title="INDIA" id="basic-nav-dropdown">
                     <NavDropdown.Item>TAMIL NADU</NavDropdown.Item>
                     <NavDropdown.Item>KERALA</NavDropdown.Item>
                     <NavDropdown.Item>KARNATAKA</NavDropdown.Item>
                     <NavDropdown.Item>ANDRA PRADESH</NavDropdown.Item>
                     </NavDropdown>
                </Nav>
                <Nav className="mr-auto">
                     <NavDropdown title="BEDROOMS" id="basic-nav-dropdown">
                     <h6>MINIMUM</h6>
                     <NavDropdown.Item>1 BEDROOMS</NavDropdown.Item>
                     <NavDropdown.Item>2 BEDROOMS</NavDropdown.Item>
                     <NavDropdown.Item>3 BEDROOMS</NavDropdown.Item>
                     <NavDropdown.Item>4 BEDROOMS</NavDropdown.Item>
                     <h6>MAXIMUM</h6>
                     <NavDropdown.Item>1 BEDROOMS</NavDropdown.Item>
                     <NavDropdown.Item>2 BEDROOMS</NavDropdown.Item>
                     <NavDropdown.Item>3 BEDROOMS</NavDropdown.Item>
                     <NavDropdown.Item>4 BEDROOMS</NavDropdown.Item>
                     </NavDropdown>
                </Nav>
                <Nav className="mr-auto">
                     <NavDropdown title="PRICE" id="basic-nav-dropdown">
                     <h6>MINIMUM</h6>
                     <NumericInput min={1000} max={10000} step={ 1000 } value={0}/>
                     <h6>MAXIMUM</h6>
                     <NumericInput min={1000} max={10000} step={ 1000 } value={0}/>
                     </NavDropdown>
                </Nav>
                <Nav className="mr-auto">
                     <NavDropdown title="MORE FEATURES" id="basic-nav-dropdown">
                     <h6>FURNISHING</h6>                  
                     </NavDropdown>
                </Nav>
                <Form inline>
                   <Button variant="outline-info">Search</Button>
                   </Form>
               </Navbar>
        </div>
      </div>
      </div>
    );
  }
}

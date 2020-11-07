import React, { Component } from "react";
import './bootstrap/dist/css/bootstrap.min.css';


// plugins
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-sec">
        <header id="header" class="fixed-top">
          <div class="container d-flex align-items-center">
            <nav class="nav-menu d-none d-lg-block">
              <ul>
                <li class="active">
                <Link to="/buy">BUY</Link>
                </li>
                <li>
                <Link to="/commercial">COMMERCIAL</Link>
                </li>
                <li>
                  <Link to="/apartments">APARTMENTS</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

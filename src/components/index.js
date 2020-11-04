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
        <div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
          <div class="container d-flex">
            {/* <div class="contact-info mr-auto">
              <i class="icofont-envelope"></i>{" "}
              <a href="mailto:contact@example.com">contact@example.com</a>
              <i class="icofont-phone"></i> +1 5589 55488 55
              <i class="icofont-google-map"></i> A108 Adam Street, NY
            </div> */}
            {/* <div class="social-links">
              <a href="#" class="twitter">
                <i class="icofont-twitter"></i>
              </a>
              <a href="#" class="facebook">
                <i class="icofont-facebook"></i>
              </a>
              <a href="#" class="instagram">
                <i class="icofont-instagram"></i>
              </a>
              <a href="#" class="skype">
                <i class="icofont-skype"></i>
              </a>
            </div> */}
          </div>
        </div>
        <header id="header" class="fixed-top">
          <div class="container d-flex align-items-center">
            <h1 class="logo mr-auto">
              {/* <a href="index.html">PRISHA PROPERTIES</a> */}
              <Link to='/prisha'>PRISHA PROPERTIES</Link>
              {/* <img src={require("../../../assets/images/images(2).png")}/> */}
            </h1>
            {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}

            <nav class="nav-menu d-none d-lg-block">
              <ul>
                <li class="active">
                <Link to="/buy">BUY</Link>
                </li>
                <li>
                <Link to="/rent">RENT</Link>
                </li>
                <li>
                <Link to="/commercial">COMMERCIAL</Link>
                </li>
                <li>
                  <Link to="/apartments">APARTMENTS</Link>
                </li>
                {/* <li>
                  <a href="#doctors">Doctors</a>
                </li>
                <li class="drop-down">
                  <a href="">Drop Down</a>
                  <ul>
                    <li>
                      <a href="#">Drop Down 1</a>
                    </li>
                    <li class="drop-down">
                      <a href="#">Deep Drop Down</a>
                      <ul>
                        <li>
                          <a href="#">Deep Drop Down 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 4</a>
                    </li>
                  </ul>
                </li> */}
                {/* <li>
                  <a href="#contact">Contact</a>
                </li> */}
              </ul>
            </nav>

            {/* <a href="#appointment" class="appointment-btn scrollto">
              Make an Appointment
            </a> */}
          </div>
        </header>
      </div>
    );
  }
}

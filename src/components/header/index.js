import React, { Component } from "react";


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
import Commercial from "../../pages/commercial";

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
          </div>
        </div>
        <header id="header" class="fixed-top">
          <div class="container d-flex align-items-center">
            <h1 class="logo mr-auto"> PROPERTIES </h1>
            <nav class="nav-menu d-none d-lg-block">
              <ul>
              <li class="drop-down">
                  <a href="">PROPERTY FOR RENT</a>
                  <ul>
                    <li class="drop-down">
                          <a href="">VILLA/HOUSE FOR RENT</a>
                    </li>
                    <li>
                          <a href="">APARTMENTS/FLAT FOR RENT</a>
                    </li>
                    <li>
                          <a href="">COMMERCIAL FOR RENT</a>
                     </li>
                     <li>
                          <a href="">ROOMS FOR RENT</a>
                      </li>
                  </ul>
                </li>
                <li class="drop-down">
                  <a href="">PROPERTY FOR SALE</a>
                  <ul>
                    <li class="drop-down">
                          <a href="">VILLA/HOUSE FOR SALE</a>
                    </li>
                    <li>
                          <a href="">APARTMENTS/FLAT FOR SALE</a>
                    </li>
                    <li>
                          <a href="">COMMERCIAL FOR SALE</a>
                     </li>
                     <li>
                          <a href="">ROOMS FOR SALE</a>
                      </li>
                  </ul>
                </li>
                <li class="drop-down">
                  <a href="">CLASSIFIEDS</a>
                  <ul>
                    <li class="drop-down">
                          <a href="">ELECTRONICS</a>
                      <ul>
                        <li>
                          <a href="">GADGETS</a>
                        </li>
                        <li>
                          <a href="">TELEVISIONS</a>
                        </li>
                        <li>
                          <a href="">SMART HOME</a>
                        </li>
                        <li>
                          <a href="">HOME THEATER</a>
                        </li>
                      </ul>
                    </li>
                    <li class="drop-down">
                          <a href="">COMPUTER AND NETWORKING</a>
                      <ul>
                        <li>
                          <a href="">COMPUTERS</a>
                        </li>
                        <li>
                          <a href="">SOFTWARE</a>
                        </li>
                      </ul>
                     </li>
                     <li class="drop-down">
                          <a href="">HOME APPLIANCES</a>
                      <ul>
                        <li>
                          <a href="">OUTDOOR APPLIANCES</a>
                        </li>
                        <li>
                          <a href="">VACCUMS</a>
                        </li>
                      </ul>
                     </li>
                     <li class="drop-down">
                          <a href="">BABY ITEMS</a>
                      <ul>
                        <li>
                          <a href="">BABY GEARS</a>
                        </li>
                        <li>
                          <a href="">BABY TOYS</a>
                        </li>
                      </ul>
                     </li>
                     <li class="drop-down">
                          <a href="">PETS</a>
                      <ul>
                        <li>
                          <a href="">PET ACCESSORIES</a>
                        </li>
                      </ul>
                     </li>
                     <li class="drop-down">
                          <a href="">GAMING</a>
                      <ul>
                        <li>
                          <a href="">VIDEO GAMES</a>
                        </li>
                      </ul>
                     </li>
                     <li class="drop-down">
                          <a href="">SPORTS EQUIPMENTS</a>
                      <ul>
                        <li>
                          <a href="">CYCLING</a>
                        </li>
                        <li>
                          <a href="">INDOOR SPORTS</a>
                        </li>
                      </ul>
                     </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
import React, { Component } from "react";

// plugins
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {FormControl, Form, ControlLabel, HelpBlock, Checkbox, Radio} from 'react-bootstrap';

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
          <section id="services" class="services">
            <div class="container">
              <div class="section-title">
                <h2>Services</h2>
                <p>
                </p>
              </div>
              <Navbar bg="dark" variant="dark">
                 <Nav className="mr-auto">
                     <NavDropdown title="INDIA" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                     </NavDropdown>
                </Nav>
                <Nav className="mr-auto">
                     <NavDropdown title="PRICE" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                     </NavDropdown>
                </Nav>
                <Nav className="mr-auto">
                     <NavDropdown title="BEDROOMS" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                     </NavDropdown>
                </Nav>
                <Nav className="mr-auto">
                     <NavDropdown title="MORE FEATURES" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                     </NavDropdown>
                </Nav>
                <Form inline>
                   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                   <Button variant="outline-info">Search</Button>
                   </Form>
               </Navbar>


              <div class="row">
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="icofont-heart-beat"></i>
                    </div>
                    <div className="dashboard-profile-notes-img">
                    {/* <img src="img_lights.jpg" alt="Lights" style="width:100%"/> */}
                    <h4>
                      <a href="">CHENNAI</a>
                    </h4>
                    <p>
                      CASA GRAND
                      Rs.40,000
                    </p>
                  </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="icofont-drug"></i>
                    </div>
                    <h4>
                      <a href="">MUMBAI</a>
                    </h4>
                    <p>
                      KALPATARU AVENUE
                      Rs.30,000
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="icofont-dna-alt-2"></i>
                    </div>
                    <h4>
                      <a href="">BANGALORE</a>
                    </h4>
                    <p>
                      ARUN EXCELLO
                      Rs.25,000
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="icofont-heartbeat"></i>
                    </div>
                    <h4>
                      <a href="">DELHI</a>
                    </h4>
                    <p>
                      DREAM APEX
                      Rs.45,000
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="icofont-disabled"></i>
                    </div>
                    <h4>
                      <a href="">HYDERABAD</a>
                    </h4>
                    <p>
                      TULIP VIOLET
                      Rs.40,000
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="icofont-autism"></i>
                    </div>
                    <h4>
                      <a href="">GUJARAT</a>
                    </h4>
                    <p>
                      TULIP YELLOW
                      Rs.35,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* jkdfjk */}

          <div class="container">
            <div class="row mt-5">
              <div class="col-lg-4">
                <div class="info">
                  <div class="address">
                    <i class="icofont-google-map"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div class="email">
                    <i class="icofont-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>

                  <div class="phone">
                    <i class="icofont-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div class="form-row">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div class="validate"></div>
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div class="validate"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                    ></textarea>
                    <div class="validate"></div>
                  </div>
                  <div class="mb-3">
                    {/* <div class="loading">Loading</div> */}
                    {/* <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div> */}
                  </div>
                  <div class="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

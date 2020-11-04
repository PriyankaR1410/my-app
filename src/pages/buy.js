import React, { Component } from "react";

// plugins

// component
// import Header from "../../components/header";
  
// css

// import "./dashboard.css";

export default class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="buy-header">
          {/* <Header /> */}
        </div>
        <div className="buy-container">
          <section id="services" class="services">
            <div class="container">
              <div class="section-title">
                <h2>BUY</h2>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div class="icon-box">
                    <div class="icon">
                      <i class="icofont-heart-beat"></i>
                    </div>
                    <div className="buy-profile-notes-img">
                  {/* <img
                    src={require(".desktop/skill.png")}
                    alt="logo"
                  /> */}
                </div>
                    <h4>
                      <a href="">CHENNAI</a>
                    </h4>
                    <p>
                      CASA GRAND
                      Rs.40,000
                    </p>
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
        </div>
      </div>
    );
  }
}

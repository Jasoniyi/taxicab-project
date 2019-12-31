import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { scroller } from "react-scroll";

class Header extends Component {
  state = {
    isOpen: false
  };

  scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 10,
      smooth: true
    });
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="indigo" dark expand="md" className="nav-wrapper">
          <MDBNavbarBrand className="ml-5">
            <strong className="white-text brand">
              <i>
                <MDBIcon icon="car-alt" className="amber-text pr-3" size="lg" />
              </i>
              Taxi Drive
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right className="mr-5">
              <MDBNavItem className="mr-3">
                <MDBNavLink
                  to="Home"
                  onClick={() => this.scrollToElement("Home")}
                >
                  Home
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-3">
                <MDBNavLink
                  to="/about"
                  onClick={() => this.scrollToElement("About")}
                >
                  About Us
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-3">
                <MDBNavLink
                  to="#!"
                  onClick={() => this.scrollToElement("Service")}
                >
                  Services
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem className="mr-3">
                <MDBNavLink
                  to="Stats"
                  onClick={() => this.scrollToElement("Stats")}
                >
                  Stats
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="mr-3">
                <MDBNavLink
                  to="Download"
                  onClick={() => this.scrollToElement("Download")}
                >
                  App Download
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Header;

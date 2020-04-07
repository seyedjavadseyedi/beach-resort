import React, { Component } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "../App.css";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggel = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggel}
            >
              <FaBars className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/rooms">
              <li>Rooms</li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

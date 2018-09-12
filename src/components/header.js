import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Link to="/">
        <header>header</header>
      </Link>
    );
  }
}

export default Header;

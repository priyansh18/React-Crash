import React, { Component } from "react";

class Navbar extends Component {
  // state = {  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <span className="badge badge-pill badge-primary">
            {this.props.totalcounters}
          </span>
        </span>
      </nav>
    );
  }
}

export default Navbar;

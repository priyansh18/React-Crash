import React, { Component } from "react";

//Stateless functions components

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar{"  "}
        <span className="badge badge-pill badge-primary">
          {props.totalcounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;

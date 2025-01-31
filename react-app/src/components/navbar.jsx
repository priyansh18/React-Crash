import React, { Component } from "react";

//Stateless functions components

const NavBar = ({ totalcounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Items{"  "}
        <span className="badge badge-pill badge-primary">{totalcounters}</span>
      </span>
    </nav>
  );
};

export default NavBar;

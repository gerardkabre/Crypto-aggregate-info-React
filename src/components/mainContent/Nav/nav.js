import React from "react";

let Nav = props => (
  <div className="nav">
    <div className="logo" />
    <div className="searchBar">
      <input
        placeholder="Search for a crypto"
        value={props.searchTerm}
        onChange={props.onSearchTermChange}
      />
    </div>
    <div className="menu">
      <ul>
        <li>one item </li>
        <li>second item </li>
      </ul>
    </div>
  </div>
);

export default Nav;

import React from 'react';

let Nav = props => (
  <div className="nav">
    <div className="logo" />
    <div className="searchBar">
      <input placeholder="Search for a crypto" value={props.searchTerm} onChange={props.onSearchTermChange} />
    </div>
    <div className="menu">
      <ul>
        <li>
          <a href="https://github.com/gerardkabre/Crypto-aggregate-info-React">Code on Github</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;

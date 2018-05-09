import React, { Component } from 'react';

const DisplayList = ({ selectedCoin, children, title, column1, column2, column3, column4 }) => (
  <div className="reddit-container-inside">
    <h1 className="cryptoprices__title">
      {selectedCoin} <span className="cryptoprices__title_span"> {title} </span> 
    </h1>
    <table>
      <thead>
        <tr>
          <th className="th">{column1}</th>
          <th className="th">{column2}</th>
          <th className="th">{column3}</th>
          <th className="th">{column4}</th>
        </tr>
      </thead>
      <tbody className="tbody">{children}</tbody>
    </table>
  </div>
);

export default DisplayList;

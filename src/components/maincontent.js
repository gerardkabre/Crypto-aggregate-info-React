import React, { Component } from "react";
import Nav from "./nav";
import News from "./News";
import CryptoPrice from "./CryptoPrice";
import Reddit from "./reddit";

class Maincontent extends Component {
  render() {
    return (
      <div className="maincontent">
        <Nav />

        <CryptoPrice
          coins={this.props.coins}
          selectedCoin={this.props.selectedCoin}
        />
        <div className="content-lists">
          <News selectedCoin={this.props.selectedCoin} />
          <Reddit selectedCoin={this.props.selectedCoin} />
        </div>
      </div>
    );
  }
}

export default Maincontent;

// ---------------------


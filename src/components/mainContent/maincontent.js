import React, { Component } from "react";
import Nav from "./Nav/nav";
import News from "./News/News";
import CryptoPrice from "./CryptoPrices/CryptoPrice";
import Reddit from "./Reddit/reddit";
import Footer from "./footer"

class Maincontent extends Component {
  render() {
    return (
      <div className="maincontent">
        <Nav
          onSearchTermChange={this.props.onSearchTermChange}
          searchTerm={this.props.searchTerm}
        />

        <CryptoPrice
          coins={this.props.coins}
          selectedCoin={this.props.selectedCoin}
        />
        <div className="content-lists">
          <News selectedCoin={this.props.selectedCoin} />
          <Reddit selectedCoin={this.props.selectedCoin} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Maincontent;

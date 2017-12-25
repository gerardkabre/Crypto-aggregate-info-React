import React, { Component } from "react";
import Leftlisting from "./leftContent/leftlisting";
import Maincontent from "./mainContent/maincontent";
import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      selectedCoin: "bitcoin"
    };
    this.coinsURL = `https://api.coinmarketcap.com/v1/ticker/`;

    fetch(this.coinsURL)
      .then(response => response.json())
      .then(coins => this.setState({ coins: coins }));
  }

  render() {
    return (
      <div>
        <Leftlisting
          coins={this.state.coins}
          selectedCoin={this.state.selectedCoin}
          onCoinSelect={coinSelected =>
            this.setState({ selectedCoin: coinSelected })
          }
        />
        <Maincontent
          selectedCoin={this.state.selectedCoin}
          coins={this.state.coins}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Leftlisting from "./leftContent/leftlisting";
import Maincontent from "./mainContent/maincontent";
import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      selectedCoin: "bitcoin",
      searchTerm: ""
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
          searchTerm={this.state.searchTerm}
        />
        <Maincontent
          selectedCoin={this.state.selectedCoin}
          coins={this.state.coins}
          searchTerm={this.state.searchTerm}
          onSearchTermChange={event =>
            this.setState({ searchTerm: event.target.value })
          }
        />
      </div>
    );
  }
}

export default App;

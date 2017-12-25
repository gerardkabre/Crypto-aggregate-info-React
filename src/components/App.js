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
  }

  componentDidMount() {
    fetch("https://api.coinmarketcap.com/v1/ticker/")
      .then(response => response.json())
      .then(coins => this.setState({ coins: coins }));
  }
  
  onCoinSelect = coinSelected => {
    this.setState({ selectedCoin: coinSelected });
  };
  onSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <Leftlisting
          coins={this.state.coins}
          selectedCoin={this.state.selectedCoin}
          searchTerm={this.state.searchTerm}
          onCoinSelect={this.onCoinSelect}
        />
        <Maincontent
          selectedCoin={this.state.selectedCoin}
          coins={this.state.coins}
          searchTerm={this.state.searchTerm}
          onSearchTermChange={this.onSearchTermChange}
        />
      </div>
    );
  }
}

export default App;

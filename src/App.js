import React, { Component } from 'react';

import CoinsListing from './components/CoinsListing';
import Nav from './components/Nav/nav';
import ArticlesContainer from './components/ArticlesContainer';
import PriceDisplay from './components/PriceDisplay';
import RedditContainer from './components/RedditContainer';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  state = {
    coins: [],
    selectedCoin: 'bitcoin',
    searchTerm: ''
  };

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/')
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
        <div className="leftlisting">
          <CoinsListing
            coins={this.state.coins}
            selectedCoin={this.state.selectedCoin}
            searchTerm={this.state.searchTerm}
            onCoinSelect={this.onCoinSelect}
          />
        </div>
        
        <div className="maincontent">
          <Nav onSearchTermChange={this.onSearchTermChange} searchTerm={this.state.searchTerm} />
          <PriceDisplay coins={this.state.coins} selectedCoin={this.state.selectedCoin} />

          <div className="content-lists">
            <ArticlesContainer selectedCoin={this.state.selectedCoin} />
            <RedditContainer selectedCoin={this.state.selectedCoin} />
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

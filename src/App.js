import React, { Component } from 'react';

import CoinsListing from './components/CoinsListing';
import Header from './components/Header';
import ArticlesContainer from './components/ArticlesContainer';
import PriceDisplay from './components/PriceDisplay';
import RedditContainer from './components/RedditContainer';
import Footer from './components/Footer';

import { fetchCoins } from './utils/api';

import './App.css';

class App extends Component {
  state = {
    coins: [],
    selectedCoin: 'bitcoin',
    searchTerm: ''
  };

  componentDidMount() {
    fetchCoins().then(coins => this.setState({ coins: coins }));
  }

  onCoinSelect = selectedCoin => this.setState({ selectedCoin });

  onSearchTermChange = event => this.setState({ searchTerm: event.target.value });

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
          <Header onSearchTermChange={this.onSearchTermChange} searchTerm={this.state.searchTerm} />
          <PriceDisplay coins={this.state.coins} selectedCoin={this.state.selectedCoin} />

          <div className="content-lists">
            <RedditContainer selectedCoin={this.state.selectedCoin} />
            <ArticlesContainer selectedCoin={this.state.selectedCoin} />
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

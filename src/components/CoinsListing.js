import React from 'react';

import SortingFilters from './SortingFilters';

class CoinsListing extends React.Component {
  state = {
    order: ''
  };

  changeOrder = x => this.setState({ order: x });

  componentWillUpdate(nextProps, nextState) {
    switch (nextState.order) {
      case 'PRICE-DECREASE':
        this.props.coins.sort((a, b) => parseFloat(b.price_usd) - parseFloat(a.price_usd));
        break;
      case 'PRICE-INCREASE':
        this.props.coins.sort((a, b) => parseFloat(a.price_usd) - parseFloat(b.price_usd));
        break;
      case 'LETTER-DECREASE':
        this.props.coins.sort((a, b) => a.id.localeCompare(b.id));
        break;
      case 'LETTER-INCREASE':
        this.props.coins.sort((a, b) => b.id.localeCompare(a.id));
        break;
    }
  }

  render() {
    if (!this.props.coins) return <div> Loading... </div>;
    return (
      <div>
        <h2>Choose a currency</h2>
        <SortingFilters order={this.state.order} changeOrder={this.changeOrder} />
        <div className="list">
          <ul>
            {this.props.coins.filter(x => x.id.indexOf(this.props.searchTerm) >= 0).map(x => (
              <li
                className={this.props.selectedCoin === x.id ? 'selected' : ''}
                onClick={event => this.props.onCoinSelect(x.id)}
              >
                <span class="left-id">{x.id}</span> <span class="left-price">${x.price_usd}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CoinsListing;

import React from 'react';
import Leftitem from './leftitem';
import FontAwesome from 'react-fontawesome'; // https://stackoverflow.com/questions/44680038/how-to-import-font-awesome-in-node-js-to-use-in-react-js

class Leftlisting extends React.Component {
  state = {
    order: ''
  };

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
    const { order } = this.state;
    const chosen = 'left-filters-button-chosen left-filters-button';
    const notChosen = 'left-filters-button';
    const coinsList = this.props.coins
      .filter(x => x.id.indexOf(this.props.searchTerm) >= 0)
      .map(x => (
        <Leftitem
          id={x.id}
          key={x.id}
          price={x.price_usd}
          onCoinSelect={this.props.onCoinSelect}
          className={this.props.selectedCoin === x.id ? 'selected' : ''}
        />
      ));
    if (!this.props.coins) return <div> Loading... </div>;
    return (
      <div className="leftlisting">
        <h2>Choose a currency</h2>
        <div className="left-filters">
          <FontAwesome
            name=" fa-sort-amount-desc"
            size="1x"
            className={order === 'PRICE-DECREASE' ? chosen : notChosen}
            onClick={event => this.setState({ order: 'PRICE-DECREASE' })}
          />

          <FontAwesome
            name=" fa-sort-amount-asc"
            size="1x"
            className={order === 'PRICE-INCREASE' ? chosen : notChosen}
            onClick={() => this.setState({ order: 'PRICE-INCREASE' })}
          />

          <FontAwesome
            name=" fa-sort-alpha-asc"
            size="1x"
            className={order === 'LETTER-DECREASE' ? chosen : notChosen}
            onClick={() => this.setState({ order: 'LETTER-DECREASE' })}
          />
          <FontAwesome
            name="  fa-sort-alpha-desc"
            size="1x"
            className={order === 'LETTER-INCREASE' ? chosen : notChosen}
            onClick={() => this.setState({ order: 'LETTER-INCREASE' })}
          />
        </div>

        <div className="list">
          <ul>{coinsList}</ul>
        </div>
      </div>
    );
  }
}

export default Leftlisting;

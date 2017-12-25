import React from "react";
import Leftitem from "./leftitem";

class Leftlisting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: ""
    };
  }

  componentWillUpdate(nextProps, nextState) {
    switch (nextState.order) {
      case "PRICE-DECREASE":
        this.props.coins.sort(
          (a, b) => parseFloat(b.price_usd) - parseFloat(a.price_usd)
        );
        break;
      case "PRICE-INCREASE":
        this.props.coins.sort(
          (a, b) => parseFloat(a.price_usd) - parseFloat(b.price_usd)
        );
        break;
      case "LETTER-DECREASE":
        this.props.coins.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case "LETTER-INCREASE":
        this.props.coins.sort((a, b) => a.id.localeCompare(b.id));
        break;
    }
  }

  render() {
    if (!this.props.coins) {
      return <div> Loading... </div>;
    }
    return (
      <div className="leftlisting">
        <h2>Choose a currency</h2>
        <button onClick={() => this.setState({ order: "PRICE-DECREASE" })} />
        <button onClick={() => this.setState({ order: "PRICE-INCREASE" })} />
        <button onClick={() => this.setState({ order: "LETTER-INCREASE" })} />
        <button onClick={() => this.setState({ order: "LETTER-DECREASE" })} />

        <div className="list">
          <ul>
            {this.props.coins
              .filter(x => x.id.indexOf(this.props.searchTerm) >= 0)
              .map(x => (
                <Leftitem
                  id={x.id}
                  key={x.id}
                  price={x.price_usd}
                  onCoinSelect={this.props.onCoinSelect}
                  className={this.props.selectedCoin === x.id ? "selected" : ""}
                />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Leftlisting;

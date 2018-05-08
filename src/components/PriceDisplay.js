import React from 'react';
import VariationPercentage from './VariationPercentage';

let PriceDisplay = ({ coins, selectedCoin }) => {
  const choosen = coins.filter(x => x.id === selectedCoin)[0];
  if (!coins[0]) return <h1>Loading. . .</h1>;
  return (
    <div>
      <div className="crypto-prices">
        <h1>
          Current Price for <span className="blue"> {choosen.id.toUpperCase()}</span>
        </h1>
        <div className="data-display price">${choosen.price_usd}</div>
        <div className="change-data">
          <VariationPercentage data={choosen.percent_change_7d} time={'1 Week Variation'} />
          <VariationPercentage data={choosen.percent_change_24h} time={'1 Day Variation'} />
          <VariationPercentage data={choosen.percent_change_1h} time={'1 Hour Variation'} />
        </div>
      </div>
    </div>
  );
};

export default PriceDisplay;

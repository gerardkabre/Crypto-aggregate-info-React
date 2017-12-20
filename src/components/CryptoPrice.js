import React from "react";

import Chart from "./chart";
import Price from "./price";
import ChangeWeek from "./changeweek";
import ChangeDay from "./changeday";
import ChangeHour from "./changehour";

let CryptoPrice = props => {
  if (!props.coins[0]) {
    return <h1>Loading. . .</h1>;
  }

  let choosenCrypto = props.coins.filter(x => x.id === props.selectedCoin)[0];

  //  <Chart crypto={choosenCrypto} />

  return (
    <div>
    
    <div className="crypto-prices">
    <h1>
    Current Price for
    <span className="blue"> {choosenCrypto.id.toUpperCase()}</span>
  </h1>

      <Price data={choosenCrypto.price_usd} />
      <div className="change-data">
        <ChangeWeek data={choosenCrypto.percent_change_7d} />
        <ChangeDay data={choosenCrypto.percent_change_24h} />
        <ChangeHour data={choosenCrypto.percent_change_1h} />
      </div>
    </div>
    </div>
  );
};

export default CryptoPrice;

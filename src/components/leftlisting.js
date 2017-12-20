import React from "react";
import Leftitem from "./leftitem";

let Leftlisting = props => {
  if (!props.coins) {
    return <div> Loading... </div>;
  }

  return (
    <div className="leftlisting">
      <h2>Choose a currency</h2>
      <div className="list">
        <ul>
          {props.coins
            .sort((a, b) => parseFloat(b.price_usd) - parseFloat(a.price_usd))
            .map(x => (
              <Leftitem
                id={x.id}
                key={x.id}
                price={x.price_usd}
                onCoinSelect={props.onCoinSelect}
                className={props.selectedCoin === x.id ? "selected" : ""}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Leftlisting;

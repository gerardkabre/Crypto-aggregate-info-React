import React from "react";
import Leftitem from "./leftitem";

let Leftlisting = props => {
  if (!props.coins) {
    return <div> Loading... </div>;
  }
  if (props.searchTerm !== "" ) {
    return (
      <div className="leftlisting">
      <h2>Choose a currency</h2>
      <div className="list">
        <ul>
          {props.coins
            .sort((a, b) => parseFloat(b.price_usd) - parseFloat(a.price_usd))
            .filter(x => x.id.indexOf(props.searchTerm) >= 0)
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
    )
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

import React from "react";

let Price = props => {
  let round = (value, decimals) =>
    Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  // add a "," to signal "thousand" on numbers.
  const numberWithCommas = x =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // round numbers with max 3 decimals and add comma
  let price = numberWithCommas(round(props.data, 3));

  return (
    <div>
      <div className="data-display price">${price}</div>
    </div>
  );
};
export default Price;

import React from "react";

let Leftitem = props => {
  let round = (value, decimals) =>
    Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  let numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  let price = numberWithCommas(round(props.price, 2));
  return (
    <li
      className={props.className}
      onClick={event => props.onCoinSelect(props.id)}
    >
      <span class="left-id">{props.id}</span>{" "}
      <span class="left-price">${price}</span>
    </li>
  );
};

export default Leftitem;

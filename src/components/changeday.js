import React from "react";

let ChangeDay = props => {
  const hasIncreased = props.data > 0;
  return (
    <div>
      <div
        className={
          hasIncreased
            ? "price-increase data-display"
            : "price-decrease data-display"
        }
      >
        {hasIncreased ? "+" : ""}
        {props.data}%
      </div>
      <div className="center-text">
        <p>1 Day Variation</p>
      </div>
    </div>
  );
};
export default ChangeDay;

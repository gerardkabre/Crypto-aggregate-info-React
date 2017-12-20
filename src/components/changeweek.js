import React from "react";

let ChangeWeek = props => {
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
        <p>1 Week Variation</p>
      </div>
    </div>
  );
};
export default ChangeWeek;

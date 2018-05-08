import React from 'react';

const VariationPercentage = ({ data, time }) => {
  const hasIncreased = data > 0;

  return (
    <div>
      <div className={hasIncreased ? 'price-increase data-display' : 'price-decrease data-display'}>
        {hasIncreased ? '+' : ''}
        {data}%
      </div>
      <div className="center-text">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default VariationPercentage;

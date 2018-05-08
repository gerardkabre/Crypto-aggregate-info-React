import React from 'react';
import FontAwesome from 'react-fontawesome';

const chosen = 'left-filters-button-chosen left-filters-button';
const notChosen = 'left-filters-button';

const SortingFilters = ({ order, changeOrder }) => (
  <div className="left-filters">
    <FontAwesome
      name=" fa-sort-amount-desc"
      size="1x"
      className={order === 'PRICE-DECREASE' ? chosen : notChosen}
      onClick={() => changeOrder('PRICE-DECREASE')}
    />

    <FontAwesome
      name=" fa-sort-amount-asc"
      size="1x"
      className={order === 'PRICE-INCREASE' ? chosen : notChosen}
      onClick={() => changeOrder('PRICE-INCREASE')}
    />

    <FontAwesome
      name=" fa-sort-alpha-asc"
      size="1x"
      className={order === 'LETTER-DECREASE' ? chosen : notChosen}
      onClick={() => changeOrder('LETTER-DECREASE')}
    />
    <FontAwesome
      name="  fa-sort-alpha-desc"
      size="1x"
      className={order === 'LETTER-INCREASE' ? chosen : notChosen}
      onClick={() => changeOrder('LETTER-INCREASE')}
    />
  </div>
);

export default SortingFilters;

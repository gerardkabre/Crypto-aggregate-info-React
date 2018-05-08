import React from 'react';

const DisplayListItem = ({ title, firstValue, secondValue, thirdValue }) => {
  return (
    <tr>
      <td class="blue">{title}</td>
      <td>{firstValue}</td>
      <td>{secondValue}</td>
      <td>{thirdValue}</td>
    </tr>
  );
};
export default DisplayListItem;

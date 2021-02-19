import React, { useState } from 'react';

import './TableItem.css';

export const TableItem = ({ item, rowWithSum, setRowWithSum}) => {
  const [amount, setAmount] = useState(item);

  const handleClick = () => {
    setAmount(amount + 1);

    // let newSum = rowWithSum[rowWithSum.length - 1] + 1;
    // setRowWithSum([...rowWithSum.slice(0, -1), newSum]);
  }

  return (
    <td
      onClick={handleClick}
      className="table__item"
    >
      {amount}
    </td>
  )
}
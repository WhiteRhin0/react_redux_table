import React, { useState } from 'react';

import './TableItem.css';

export const TableItem = ({ item }) => {
  const [amount, setAmount] = useState(item);

  const handleClick = () => {
    setAmount(amount + 1);
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
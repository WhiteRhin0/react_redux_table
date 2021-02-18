import React, { useState } from 'react';

export const TableItem = ({ item }) => {
  const [amount, setAmount] = useState(item);

  const handleClick = () => {
    setAmount(amount + 1);
  }

  return (
    <td onClick={handleClick}>{amount}</td>
  )
}
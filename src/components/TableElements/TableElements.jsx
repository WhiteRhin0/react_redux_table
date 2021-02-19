import React, { useState, useEffect } from 'react';

import './TableElements.css';
import { TableItem } from '../TableItem';


export const TableElements = ({ row }) => {
  const [rowWithSum, setRowWithSum] = useState([...row, sumOfRow(row)]);

  useEffect(() => {}, [rowWithSum])

  function sumOfRow(arr) {
    if (arr.length > 0) {
      return arr.reduce((a, b) => a + b);
    }
  };

  return (
    <tr className="row">
      {rowWithSum.map(item => (
        <TableItem
          item={item}
          rowWithSum={rowWithSum}
          setRowWithSum={setRowWithSum}
        />
      ))}
    </tr>
  )
}
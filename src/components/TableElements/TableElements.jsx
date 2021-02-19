import React, { useState, useEffect } from 'react';

import './TableElements.css';
import { TableItem } from '../TableItem';


export const TableElements = ({ row }) => {
  useEffect(() => {}, [])

  function sumOfRow(arr) {
    if (arr.length > 0) {
      return arr.reduce((a, b) => a + b);
    }
  };

  return (
    <tr className="row">
      {row.map(item => <TableItem item={item} />)}
      <td className="row__average">{sumOfRow(row)}</td>
    </tr>
  )
}
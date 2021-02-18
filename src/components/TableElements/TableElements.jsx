import React from 'react';

import './TableElements.css';
import { TableItem } from '../TableItem';
export const TableElements = ({ row }) => {

  const averageOfRow = (arr) => {
    if (arr.length > 0) {
      const average = arr.reduce((a, b) => a + b) / arr.length;

      return Math.round(average);
    }
  };

  return (
    <tr className="row">
      {row.map(item => <TableItem item={item} />)}
      <td className="row__average">{averageOfRow(row)}</td>
    </tr>
  )
}
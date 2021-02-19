import React from 'react';
import './Table.css';
import { createArrayOfRandom } from '../../createArrayofRandom';
import { TableElements } from '../TableElements';

export const Table = ({ rows, columns }) => {
  let arrayOfrandom = createArrayOfRandom(columns, rows);

  return (
    <table className="table">
      <thead>
        <tr>
          <th colspan={columns}>The table data</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {arrayOfrandom.map(row => (
          <TableElements row={row} />
        ))}
      </tbody>
    </table>
  )
}

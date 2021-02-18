import React from 'react';
import './Table.css';
import { createArrayOfRandom } from '../../createArrayofRandom';
import { TableElements } from '../TableElements';

export const Table = ({ rows, columns }) => {
  let arrayOfrandom = createArrayOfRandom(rows, columns);

  return (
    <table>
      <thead>
        <tr>
          <th colspan={rows + 1}>The table header</th>
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

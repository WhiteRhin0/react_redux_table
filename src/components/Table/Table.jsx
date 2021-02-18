import React from 'react';
import './Table.css';
import { createArrayOfRandom } from '../../createArrayofRandom';

export const Table = ({ row, column }) => {
  let arrayOfrandom = createArrayOfRandom(row, column);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colspan={row}>The table header</th>
          </tr>
        </thead>
        <tbody>
          {arrayOfrandom.map(col => (
            <tr>
              {col.map(row => (
                <td>{row}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

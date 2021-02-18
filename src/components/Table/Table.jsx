import React from 'react';
import { createArrayOfRandom } from '../../createArrayofRandom';

export const Table = () => {

  return (
    <div>
      <h1>Table</h1>
      <div>{createArrayOfRandom(5, 10)}</div>
    </div>
  )
}

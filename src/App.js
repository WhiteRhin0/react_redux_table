import React, { useState } from 'react';
import './App.css';

import { Table } from './components/Table';

function App() {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);

  return (
    <div className="App">
      <form>

        <label>
          Columns:
          <input
            type="number"
            name="column" 
            value={column}
            onChange={e => setColumn(e.target.value)}
          />
        </label>

        <label>
          Rows:
          <input
            type="number"
            name="row"
            value={row}
            onChange={e => setRow(e.target.value)}
          />
        </label>

      </form>
      <Table 
        row={row}
        column={column}
      />
    </div>
  );
}

export default App;

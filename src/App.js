import React, { useState } from 'react';
import './App.css';

import { Table } from './components/Table';

function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);


  return (
    <div className="App">
      <form>

        <label>
          Columns:
          <input
            type="number"
            name="column" 
            value={columns}
            onChange={e => setColumns(e.target.value)}
          />
        </label>

        <label>
          Rows:
          <input
            type="number"
            name="row"
            value={rows}
            onChange={e => setRows(e.target.value)}
          />
        </label>

      </form>
      <Table 
        rows={rows}
        columns={columns}
      />
    </div>
  );
}

export default App;

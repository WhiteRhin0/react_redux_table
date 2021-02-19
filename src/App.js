import React, { useState } from 'react';
import './App.css';

import { Table } from './components/Table';

function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [showTable, setShowTable] = useState(false);

  const handleTable = (e) => {
    e.preventDefault();
    setShowTable(!showTable);
  }


  return (
    <div className="App">
      <form onSubmit={handleTable}>

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
        <input type="submit" value="Show Table" />

      </form>

      {showTable && (
        <>
          <Table 
          rows={rows}
          columns={columns}
          />

          <button
            className="button__add-row"
            onClick={() => setRows(+rows + 1)}
          >
            Add row
          </button>
        </>
      )}
    </div>
  );
}

export default App;

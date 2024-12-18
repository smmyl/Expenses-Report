import './App.css';
import './components/Name.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/Name/')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1>ExpensesReport</h1>
        </header>
      </div>
  );
}

export default App;

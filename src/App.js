import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Name from './components/Name.js'


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
        <Name/>
      </div>
  );
}

export default App;

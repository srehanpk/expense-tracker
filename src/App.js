import React from 'react';
import './App.css';
import Balance from './Balance';
import Income from './Income';
import Input from './Input';
import Footer from './Footer.js';
import Context from './Context';



function App() {

  
  
  return (

    <Context.Provider >
    <div className="App">
      <h1>Expense Tracker </h1>

    
      <Balance />
      <Income />
      <Input />
      <Footer />
    
    </div>
    </Context.Provider>
  );
}

export default App;

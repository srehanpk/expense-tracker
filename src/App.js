import React from 'react';
import './App.css';
import Balance from './Balance';
import Income from './Income';
import Input from './Input';
import Footer from './Footer.js';




function App() {

  
  
  return (

    
    <div className="App">
      <h1>Expense Tracker </h1>

    
      <Balance />
      <Income />
      <Input />
      <Footer />
    
    </div>
   
  );
}

export default App;

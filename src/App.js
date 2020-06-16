import React from 'react';
import './App.css';
import Balance from './Balance';
import Income from './Income';
import Input from './Input';
import Footer from './Footer.js';
import {GlobalProvider} from './Context.js';



function App() {

  
  
  return (

    <GlobalProvider>

    <div className="App">
      <h1>Expense Tracker </h1>

    
      <Balance />
      <Income />
      <Input />
      <Footer />
    
    </div>
    </GlobalProvider>
  );
}

export default App;

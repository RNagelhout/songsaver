
import './App.css';
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';


const App = () => {
  
    return (
      <div className='container'>
        <Header />
        <MainContent />
      </div>
    );
}

export default App;
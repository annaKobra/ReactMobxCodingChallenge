import React from 'react';
import './App.css';
import DisplayUsername from './components/DisplayUsername';
import EditUser from './components/EditUser';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <DisplayUsername />
        <EditUser />
      </header>
    </div>
  );
};

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BASE_URL } from './utils/constants';
import { Login } from './views/Login/Login';
import { Register } from './views/Register/Register';
import { Navigation } from './components/Navigation/Navigation';


function App() {

  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
  )
}

export default App;


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './views/Login/Login';
import { Register } from './views/Register/Register';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './views/Home/Home';

function App() {

  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
  )
}

export default App;


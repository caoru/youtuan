import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound'
import Signin from './pages/Signin'
import Analysis from './pages/Analysis'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<Signin />} />
        <Route path='/anaylsis' element={<Analysys />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

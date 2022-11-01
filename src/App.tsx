import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound'
import Signin from './pages/Signin'
import Analysis from './pages/Analysis'

function App() {
  const authenticated: boolean = localStorage.getItem("authenticated") === "true" ? true : false;

  return (
    <BrowserRouter>
      <Routes>
        { authenticated &&
          <Route path='/' element={<Analysis />} />
        }
        { !authenticated &&
          <Route path='/' element={<Signin />} />
        }
        <Route path='/signin' element={<Signin />} />
        <Route path='/analysis' element={<Analysis />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

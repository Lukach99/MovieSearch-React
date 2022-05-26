import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Test from '../components/test';

import './App.scss';
import InfoPage from './InfoPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='*' element={<Test />}></Route>
      <Route path="/info/:id" element={<InfoPage />} />

      </Routes>
      
      
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SetParameters from './components/SetParameters';
import './App.css';
import { AppProvider } from './utils/context'
import Game from './components/Game';

export default function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={ <SetParameters/> }/>
            <Route path="/game/" element={<Game/>}/>
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
}
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import MainLayout from './layouts/mainLayout';


function App() {
  return (
     <div className="App overflow-hidden">
          <Routes>
             <Route exact path="/" element={<MainLayout><Home /></MainLayout>} />

          </Routes>
               
     </div>
  );
}

export default App;

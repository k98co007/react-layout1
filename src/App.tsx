import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import MyPage from './MyPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/MyPage" element={<MyPage />} />
    </Routes>
  </Router>
  );
}

export default App;

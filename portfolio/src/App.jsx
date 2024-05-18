import logo from './logo.svg';
import './App.css';
import React, { useLayoutEffect } from 'react';
import 'animate.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <body className="min-h-screen bg-very-dark-violet">
      <LandingPage></LandingPage>
    </body>
  );
}

export default App;

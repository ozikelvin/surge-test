import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from './pages/signIn/index';


function App() {
  return (
    <Router>		  
    <Routes>
    <Route exact path="/" element={<SignUp />} />
    </Routes>
    </Router>
  );
}

export default App;

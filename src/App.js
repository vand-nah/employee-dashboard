import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // or './Navbar' if you renamed it
import Home from './Home';
import EmployeeForm from './EmployeeForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<EmployeeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
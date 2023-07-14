import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/HomePage';
import About from './components/Other/About';
import Contact from './components/Other/Contact';
import ProductDetail from './components/Other/ProductDetail';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  const [gender, setGender] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleGenderChange = newGender => {
    setGender(newGender);
  };

  const handleSearch = searchText => {
    // Xử lý tìm kiếm ở đây
  };

  const handleLogin = () => {
    setLoggedIn(true);
  }

  const handleLogout = () => {
    setLoggedIn(false);
  }

  const closeLoginForm = () => {
    setLoggedIn(true);
  }

  return (
    <Router>
      <div className="App">
        <Navbar onGenderChange={handleGenderChange} onSearch={handleSearch} isLoggedIn={loggedIn} onLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Home />}  />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login handleClose={closeLoginForm} onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          {/* Protected route: only allow access if the user is logged in */}
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
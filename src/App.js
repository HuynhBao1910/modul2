import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import ProductList from './components/product-list/ProductList';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
// import NotFound from './components/NotFound';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Slider />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
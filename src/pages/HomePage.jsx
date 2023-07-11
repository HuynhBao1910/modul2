import React from "react";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import ProductList from "../components/product-list/ProductList";
import Footer from "../components/common/Footer";

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar />
            <Slider />
            <ProductList />
            <Footer />
        </div>
    );
};

export default HomePage;
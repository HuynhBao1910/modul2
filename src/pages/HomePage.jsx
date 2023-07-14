import React, { useState } from "react";
import Slider from "../components/slider/Slider";
import ProductList from "../components/product-list/ProductList";
import Footer from "../components/common/Footer";

const HomePage = () => {
    const [searchText, setSearchText] = useState('');
    const [gender, setGender] = useState(null);

    const handleSearch = searchText => {
        setSearchText(searchText);
    };

    const handleGenderChange = gender => {
        setGender(gender);
    };

    return (
        <div className="home-page">
            <Slider />
            <ProductList searchText={searchText} gender={gender} />
            <Footer />
        </div>
    );
};

export default HomePage;
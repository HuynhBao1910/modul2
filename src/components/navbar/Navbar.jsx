import React from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logo">
                K&Q Perfume
            </Link>
            <ul className="navbar__menu">
                <li className="navbar__menu-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar__menu-item">
                    <Link to="/products">Products</Link>
                </li>
                <li className="navbar__menu-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="navbar__menu-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="navbar__search">
                <input type="text" placeholder="Search" />
                <button type="submit">Search</button>
            </div>
            <div className="navbar__actions">
                <div className="navbar__cart">
                    <FaShoppingCart />
                    <span className="navbar__cart-count">0</span>
                </div>
                <div className="navbar__avatar">
                    <FaUserCircle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
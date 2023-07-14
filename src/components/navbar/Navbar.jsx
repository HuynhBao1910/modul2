import React, { useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import ProductList from "../product-list/ProductList";

function Navbar({ onGenderChange, onSearch }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [gender, setGender] = useState(null);

    const handleLogin = () => {
        setLoggedIn(true);
        setUser({
            name: "Chí Bảo",
            title: "Kỹ sư phần mềm",
            avatar: "https://example.com/avatar.jpg",
        });
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUser({});
        setShowUserMenu(false);
    };

    const openCart = () => {
        setShowCart(true);
    };

    const closeCart = () => {
        setShowCart(false);
    };

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    const handleGenderChange = (gender) => {
        setGender(gender);
    };

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearchText(searchText);
        onSearch(searchText);
    };

    const handleHomeClick = () => {
        setGender(null);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logo" onClick={handleHomeClick}>
                K&Q Perfume
            </Link>
            <ul className="navbar__menu">
                <li className="navbar__menu-item">
                    <Link to="/" onClick={handleHomeClick}>
                        Trang chủ
                    </Link>
                </li>
                <li className="navbar__menu-item">
                    <Link to="/products" onClick={() => handleGenderChange("men")}>
                        Nước hoa nam
                    </Link>
                </li>
                <li className="navbar__menu-item">
                    <Link to="/products" onClick={() => handleGenderChange("women")}>
                        Nước hoa nữ
                    </Link>
                </li>
                <li className="navbar__menu-item">
                    <Link to="/about" onClick={handleHomeClick}>
                        Giới thiệu
                    </Link>
                </li>
                <li className="navbar__menu-item">
                    <Link to="/contact" onClick={handleHomeClick}>
                        Liên hệ
                    </Link>
                </li>
                <li className="navbar__menu-item navbar__search">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm"
                        value={searchText}
                        onChange={handleSearch}
                    />
                </li>
            </ul>
            <div className="navbar__right">
                <div className="navbar__cart" onClick={openCart}>
                    <FaShoppingCart />
                    <span>{cartItems.length}</span>
                </div>
                {loggedIn ? (
                    <div className="navbar__user" onClick={toggleUserMenu}>
                        <img src={user.avatar} alt={user.name} />
                        <span>{user.name}</span>
                        {showUserMenu && (
                            <ul className="navbar__user-menu">
                                <li onClick={handleLogout}>Đăng xuất</li>
                            </ul>
                        )}
                    </div>
                ) : (
                    <button className="navbar__login" onClick={handleLogin}>
                        <FaUserCircle /> Đăng nhập
                    </button>
                )}
            </div>
            {showCart && (
                <div className="navbar__cart-popup" onClick={closeCart}>
                    <div
                        className="navbar__cart-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>Giỏ hàng của bạn</h3>
                        {cartItems.length > 0 ? (
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item.id}>
                                        {item.title} - {item.price}đ
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Giỏ hàng của bạn trống</p>
                        )}
                    </div>
                </div>
            )}
            {gender && <ProductList gender={gender} searchText={searchText} />}
        </nav>
    );
}

export default Navbar;

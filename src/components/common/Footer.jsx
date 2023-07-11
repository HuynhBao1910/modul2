import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";

const handleFacebookClick = (event) => {
    event.preventDefault();
    window.location.href = "https://www.facebook.com";
};

const handleTwitterClick = (event) => {
    event.preventDefault();
    window.location.href = "https://www.twitter.com";
};

const handleInstagramClick = (event) => {
    event.preventDefault();
    window.location.href = "https://www.instagram.com";
};

const handleLinkedInClick = (event) => {
    event.preventDefault();
    window.location.href = "https://www.linkedin.com";
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <h2>Thông tin liên hệ</h2>
                <p>
                    Địa chỉ: 123 đường ABC, quận XYZ, TP. Hồ Chí Minh
                    <br />
                    Số điện thoại: 0123456789
                    <br />
                    Email: info@yourcompany.com
                </p>
            </div>
            <div className="footer__links">
                <h2>Liên kết</h2>
                <ul>
                    <li>
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/about">Giới thiệu</Link>
                    </li>
                    <li>
                        <Link to="/products">Sản phẩm</Link>
                    </li>
                    <li>
                        <Link to="/contact">Liên hệ</Link>
                    </li>
                </ul>
            </div>
            <ul className="footer__social">
                <li className="footer__social-item">
                    <a href="/" onClick={handleFacebookClick}>
                        <FaFacebook />
                    </a>
                </li>
                <li className="footer__social-item">
                    <a href="/" onClick={handleTwitterClick}>
                        <FaTwitter />
                    </a>
                </li>
                <li className="footer__social-item">
                    <a href="/" onClick={handleInstagramClick}>
                        <FaInstagram />
                    </a>
                </li>
                <li className="footer__social-item">
                    <a href="/" onClick={handleLinkedInClick}>
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
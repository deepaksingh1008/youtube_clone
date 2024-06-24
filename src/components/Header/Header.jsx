// src/components/Header/Header.js
import React, { useState } from 'react';
import Youtube_logo from '../../assets/youtube_logo.png'
import './Header.css';
import { FaSearch, FaBell, FaVideo, FaTh, FaUserCircle, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Header = ({ toggleSidebar }) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        if (!search) return;
        navigate(`/search/${search}`);

    }
    return (
        <div className="header" style={{ color: 'white', background: 'black' }}>
            <div className="header__left">
                <FaBars className="header__hamburger" onClick={toggleSidebar} />
                <img
                    src={Youtube_logo}
                    alt="YouTube Logo"
                    className="header__logo"
                    style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                />
            </div>
            <div className="header__input" onKeyDown={(e) => {
                if (e.code === 'Enter') {
                    handleSearch(e);
                }
            }}>
                <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className="header__inputButton">
                    <FaSearch onClick={handleSearch} />
                </button>
            </div>
            <div className="header__icons">
                <FaVideo className="header__icon" />

                <FaBell className="header__icon" />
                <FaUserCircle className="header__icon" />
            </div>
        </div>
    );
};

export default Header;

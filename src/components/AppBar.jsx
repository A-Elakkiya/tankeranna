import React, { createContext, useState } from 'react';
import './AppBar.css';
import logo from '../images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons';
import lightModeBg from '../images/light_mode_bg.png';
import darkModeBg from '../images/Dark_Mode_Background.png';

export const ThemeContext = createContext();

const AppBar = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const themeStyles = {
        backgroundColor: isDarkMode ? '#333' : '#FFF',
        color: isDarkMode ? '#FFF' : '#333',
        minHeight: '100vh',
        backgroundImage: `url(${isDarkMode ? darkModeBg : lightModeBg})`,
        backgroundSize: 'cover',
        transition: 'all 0.3s ease',
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <div style={themeStyles}>
                <div className='AppBar'>
                    <nav className="navbar">
                        <div className="container">
                            <div className="row w-100 d-flex mt-3">
                                <div className="col-md-9 d-flex align-items-center">
                                    <Link className="navbar-brand" to="/">
                                        <img src={logo} alt="Logo" className="img-fluid logo" />
                                    </Link>
                                    <form className="w-100 my-lg-0">
                                        <div className="input-group w-75">
                                            <span className="input-group-text bg-white" id="search-icon">
                                                <FontAwesomeIcon icon={faSearch} />
                                            </span>
                                            <input className="form-control" type="search" placeholder="Search or type a command" />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-3 rounded" style={{ backgroundColor: '#b6e5ed' }}>
                                    <ul className="navbar-nav flex-row d-flex justify-content-between">
                                        <li className="nav-item mx-2">
                                            <a className="nav-link" href="#">
                                                <i className="fa fa-user-circle-o fa-lg text-white"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <a className="nav-link" href="#">
                                                <i className="fa fa-user-plus fa-lg text-white"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item mx-2">
                                            <a className="nav-link" href="#">
                                                <i className="fa fa-bell-o fa-lg text-white"></i>
                                            </a>
                                        </li>
                                        <button className="btn btn-link text-white" onClick={toggleTheme}>
                                            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <SideBar />
                </div>
            </div>
            {children}
        </ThemeContext.Provider>
    );
};

export default AppBar;

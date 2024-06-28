import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomAppBar from './components/AppBar';
import SideBar from './components/SideBar';
import OrderHistory from './pages/OrderHistory';
import Dashboard from './pages/Dashboard';
import './index.css';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-theme', !isDarkMode);
        document.body.classList.toggle('light-theme', isDarkMode);
    };

    return (
        <Router>
            <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
                <CustomAppBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <div className="d-flex">
                    <SideBar />
                    <main className="flex-fill">
                        <Routes>
                            <Route path="/order-history" component={OrderHistory} />
                            <Route path="/dashboard" component={Dashboard} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default App;

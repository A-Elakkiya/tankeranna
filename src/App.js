import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import OrderHistory from './pages/OrderHistory';
import Dashboard from './pages/Dashboard';
import Notification from './pages/Notification';

const App = () => {
    return (
        <>
            <AppBar>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/orderHistory' element={<OrderHistory />} />
                    <Route path='/notification' element={<Notification />} />
                </Routes>
            </AppBar>
        </>
    );
};

export default App;

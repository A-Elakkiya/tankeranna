import React, { useContext, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign, faTint } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import Chart from 'chart.js/auto';
import { ThemeContext } from '../components/AppBar';
import lightModeBg from '../images/light_mode_bg.png';
import darkModeBg from '../images/Dark_Mode_Background.png';

const Dashboard = () => {
    const { isDarkMode } = useContext(ThemeContext);

    const cardDetails = [
        {
            title: 'Kaveri Water Supply',
            viewOrder: 'View Order',
            rupees: '2000/-',
            liters: '1000L',
        },
        {
            title: 'Ganga Water Supply',
            viewOrder: 'View Order',
            rupees: '3000/-',
            liters: '2000L',
        },
    ];

    const chartContainer = useRef(null);

    useEffect(() => {
        const colors = ['#E8E8E8', '#6FCCDD', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];
        const chartData = {
            labels: ["17 Sun", "18 Mon", "19 Tue", "20 Wed", "21 Thu", "22 Fri", "23 Sat"],
            datasets: [{
                label: 'This Week',
                data: [230, 130, 200, 180, 165, 120, 150],
                backgroundColor: colors['0'],
            },
            {
                label: 'Last Week',
                data: [200, 120, 140, 210, 211, 140, 190],
                backgroundColor: colors['1'],
            }]
        };

        const chartOptions = {
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        callback: function (value) {
                            return '$' + value;
                        }
                    }
                }
            }
        };

        if (chartContainer.current) {
            const existingChartInstance = Chart.getChart(chartContainer.current);
            if (existingChartInstance) {
                existingChartInstance.destroy();
            }

            const ctx = chartContainer.current.getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: chartOptions
            });
        }
    }, []);

    const themeStyles = {
        // backgroundColor: isDarkMode ? '#333' : '#FFF',
        // color: isDarkMode ? '#FFF' : '#333',
        // minHeight: '100vh',
        // backgroundImage: `url(${isDarkMode ? darkModeBg : lightModeBg})`,
        backgroundSize: 'cover',
        transition: 'all 0.3s ease',
    };

    return (
        <div style={themeStyles}>
        <div className='container dashboard'>
        <h3 className='text mx-5'>Welcome!!</h3>
        <div className='row'>
            <div className='col-lg-6 px-5'>
                {/* carousel Slider Start */}
                <div className='rounded banner' style={{ backgroundColor: isDarkMode ? '#333' : '#80D2E0' }}>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center h-100">
                                <img src="..." className="d-block w-100 text-white" alt="Image" />
                            </div>
                            <div className="carousel-item text-center">
                                <img src="..." className="d-block w-100 text-white" alt="Image" />
                            </div>
                            <div className="carousel-item text-center">
                                <img src="..." className="d-block w-100 text-white" alt="Image" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* Carousel Slider End */}
                {/* Statistics Graph Start */}
                <h6 className='mt-3 text-statistics'>Statistics</h6>
                <div className=' rounded card' style={{ backgroundColor: isDarkMode ? '#333' : '#80D2E0' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 py-1">
                                <div className="card2">
                                    <div className="card-body">
                                        <canvas ref={chartContainer} id="chBar"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Statistics Graph End */}

            {/* Order Tank Start */}
            <div className='col-lg-6'>

                <div className='card pb-2 card-title' style={{ backgroundColor: isDarkMode ? '#333' : '#80D2E0' }}>
                    <h6 className='text1 p-3'>ORDER TANK</h6>
                    <div className='container'>
                        {cardDetails.map((card, index) => (
                            <div key={index} className='mb-3'>
                                <div className='card pb-3 card-details' style={{ backgroundColor: isDarkMode ? '#090A0B' : '#D7EFF3' }}>
                                    <div className='d-flex justify-content-between px-3'>
                                        <h6 className='text'>{card.title}</h6>
                                        <p className='text'>{card.viewOrder}</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='d-flex align-items-center px-3'>
                                                <FontAwesomeIcon className='' icon={faIndianRupeeSign} style={{ color: isDarkMode ? '#5d84c8' : '#9fa8a9' }} />
                                                <span className='text-rupee mx-3'>: {card.rupees}</span>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='d-flex align-items-center px-3'>
                                                <FontAwesomeIcon className='' icon={faTint} style={{ color: isDarkMode ? '#5d84c8' : '#9fa8a9' }} />
                                                <span className='text-litres mx-3'>: {card.liters}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='d-flex justify-content-end mx-3'>
                        <button type="button" className="btn text btn-outline-primary">View All</button>
                    </div>
                </div>
            </div>
            {/* Order Tank End */}
        </div>
    </div>
    </div>



    );
};

export default Dashboard;

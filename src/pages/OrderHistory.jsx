import React, { useState } from 'react';
import './OrderHistory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faClockRotateLeft, faDatabase, faIndianRupeeSign, faPenSquare, faSquareCheck, faTrash, faTriangleExclamation, faTimes } from '@fortawesome/free-solid-svg-icons';
import AppBar from '../components/AppBar';

const OrderHistory = () => {
    let datas = [
        {
            id: '2536459854525215224-500L',
            icon: faSquareCheck,
            price: '250',
            time: '2024-08-20-12.20-13.00',
            days: '2 days ago',
            status: 'COMPLETED',
            labelColor: '#328b6b'
        },
        {
            id: '2536459854525215224-500L',
            icon: faTrash,
            price: 250,
            time: '2024-08-20-12.20-13.00',
            days: '2 days ago',
            status: 'CANCELLED',
            labelColor: '#a95552'
        },
        {
            id: '2536459854525215224-500L',
            icon: faClock,
            price: 250,
            time: '2024-08-20-12.20-13.00',
            days: '2 days ago',
            status: 'IN PROGRESS',
            labelColor: '#4b72c2'
        },
        {
            id: '2536459854525215224-500L',
            icon: faTriangleExclamation,
            price: 250,
            time: '2024-08-20-12.20-13.00',
            days: '2 days ago',
            status: 'PENDING',
            labelColor: '#d6a24f'
        },
    ];

    const [orderId, setOrderId] = useState(); // Replace with your actual order ID variable
    const [showPopup, setShowPopup] = useState(false); // Initial state for showing popup

    
    function popupDetails(status, id) {
        var container = document.getElementById('order-container');
        if (status === 'CANCELLED') {
            setShowPopup(true); // Show the popup when condition is met
            setOrderId(id); // Set the order ID based on data.id
            container.style.filter = 'blur(7px)';
        }

    }
    var container = document.getElementById('order-container');
    const closePopup = () => {

        setShowPopup(false); // Update state to hide popup
        container.style.filter = 'none';
    };





    return (
        <>
            <AppBar/>
            <div className={`orderHistory ms-5 ${showPopup ? 'blur' : ''}`}>
                <div className="order-container" id='order-container' >
                    {datas.map((data, index) => (
                        <ul key={index} className="list-group list-unstyled order-item ps-5 py-2" >
                            {/* <div className=''> */}
                            <div className='row'>
                                <button className='col-md-2 offset-md-8 rounded-pill text-white btn' style={{ backgroundColor: data.labelColor, width: 'fit-content' }} onClick={() => popupDetails(data.status, data.id)}><FontAwesomeIcon icon={data.icon}></FontAwesomeIcon> {data.status}</button>
                            </div>
                            {/* </div> */}
                            <li className="mb-2"><FontAwesomeIcon icon={faPenSquare} className='text-black'></FontAwesomeIcon> : {data.id}</li>
                            <li className="mb-2"><FontAwesomeIcon icon={faIndianRupeeSign} className='text-black'></FontAwesomeIcon>  : {data.price}</li>
                            <li className="mb-2"><FontAwesomeIcon icon={faClockRotateLeft} className='text-black'></FontAwesomeIcon>  : {data.time}</li>
                            <li className="mb-0 pb-0"><FontAwesomeIcon icon={faClock} className='text-black'></FontAwesomeIcon>   : {data.days}</li>
                            {/* <div className='container'> */}
                            <div className='row'>
                                <li className="col-md-2 text-right offset-md-8 w-50" style={{ color: '#5d84c8' }}>VIEW ORDERS</li>
                            </div>
                            {/* </div>
                         */}
                        </ul>
                    ))}
                </div>
            </div>
            <div className='popup '>
                {showPopup && (
                    <div className='card px-1 py-3 popupContent'>
                        <p className='mb-0 ms-3'>Order ID : {orderId}<FontAwesomeIcon className='ms-5 ps-5' icon={faTimes} onClick={closePopup} /></p>
                        <hr />
                        <p className='result ms-3'>No Timeline data found for this order</p>
                        <div className='d-flex justify-content-end'>
                            <button className='bordered rounded-pill bg-black outline-none mt-5 me-3 px-2 py-1'>View More</button>
                        </div>
                    </div>
                )}


            </div>
        </>

    );
};

export default OrderHistory;

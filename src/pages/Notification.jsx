
import React from 'react';
import '../pages/Notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';


const Notification = () => {
    const cardData = [
        { message: 'Logged Successfully', time: '2 days ago' },
        { message: 'Logged Successfully', time: '3 days ago' },
    ];
    const data = [
        { id: 523622, message: 'Tanker is Ordered', time: '2 days ago' },
        { id: 523623, message: 'Tanker is Ordered', time: '3 days ago' },
        { id: 523624, message: 'Tanker is Ordered', time: '4 days ago' },
        { id: 523625, message: 'Tanker is Ordered', time: '5 days ago' },
    ];

    return (
        
        <div className='notification'>
            <div className='d-flex justify-content-end'>
                <button className='py-1 btn'><FontAwesomeIcon icon={faCheckSquare} className='me-2 text-white'></FontAwesomeIcon>MARK ALL SEEN</button>
            </div>
            <div className='card1'>
                <div className='container mt-5 pe-5 w-100'>
                    {cardData.map((data, index) => (
                        <div key={index} className='card mt-1'>
                            <p className='text-black px-4 mt-1'>{data.message}</p>
                            <div className='px-4 '>
                                <FontAwesomeIcon className='text-black' icon={faClockRotateLeft} />
                                <span className='px-3 time'>: {data.time}</span>
                            </div>
                        </div>

                    ))}
                </div>
                <div className='container pe-5 w-100'>
                    {data.map((item, index) => (
                        <div key={index} className='card mt-2'>
                            <p className='text-black px-4 mt-1'>{item.id} {item.message}</p>
                            <div className='px-4'>
                                <FontAwesomeIcon className='text-black' icon={faClockRotateLeft} />
                                <span className='px-3 time'>: {item.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Notification;
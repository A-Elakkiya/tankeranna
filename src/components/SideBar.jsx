import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGear, faNoteSticky, faShuttleVan, } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { faSignOut } from '@fortawesome/free-solid-svg-icons/faSignOut';
import { Link } from 'react-router-dom';



const SideBar = () => {
    return (
        <> 
            {/* d-flex & felx-column-> For displaying icons one by one */}
            {/* For making the border curve*/}
            <div className='sidebar d-flex flex-column rounded '>
                <Link to='/'><FontAwesomeIcon icon={faBars} className='sidebar-icon text-white'/></Link>
                <Link to='/orderHistory' ><FontAwesomeIcon icon={faCalendar} className='sidebar-icon text-white'/></Link>
                <FontAwesomeIcon icon={faNoteSticky} className='sidebar-icon text-white'/>
                <FontAwesomeIcon icon={faShuttleVan} className='sidebar-icon text-white'/>
                <Link to='/notification'><FontAwesomeIcon icon={faGear} className='sidebar-icon text-white'/></Link>
                <FontAwesomeIcon icon={faSignOut} className='sidebar-icon text-white'/>
            </div>
        </>

    )
}

export default SideBar
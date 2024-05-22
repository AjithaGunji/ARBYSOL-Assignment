import { Link } from 'react-router-dom';
import './Home.css';
import React from 'react';

export function HomePage() {
    const handleNewEnrollmentClick = () => {
        
    };

    const handleSeeDetailsClick = () => {
        
    };

    return (
        <div className='Home'>
            <h1>What are you looking for...</h1>
            <div className='center'>
              <Link to='/form'> <button id='new' onClick={handleNewEnrollmentClick}>New Enrollment</button>
              </Link>
               <Link to='/data'> <button id='new1' onClick={handleSeeDetailsClick}>See Details of Patients</button></Link>
            </div>
        </div>
    );
}

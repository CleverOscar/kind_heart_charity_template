import React from 'react';
import CompanyHeaderInfo from './HeaderInfo/CompanyHeaderInfo';
import Navbar from './Navbar/Navbar';

export default function Header(){
    return(
        <div className=''>
            <CompanyHeaderInfo />
            <Navbar />
        </div>
    )
}
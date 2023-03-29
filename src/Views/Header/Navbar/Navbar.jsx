/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

export default function Navbar(){

    const imageStyle = {
        'max-height': "90px",
        'width': 'auto',
    };

    return(
        <div className='border border-2 w-full bg-slate-50'>

            <div className='flex container mx-auto w-10/12'>
                <img style={imageStyle} src="https://i.ibb.co/rt7x6Jk/logo.png" alt="logo" border="0" />
                
                <div className='self-center'>
                    <p className='text-xl'>
                        Kind Heart Charity
                    </p>
                    <p className='text-sm'>
                        Non-Profit Organization
                    </p>
                </div>


                <MobileButon />
            
            </div>

        </div>
    )
}

function MobileButon(){
    return(
    
        <button className='border-2 border-black ml-auto'> 
                    mbNav
    </button>
    
    )
}
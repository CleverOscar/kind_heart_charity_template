/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from 'react';
import "./Navbar.css"


export default function Navbar(){

    const imageStyle = {
        'max-height': "90px",
        'width': 'auto',
    };

    return(
        <div className='border border-2 w-full bg-slate-50'>

            <div className='flex flex-row mx-auto container'>
                <img style={imageStyle} src="https://i.ibb.co/rt7x6Jk/logo.png" alt="logo" border="0" />
                
                <div className='self-center'>
                    <p className='text-xl'>
                        Kind Heart Charity
                    </p>
                    <p className='text-sm'>
                        Non-Profit Organization
                    </p>
                </div>


                <div className='self-center ml-auto'>
                    <MobileButon />
                </div>
            
            </div>

        </div>
    )
}

function MobileButon(){

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive)
    }

    return(
    
        <div className='mobileButton' onClick={toggleClass}>
            <div className={isActive ? 'change1 bar1' : "bar1"}></div>
            <div className={isActive ? 'change2 bar2': "bar2"}></div>
            <div className={isActive ? 'change3 bar3' : "bar3"}></div>
        </div>
    
    )

}
import React from 'react';


export default function CompanyHeaderInfo(){
    return(
        <div className='bg-[#5bc1ac] '>

           <div className='container mx-auto text-sm py-3 flex text-white'>
                <div className="flex flex-wrap container items-center mx-auto sm:justify-around md:justify-start">

                <div className='flex '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

                <p className='pl-2'>
                Akershysstranda 20, 0150 Oslo, Norway
                </p>
                </div>

                <div className='flex md:pl-4'>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>

                <p className='pl-2'>
                Info@Company.com
                </p>

                </div>

                </div>


                <div className='hidden md:block md:mx-auto md:w-auto'>
                <ul className='w-fit flex flex-row space-x-2 '>
                <li className='w-5'>
                <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Twitter_glyph_svg-256.png" alt="twitter" />
                </li>
                <li className='w-5'>
                <img alt="facebook" src="https://cdn3.iconfinder.com/data/icons/social-media-2253/17/Vector-2-256.png" />
                </li>
                <li className='w-5'>
                <img alt="instagram" src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-256.png" />
                </li>
                <li className='w-5'>
                <img alt="youtube" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_youtube-256.png" />
                </li>
                <li className='w-5 '>
                <img alt="whatsapp" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo-whatsapp-256.png" />
                </li>
                </ul>
                </div>
           </div>


            
        </div>
    )
}



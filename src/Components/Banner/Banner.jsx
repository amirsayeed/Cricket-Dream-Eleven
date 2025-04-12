import React from 'react';
import bgshadow from '../../assets/bg-shadow.png'
import banner from '../../assets/banner-main.png'
const Banner = ({handleCoin}) => {
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <div className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${bgshadow})`,
                    borderRadius:'20px',
                    
                }}>
                <div className="hero-overlay opacity-100 rounded-2xl"></div>
                <div className="hero-content text-neutral-content">
                    <div className="flex flex-col items-center justify-center gap-3">
                    <img src={banner} alt="" />
                    <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="mb-5">
                        Beyond Boundaries Beyond Limits.
                    </p>
                    <button onClick={handleCoin} className="btn bg-[#E7FE29] rounded-2xl">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
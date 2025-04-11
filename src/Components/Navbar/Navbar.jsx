import React from 'react';
import logo from '../../assets/logo.png'
import { TbCoinFilled } from "react-icons/tb";

const Navbar = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <div className="navbar bg-base-100 p-2">
            <div className='flex-1'>
                <img className='w-12 h-12' src={logo}/>
            </div>
            <div className="flex-none">
                <div className='flex items-center justify-end gap-5'>
                    <ul className='flex gap-8'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixtures</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedule</a></li>
                    </ul>
                    <button className='btn'><span>0</span>Coins<span><TbCoinFilled size={20} color='orange' /></span></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
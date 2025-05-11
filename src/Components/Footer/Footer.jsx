import React from 'react';
import logo from '../../assets/logo-footer.png'
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { FaInstagramSquare } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="footer footer-horizontal footer-center bg-base-300 text-base-content p-20">
            <aside>
                <img className='w-16 h-16 object-cover' src={logo} alt="" />
                <p className="text-2xl font-bold">
                    Dream Eleven</p>
                <p className='text-base font-medium'>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-5">
                <a target='_blank' href='https://www.facebook.com/'><FaFacebookF size={20} /></a>
                <a target='_blank' href='https://www.youtube.com/'><IoLogoYoutube size={20}/></a>
                <a target='_blank' href='https://www.instagram.com/'><FaInstagramSquare size={20} /></a>
                <a target='_blank' href='https://x.com/'><FaXTwitter size={20}/></a>
                </div>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;
import logo from '../../assets/logo.png'
import { TbCoinFilled } from "react-icons/tb";

const Navbar = ({coins}) => {
    return (
        <div className='max-w-7xl mx-auto'>
           <div className="navbar bg-base-100 p-2">
            <div className='navbar-start'>
                <div className='flex gap-2 items-center'>
                    <img className='w-12 h-12' src={logo}/>
                     <h2 className='text-2xl font-bold'>Dream Eleven</h2>
                </div>
            </div>
            <div className='navbar-center'>
                <div className='flex items-center justify-center gap-5'>
                    <ul className='flex gap-8 text-base font-medium'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixtures</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedule</a></li>
                    </ul>
                 </div>   
            </div>
            <div className="navbar-end">
                    <button className='btn'><span>{coins}</span>Coins<span><TbCoinFilled size={20} color='orange' /></span></button>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
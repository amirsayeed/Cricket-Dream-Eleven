import React from 'react';
import { FaUser } from "react-icons/fa6";
import { TiFlag } from "react-icons/ti";
const Player = ({player}) => {
    console.log(player)
    const {image,name,country,role,rating,battingType,biddingPrice} = player;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className='p-3'>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex items-center gap-3'>
                    <FaUser size={20} />
                    <h2 className="text-xl">{name}</h2>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='flex gap-1 items-center'>
                        <span><TiFlag size={20} /></span>
                        <span>{country}</span>
                    </p>
                    <button className='btn'>{role}</button>
                </div>
                <div className='border border-dashed border-gray-300 my-2'></div>
                <div className='flex items-start justify-between'>
                    <div className='flex flex-col gap-2'>
                        <p>Rating</p>
                        <p>Batting-Type</p>
                        <p>Price: ${biddingPrice}</p>
                    </div>
                    <div className='flex flex-col gap-2 text-center'>
                        <p>{rating}/5.0</p>
                        <p>{battingType}</p>
                        <button className='btn'>Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
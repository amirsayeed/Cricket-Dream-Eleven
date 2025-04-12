import React from 'react';
import Players from '../Players/Players';

const Available = ({handleSelect,totalSelected}) => {
    
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex items-center justify-between my-20'>
                <div>
                    <h3 className='text-xl font-medium'>Available Players</h3>
                </div>
                <div className='flex'>
                    <button className='btn'>Available</button>
                    <button className='btn'>Selected<span>({totalSelected})</span></button>
                </div>
            </div>
            <div className='my-20'>
                <Players handleSelect={handleSelect}/>
            </div>
        </div>
    );
};

export default Available;
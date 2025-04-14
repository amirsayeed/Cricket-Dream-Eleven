import React from 'react';
import Players from '../Players/Players';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Available = ({handleSelect,totalSelected,selectPlayer,handleRemove}) => {
    
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
            <div className='flex gap-5 my-20'>
                <div className='w-[60%]'>
                <Players handleSelect={handleSelect}/>
                </div>
                <div className='w-[40%]'>
                    <SelectedPlayers 
                    selectPlayer={selectPlayer}
                    handleRemove={handleRemove} />
                </div>
            </div>
        </div>
    );
};

export default Available;
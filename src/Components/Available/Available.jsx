import React, { useState } from 'react';
import Players from '../Players/Players';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Available = ({handleSelect,totalSelected,selectPlayer,handleRemove}) => {
    const [showSelect,setShowSelect] = useState(false);

    const handleAddMore =()=>{
        setShowSelect(false);
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex items-center justify-between my-20'>
                <div className='pt-4'>
                    {
                        showSelect ? (<h3 className='text-2xl font-medium mb-5'>Selected Players ({selectPlayer.length}/6)</h3>) : (<h3 className='text-2xl font-medium'>Available Players</h3>)
                    }
                </div>
                <div className='flex'>
                    <div>
                        <button onClick={()=> setShowSelect(false)} className={`${!showSelect ? 'btn bg-[#E7FE29]' : 'btn'}`} >Available</button>
                    </div>
                    
                    <div>
                        <button onClick={()=> setShowSelect(true)} className={`${showSelect ? 'btn bg-[#E7FE29]' : 'btn'}`}>Selected ({totalSelected})</button>
                    </div>
                </div>
            </div>

            <div className="my-5">
                {
                showSelect ? 
                (<div><SelectedPlayers 
                    selectPlayer={selectPlayer}
                    handleRemove={handleRemove} 
                    handleAddMore={handleAddMore}/></div>):
                (<div><Players handleSelect={handleSelect}/></div>)
                }
            </div>
        </div>
    );
};

export default Available;
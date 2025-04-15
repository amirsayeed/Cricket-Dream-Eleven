import React, { useState } from 'react';
import Players from '../Players/Players';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Available = ({handleSelect,totalSelected,selectPlayer,handleRemove}) => {
    const [showSelect,setShowSelect] = useState(false);

    const handleAddMore =()=>{
        setShowSelect(false);
        return <Players/>
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex items-center justify-end my-20'>
                <div className='flex'>
                    <div>
                        <button onClick={()=> setShowSelect(false)} className={`${!showSelect ? 'btn bg-yellow-400' : 'btn'}`} >Available</button>
                    </div>
                    
                    <button onClick={()=> setShowSelect(true)} className={`${showSelect ? 'btn bg-yellow-400' : 'btn'}`}>Selected<span>({totalSelected})</span></button>
                </div>
            </div>
            {/* <div className='flex gap-5 my-20'>
                <div className='w-[60%]'>
                <Players handleSelect={handleSelect}/>
                </div>
                <div className='w-[40%]'>
                    <SelectedPlayers 
                    selectPlayer={selectPlayer}
                    handleRemove={handleRemove} />
                </div>
            </div> */}
            <div className="my-10">
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
import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
const SelectedPlayers = ({selectPlayer,handleRemove,handleAddMore}) => {
    // console.log(selectPlayer);
    return (
        <div className='ml-10 my-10'>
            <h3 className='text-xl font-medium mb-5'>Selected Players ({selectPlayer.length}/6)</h3>
            <div className='flex flex-col gap-3'>
            {
                selectPlayer.map((selected,idx)=><div key={idx} className='flex items-center justify-between gap-3 p-4 border rounded-2xl'>
                    <div className='flex gap-3'>
                        <img className='w-16 h-16 object-cover' src={selected.image} alt="" />
                    <div className='flex flex-col gap-2'>
                        <p>{selected.name}</p>
                        <p>{selected.battingType}</p>
                    </div>
                    </div>
                    <button onClick={()=>handleRemove(selected.playerId)} className='btn hover:text-red-400'><RiDeleteBinLine size={20}/></button>
                </div> )
            }
            </div>
            <button onClick={handleAddMore} className='btn btn-primary mt-5'>Add More Players</button>
        </div>
    );
};

export default SelectedPlayers;
import React from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { RiDeleteBinLine } from "react-icons/ri";
const SelectedPlayers = ({selectPlayer,handleRemove,handleAddMore}) => {
    // console.log(selectPlayer);
    return (
        <div>
            <div className='flex flex-col gap-4'>
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
            {selectPlayer.length==0 && <div className='pb-10'><h2 className='text-2xl font-bold text-center'>No Player has been selected yet.</h2></div>}
            <button onClick={handleAddMore} className='btn btn-primary mt-8'><CiCirclePlus size={25} /> Add More Players</button>
        </div>
    );
};

export default SelectedPlayers;
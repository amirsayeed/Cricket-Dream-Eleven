import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
const SelectedPlayers = ({selectPlayer,handleRemove}) => {
    // console.log(selectPlayer);
    return (
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
                    <button onClick={()=>handleRemove(selected.playerId)} className='btn'><RiDeleteBinLine size={20}/></button>
                </div> )
            }
        </div>
    );
};

export default SelectedPlayers;
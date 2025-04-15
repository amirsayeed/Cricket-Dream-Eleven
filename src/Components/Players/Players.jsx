import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = ({handleSelect}) => {
    const [players,setPlayers] = useState([]);

    useEffect(()=>{
        fetch('legends.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data.legends))
    },[])

    return (
        <div>
            <div className='ml-10 mb-10'>
                <h3 className='text-xl font-medium'>Available Players</h3>
            </div>
            <div className='grid grid-cols-3 gap-4'>
            {
                players.map(player=><Player 
                                        key={player.playerId}
                                        player={player}
                                        handleSelect={handleSelect}
                                    />)
            }
        </div>
        </div>
    );
};

export default Players;
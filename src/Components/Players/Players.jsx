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
        <div className='grid grid-cols-2 gap-4'>
            {
                players.map(player=><Player 
                                        key={player.playerId}
                                        player={player}
                                        handleSelect={handleSelect}
                                    />)
            }
        </div>
    );
};

export default Players;
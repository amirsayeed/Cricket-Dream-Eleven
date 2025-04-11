import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = () => {
    const [players,setPlayers] = useState([]);

    useEffect(()=>{
        fetch('legends.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data.legends))
    },[])

    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                players.map(player=><Player key={player.playerId} player={player}/>)
            }
        </div>
    );
};

export default Players;
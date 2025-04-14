import { useState } from 'react'
import './App.css'
import Available from './Components/Available/Available'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [coins, setCoins] = useState(0);
  const [selectPlayer, setSelectPlayer] = useState([]);
  const [totalSelected, setTotalSelected] = useState(0);

  const handleCoin = () =>{
    const newCoins = coins + 500000;
    setCoins(newCoins);
  }

  const handleSelect = (select,price) =>{
    if(coins >= price){
      setSelectPlayer([...selectPlayer,select]);
      handleTotal();
      setCoins(coins-price);
    }else{
      alert("Not enough credit!!! Please claim free credit.")
    }
  }

  const handleTotal = ()=>{
    setTotalSelected(totalSelected+1);
  }

  const handleRemove = (id) =>{
    const remaining = selectPlayer.filter(pl=>pl.playerId!== id);
    setSelectPlayer(remaining);
  }

  return (
    <>
      <header>
        <Navbar coins={coins}/>
        <Banner handleCoin={handleCoin}/>
      </header>
      <main>
        <Available 
          handleSelect={handleSelect}
          totalSelected={totalSelected}
          selectPlayer={selectPlayer}
          handleRemove={handleRemove}/>
      </main>
    </>
  )
}

export default App

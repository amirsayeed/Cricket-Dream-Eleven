import { useState } from 'react'
import './App.css'
import Available from './Components/Available/Available'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import { toast } from 'react-toastify';

function App() {
  const [coins, setCoins] = useState(0);
  const [selectPlayer, setSelectPlayer] = useState([]);
  const [totalSelected, setTotalSelected] = useState(0);

  const handleCoin = () =>{
    const newCoins = coins + 500000;
    setCoins(newCoins);
    toast.success('50,000 coins claimed successfully!');
  }

  const handleSelect = (select,price) =>{
    if(coins >= price){
      setSelectPlayer([...selectPlayer,select]);
      toast.success("Congratulations! Player has been selected.")
      handleTotal();
      setCoins(coins-price);
    }else{
      toast.error("Not enough credit!!! Please claim free credit.")
    }
  }

  const handleTotal = ()=>{
      setTotalSelected(totalSelected+1);
      // toast.error('Maximum 6 players has already been selected!');
  }

  const handleRemove = (id) =>{
    const remaining = selectPlayer.filter(pl=>pl.playerId!== id);
    setSelectPlayer(remaining);
    setTotalSelected(totalSelected-1);
    toast.success('Player has been removed successfully.')
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

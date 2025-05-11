import { useState } from 'react'
import './App.css'
import Available from './Components/Available/Available'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import { toast } from 'react-toastify';
import Footer from './Components/Footer/Footer'

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
    const isPlayerExists = selectPlayer.find(player => player.playerId === select.playerId);

    if(!isPlayerExists){
        if(totalSelected < 6){
          if(coins >= price){
            setSelectPlayer([...selectPlayer, select]);
            setCoins(coins-price);
            setTotalSelected(totalSelected + 1);
            toast.success("Congratulations! Player has been selected.")
          }else{
            toast.error("Not enough credit!!! Please claim free credit.")
            return;
          }
        }
        else{
            toast.error("Maximum 6 players has already been selected");
            return;
          }
    }else{
      toast.warn('Player has already been selected!');
      return;
    }
    
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
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App

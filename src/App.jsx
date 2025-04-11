import './App.css'
import Available from './Components/Available/Available'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <header>
        <Navbar/>
        <Banner/>
      </header>
      <main>
        <Available/>
      </main>
    </>
  )
}

export default App

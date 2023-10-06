import './App.css'
import NavBar from './components/NavBar/NavBar'
import PChart from './components/PChart/PChart';
// import DaisyNav from './components/DaisyNav/DaisyNav'
import PriceOptions from './components/PriceOptions/PriceOptions';

function App() {

  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <PChart></PChart>
    </>
    
  )
}

export default App

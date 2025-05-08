import { useEffect} from 'react'
import CryptoTable from './components/CryptoTable'
import { updatePricesRandomly } from './features/CryptoSlice'
import { useDispatch } from 'react-redux'
import SerachBar from './components/SerachBar'

import './App.css'

function App() {
 
  const dispatch = useDispatch();
  

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePricesRandomly());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);


  return (
    <div className="App">
      <h1>Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  )
}

export default App

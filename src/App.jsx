
import './App.css'
import CreateNavbar from './component/CreateNavbar/CreateNavbar'
import LineChart from './component/LineChart/LineChart'
import Phones from './component/Phones/Phones'
import PriceOption from './component/PriceOptions/PriceOptions'

function App() {

  return (
    <>

      <h1 className='text-4xl font-bold text-center'>Price Option</h1>
      <CreateNavbar></CreateNavbar>
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App

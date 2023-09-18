
import './App.css'
import CreateNavbar from './component/CreateNavbar/CreateNavbar'
import Navbar from './component/Navbar/Navbar'
import PriceOption from './component/PriceOptions/PriceOptions'

function App() {

  return (
    <>

      <h1 className='text-4xl font-bold text-center'>Price Option</h1>
      <CreateNavbar></CreateNavbar>
      <PriceOption></PriceOption>
    </>
  )
}

export default App

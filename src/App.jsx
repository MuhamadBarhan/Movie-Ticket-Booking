import Navbar from './Pages/Components/Navbar'
import {BrowserRouter ,  Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

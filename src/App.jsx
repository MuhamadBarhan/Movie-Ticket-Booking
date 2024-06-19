import Navbar from './Pages/Components/Navbar'
import {BrowserRouter ,  Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:title/:id' element={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

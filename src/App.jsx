import Navbar from './Pages/Components/Navbar'
import {BrowserRouter ,  Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails'
import ScrollToTop from './Pages/Components/ScrollToTop'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
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
 
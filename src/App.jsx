import Navbar from './Pages/Components/Navbar'
import {BrowserRouter ,  Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails'
import ScrollToTop from './Pages/Components/ScrollToTop'
import Login from './Pages/Login'
import BuyTickets from './Pages/BuyTickets'
import SeatBooking from './Pages/SeatBooking'
import PaymentForm from './Pages/Payment'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/:title/:id' element={<MovieDetails/>}/>
          <Route path='/:id' element={<MovieDetails/>}/>
          <Route path='/bbuytickets' element={<BuyTickets/>}/>
          <Route path='/seatbooking' element={<SeatBooking/>}/>
          <Route path='/payment' element={<PaymentForm/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
 
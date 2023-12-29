import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Order from './Order';
import Slide from "react-slick";





function App() {



   return( <div>
    <div className="storeHeading">
    <h1> 📚 Around the Books</h1>
    <p>All bestsellers in one place</p>
    </div>
   <Router>
    <nav>
      <Link to='/' className='link'>Home</Link>
      <Link to='/order' className='link'>Order</Link>
      <Link to='/about' className='link'>About Us</Link>
      <Link to='/services' className='link'>For Authors</Link>
    </nav>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/order' element = {<Order/>}/>
    </Routes>
   </Router>

    <Slide/>

   <div>
    <footer>
      <p className='footer'> Copyright © 2023 Tatiana Kalinin </p>
    </footer>
   </div>
   </div>
   )
}

export default App;

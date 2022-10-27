
import { Form } from 'react-bootstrap';
import {BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter/Counter';
import Details from './components/Details';

import Shop from './components/Shop';
import Home from './components/Home';
import CartList from './components/CartList';
import Signup from './components/Forms/Signup';
import Login from './components/Forms/Login';
import Notfound from './components/Notfound';

import Navbar from './components/Navbar';
import About from './components/About';





function App() {
  return (
   
<BrowserRouter>
<Navbar></Navbar>


<Routes>

  <Route path='/shop' element={<Shop/>}/>
 
  <Route path='/shop/:id' element={<Details/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/count' element={<Counter/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/cart' element={<CartList/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/*' element={<Notfound/>}/>
  
</Routes>

      </BrowserRouter>  
      
     
     
      
  );
}

export default App;

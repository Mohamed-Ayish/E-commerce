
import { Form } from 'react-bootstrap';
import {BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter/Counter';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Home from './components/Home';



function App() {
  return (
   
<BrowserRouter>

<Navbar></Navbar>

<Routes>

  <Route path='/shop' element={<Shop/>}/>
  <Route path='/shop/:id' element={<Details/>}/>
  <Route path='/count' element={<Counter/>}/>
  <Route path='/' element={<Home/>}/>

</Routes>

      </BrowserRouter>  
      
     
     
      
  );
}

export default App;

import ReactDom from 'react-dom/client'
import Header from "./components/Header";
import Card from "./components/card";
import Todocontainer from "./components/Todocontainer";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from "./pages/login"
import Signup from './pages/signup';
import Landing from './pages/landing';
import { useState } from 'react';


function App(){
  const[users,setusers]=useState([
  {
  username:"John",
  password:"123",
  
  },])
  
  return(
  <div>
  
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
  <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
  <Route path='/landing' element={<Landing/>}></Route>
  
  
  </Routes>
  </BrowserRouter>
  
  
  </div>
  
  )
  }
  
  
  


export default App

import './App.css';
import React,{useEffect} from 'react';
import Register from './components/register/Register';
import Categories from './components/categories/Categories';
import HomePage from './components/homepage/HomePage';
import {Routes,Route, useNavigate} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  

  useEffect(()=>{
      if(!localStorage.getItem('Login')){
        navigate('/register');
      }
      if(localStorage.getItem('Login')){
        navigate('/categories');
      }
      if(localStorage.getItem('Login') && localStorage.getItem('categoryfilled')){
        navigate('/home');
      }
  },[navigate]);

  return (
    <div>
      <Routes>
        <Route path='/register' element= {<Register/>}/>
        <Route path='/categories' element={<Categories/>} />
        <Route path='/home' element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import React,{useEffect} from 'react';
import Register from './components/register/Register';
import Categories from './components/categories/Categories';
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
      if(localStorage.getItem('Login') && localStorage.getItem('Categoryfilled')){
        navigate('/home');
      }
  },[navigate]);

  return (
    <div>
      <Routes>
        <Route path='/register' element= {<Register/>}/>
        <Route path='/categories' element={<Categories/>} />
        <Route path='/home' element={<>Home Page</>} />
      </Routes>
    </div>
  );
}

export default App;

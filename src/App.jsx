import React from 'react'
import './App.css';
import {Routes,Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import ExerciseDetails from './pages/exerciseDetails/ExerciseDetails';
import Footer from './components/footer/Footer';

const App = () => {
  return (
   
    <Box width="400px" sx={{width:{ xl:'1488px'}}} m='auto'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
        </Routes>
        <Footer/>
    </Box>
   
  )
}

export default App 
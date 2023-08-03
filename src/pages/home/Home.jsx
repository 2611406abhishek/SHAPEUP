import React, { useState } from 'react'
import './Home.css';
import { Box } from '@mui/material';
import Banner from '../../components/banner/Banner';
import SearchExercises from '../../components/searchExercises/SearchExercises';
import Exercises from '../../components/exercises/Exercises';
const Home = () => {
       
        const [bodyPart,setBodyPart] = useState('all');
        const [exercises,setExercises] = useState([]);
        console.log(bodyPart);

  return (
    <Box> 
     <Banner/>
     <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
     <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home
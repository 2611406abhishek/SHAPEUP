import './Exercises.css';
import React, { useEffect, useState } from 'react';
import {Pagination} from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions,fetchData } from '../../utils/fetchData';
import ExerciseCard from '../exercisecard/ExerciseCard';

const Exercises = (props) => {

   const [currentPage,setCurrentPage] = useState(1);
   const exercisesPerPage=9;
   const indexOfLastExercise =   currentPage*exercisesPerPage;
   const indexOfFirstExercise = indexOfLastExercise-exercisesPerPage;
   const currentExercises = props.exercises.slice(indexOfFirstExercise,indexOfLastExercise);

   const paginate =(e,value) =>{
        setCurrentPage(value);
        window.scrollTo({top:1800,behavior:'smooth'})
   }

   useEffect(() =>{
           const fetchExercisesData = async ()=>{
             let exercisesData=[];
             if(props.bodyPart==='all'){
               exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
             }else{
              exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${props.bodyPart}`,exerciseOptions);
          
            }
            props.setExercises(exercisesData);
           }

           fetchExercisesData();
   },[props.bodyPart]);


  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
      {currentExercises.map((exercise, idx) => (
        <ExerciseCard key={idx} exercise={exercise} />
      ))}
    </Stack>
    <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
      {props.exercises.length > 9 && (
        <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(props.exercises.length /exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      )}
    </Stack>
  </Box>
  )
}

export default Exercises
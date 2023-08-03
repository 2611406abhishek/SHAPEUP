import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import HorizontalScrollbar from '../horizontalscrollbar/HorizontalScrollbar';
import Loader from '../loader/Loader';

const SimilarExercises = (props) => {
    
    return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {props.targetMuscleExercises.length !== 0 ?<HorizontalScrollbar data={props.targetMuscleExercises}  flag={true}/> : <Loader/>}
        </Stack>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
        </Typography>
        <Stack direction="row"  
        sx={{ p: 2, position: 'relative'}}
        >
        {props.equipmentExercises.length !== 0 ? <HorizontalScrollbar data={props.equipmentExercises} flag={true}/> : <Loader/>}
        </Stack>
    </Box>
  );
};
//sx={props.item === props.bodyPart? { borderTop: '4px solid #FF2625', background: '#fff', width: '270px', height: '262px', cursor: 'pointer', gap: '47px' }

export default SimilarExercises;
import React from 'react';
import {NavLink } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = (props) => (
  <NavLink className="exercise-card" to={`/exercise/${props.exercise.id}`}>
    <img src={props.exercise.gifUrl} alt={props.exercise.name} loading="lazy" />
    <Stack direction="row"
    >
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {props.exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {props.exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {props.exercise.name}
    </Typography>
  </NavLink>
);

export default ExerciseCard;
import React from 'react'
import { Stack,Typography } from '@mui/material'
import Icon from '../../assets/icons/gym.png'

const BodyPart = (props) => {
  return (
       <Stack
          type="button"
          alignItems="center"
          justifyContent="center"
          className="bodyPart-card"
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          lineHeight="110px"
          textAlign="center"
          sx={props.item === props.bodyPart? { borderTop: '4px solid #FF2625', background: '#fff', width: '270px', height: '262px', cursor: 'pointer', gap: '47px' } : { background: '#fff', width: '270px', height: '262px', cursor: 'pointer', gap: '47px' }}
          onClick={() =>{
             props.setBodyPart(props.item);
             window.scrollTo({top:1800,left:100,behavior:'smooth'})
          }}
       >
         <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
         <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {props.item}</Typography>
       </Stack>
    )    
}

export default BodyPart
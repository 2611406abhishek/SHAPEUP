import React, { useContext } from 'react'
import './HorizontalScrollbar.css';
import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';
import BodyPart from '../bodypart/BodyPart';
import ExerciseCard from '../exercisecard/ExerciseCard';
const HorizontalScrollbar = (props) => {
  return (
      <>
        {!props.flag && ( <div className='instruction'>
           <img src={LeftArrowIcon} className='arrowImg' alt="left"/>
           <h4>swipe left or right</h4>
            <img src={RightArrowIcon} className='arrowImg' alt="right"/>
        </div> )}
        <div className='wrapper'>
             {
                props.data.map((item) =>(
                     <Box
                     key={item.id  || item}
                     itemId={item.id  || item}
                     title={item.id  || item}
                     m="0 40px"
                     >
                    {props.bodyParts ? <BodyPart item={item} setBodyPart={props.setBodyPart} bodyPart={props.bodyPart} /> : <ExerciseCard exercise={item}/>}
                     </Box>
                ))
             } 
            </div> 
     </>     
    
  )
}

export default HorizontalScrollbar
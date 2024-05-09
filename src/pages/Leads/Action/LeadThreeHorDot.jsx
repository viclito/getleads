import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import edits from '../../../assets/edit.png'
import deletes from '../../../assets/delete.png'

const LeadThreeHorDot = ({edit}) => {
    
  return (
    <>
        <Paper sx={{ position: 'absolute', zIndex:'30', bottom: '-35px', left: '-105px',  p: 3, boxShadow: '-1px -1px 1px #ccc , 1px 1px 1px #ccc', display: edit ? 'flex' : 'none' , flexDirection:'column' , gap:1.5 }}>
            <Box sx={{display:'flex' , gap:1.5 }}>
              <img src={edits} alt=""  style={{width:'22px' , height:'22px'}}/>
              <Typography variant='subtitle2'>Edit</Typography>
            </Box>
            <Box sx={{display:'flex' , gap:1.5 }}>
              <img src={deletes} alt=""  style={{width:'22px' , height:'22px'}}/>
              <Typography variant='subtitle2'>Delete</Typography>
            </Box>
        </Paper>      
    </>
  )
}

export default LeadThreeHorDot
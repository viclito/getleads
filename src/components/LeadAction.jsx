import { Box, Typography } from '@mui/material'
import React from 'react'

const LeadAction = ({img , name}) => {
  return (
    <>
        <Box sx={{display:'flex' , gap:1.5}} key={name}>
            <img src={img} alt=""  style={{width:'18px' , height:'18px'}}/>
            <Typography variant='subtitle2'>{name}</Typography>
        </Box>
    </>
  )
}
export default LeadAction



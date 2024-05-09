import { InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'

const LeadFilter = ({name , state , setState ,menuList}) => {
    
  return (
    <>
        <TextField sx={{ width:'170px' , '& .MuiInputBase-input': {padding: '6px',}}}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Typography variant='subtitle2' sx={{fontSize:'13px', fontWeight:500}}>{name}</Typography>
                    </InputAdornment>
                ),
                
            }}
            value={state}
            onChange={(e)=>setState(e.target.value)}
            select
            >
                {menuList.map((item ,i)=>(
                        <MenuItem key={i} value={item}>{item}</MenuItem>
                ))}
        </TextField>
    </>
  )
}

export default LeadFilter
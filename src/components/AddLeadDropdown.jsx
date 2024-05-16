import { Box, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'

const AddLeadDropdown = ({name , state , setState ,menuList}) => {
    
  return (
    <>
        <TextField sx={{ flexGrow:1 , '& .MuiInputBase-input': {padding: '6px',  fontSize:'13px' , fontWeight:500}}}
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
                        <MenuItem key={i} value={item} sx={{fontSize:'13px'}}>
                            {menuList === 'statusList' && <Box sx={{bgcolor:'red' , height:'10px', width:'10px'}}></Box>}
                            {item}
                        </MenuItem>
                ))}
        </TextField>
    </>
  )
}

export default AddLeadDropdown
import {  FormLabel, MenuItem, TextField } from '@mui/material'
import React from 'react'

const DropDown = ({name , state , setState , menuList}) => {


  return (
    <>
        <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>{name} </FormLabel>
        <TextField
            sx={{ width: '100%'  , '& .MuiInputBase-input': { padding: '6px' , width:'70%' , fontSize:'13px' , fontWeight:500 , display:'flex'} }}
            value={state}
            onChange={(e)=>setState(e.target.value)}
            select
        >
                
                {menuList.map((item ,i)=>(
                        <MenuItem sx={{alignSelf:'flex-start' , fontSize:'13px' , fontWeight:500}} key={i} value={item.name}>
                                {item.name}
                        </MenuItem>
                ))}
            
        </TextField>
    </>
  )
}

export default DropDown
import { Box, FormLabel, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'

const DropDown = ({setTrue ,name , state , setState , menuList}) => {


  return (
    <>
        <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>{name} </FormLabel>
        <TextField
            sx={{ width: '100%'  , '& .MuiInputBase-input': { padding: '6px' , width:'70%' , fontSize:'13px' , fontWeight:500 , display:'flex'} }}
            value={state}
            onChange={(e)=>setState(e.target.value)}
            select
            SelectProps={{multiple : setTrue}}
        >
                
                {menuList.map((item ,i)=>(
                        <MenuItem sx={{alignSelf:'flex-start' , fontSize:'13px' , fontWeight:500}} key={i} value={item.name}>
                            <Box sx={{display:'flex' ,gap:.5}}>
                                <Typography sx={{width:'20px' , height:'20px' , borderRadius:20 , backgroundColor:item.color , display:'flex' , alignItems:'center' , justifyContent:'center' , fontSize:'12px' , fontweight:800 , color:'white'}}>{item.name ? item.name[0] : null}</Typography>
                                {item.name}
                            </Box>
                        </MenuItem>
                ))}
            
        </TextField>
    </>
  )
}

export default DropDown
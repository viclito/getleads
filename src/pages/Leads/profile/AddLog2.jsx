import { Box, Button, FormControl, FormLabel, Paper, Typography } from '@mui/material'
import React from 'react'
import cross from '../../../assets/cross2.png'
import AddLeadDropdown from '../../../components/AddLeadDropdown'
import AddLeadsText from '../../../components/AddLeadsText'

const AddLog2 = ({type , setType , typeList}) => {



    const handleSubmit =(e)=>{
        e.preventDefault()
    }
  return (
    <Paper sx={{position:'absolute' , bottom:'10px' , right:'20px' , padding:2  , borderRadius:'10px' , width:'450px' , display:'block'}}>
        <Box sx={{display:'flex' , justifyContent:'space-between' , padding:'20px 0px'}}>
            <Typography variant='subtitle2'>Add Leads</Typography>
            <Button sx={{ minWidth: '16px'}} 
            // onClick={()=>setAddLog1Toggle(false)}
            >
                <img src={cross} alt="" style={{width:'18px' , height:'18px'}}/>
            </Button>
        </Box>
        <FormControl component="form" onSubmit={handleSubmit} sx={{width:'100%' }}>
            <Box sx={{display:'flex', flexDirection:'column', gap:2 }}>

                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Log Type <Typography component="span" sx={{ color: 'red' }}>*</Typography></FormLabel>
                    <AddLeadDropdown name='' state={type} setState={setType} menuList={typeList} />
                </Box>

                <Box sx={{ display: 'flex', width: '100%' , flexDirection:'column'}}>
                    <FormLabel sx={{ color: 'black', fontSize: '13px', marginBottom: .5 }}>Notes</FormLabel>
                    <AddLeadsText/>
                </Box>

                

                <Box sx={{display:'flex' , width:'100%' }}>
                    <Button type='submit' sx={{backgroundColor:"#EE3448" , color:'white' , px:8 , mr:3 , '&:hover': {bgcolor: '#EE4E44'}}}>Add Task</Button> 
                    <Button sx={{backgroundColor:"white" , color:'black' , px:3 , border:'1px solid black' , '&:hover': {bgcolor: 'white'}}}>Cancel</Button> 
                </Box>

            </Box>
        </FormControl>
    </Paper>
  )
}

export default AddLog2
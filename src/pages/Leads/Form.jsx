import { Box, Button, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/Layer 1.png'

const Form = () => {
  return (
    <>
        <Paper sx={{width:"100px" , boxShadow:'none', backgroundColor : 'transparent', alignSelf:"flex-start", marginLeft:'40px'}}>
            <img src={logo} alt="" style={{width:"100%"}}/>
        </Paper>
       <Box sx={{display:"flex" ,flexDirection:"column" , gap:"5px"}}>
            <Typography variant='h4' sx={{textAlign:'center' ,fontWeight:600}}>Sign in to GetLead</Typography>
            <Typography variant='body1' sx={{textAlign:'center', fontSize:"12px" , fontWeight:500 , color:"#606060"}}>Log in to your account</Typography>
            <InputLabel htmlFor="login-email" sx={{paddingTop:"30px" , fontSize:"12px"}}>Email Address</InputLabel>
            <TextField id='login-email' placeholder='Enter Your Email'
            sx={{width:"300px"  ,"& input": {
                height: "10px" , fontSize:"14px"
              }}}
                InputProps={{ disableUnderline: true }}
            />
            <InputLabel htmlFor="login-email" sx={{ fontSize:"12px" , paddingTop:'5px'}}>Password</InputLabel>
            <TextField id='login-email' placeholder='Enter Your Password'
            sx={{width:"300px" ,"& input": {
                height: "10px" , fontSize:"14px"
              }}}
                InputProps={{ disableUnderline: true }}
            />
            <Typography variant='body1' sx={{textAlign:'end', fontSize:"12px" , fontWeight:500 , color:"#606060" , cursor:"pointer"}}>Forgot password?</Typography>
            <Button variant='contained' sx={{color:'white' , backgroundColor: "#EE4E44" ,'&:hover': {bgcolor: '#EE4E44',}}}>Sign In</Button>

        </Box> 
        <Typography variant='body1' sx={{textAlign:'center', paddingTop:"30px", fontSize:"15px" , fontWeight:500 , cursor:'pointer'}}>Don't have a Getlead account? Start a free trial</Typography>
    </>
  )
}

export default Form
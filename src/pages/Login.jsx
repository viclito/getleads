import { Box,  Paper,  Typography } from '@mui/material'
import React from 'react'
import mainimg from '../assets/OBJECTS.png'
import Form from './Login/Form'

const Login = () => {

  return (
    <Box sx={{
      width:"100%",
      height:'100vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }}>
      <Box sx={{
        height:"100%",
        width:'60%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#FFF8B880"
      }}>
        <Box>
        <Paper sx={{width:{
          lg:"500px",
          md:"400px",
          sm:"350px"
        } , boxShadow:'none', backgroundColor : 'transparent'}}>
          <img src={mainimg} alt="" width="100%"/>
        </Paper>
        <Typography variant='h3' sx={{ lineHeight: "50px", color: "#313131" ,fontFamily:'rob'}}>
          Unleash Business <br /> Potential with <span style={{ color: "red" }}>GetLead</span>
        </Typography>
        <Typography variant='subtitle2'>Experience the transformative power of GetLead CRM.</Typography>
        </Box>
      </Box>
      <Box sx={{
        width:'40%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Form/>
      </Box>
    </Box>
  )
}

export default Login
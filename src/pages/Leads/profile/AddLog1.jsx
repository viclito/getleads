import { Box, Button, FormControl, FormLabel, Paper, Typography } from '@mui/material'
import { DesktopDatePicker, DesktopTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useState } from 'react'
import cross from '../../../assets/cross2.png'
import dayjs from 'dayjs'
import AddLeadDropdown from '../../../components/AddLeadDropdown'
import AddLeadsText from '../../../components/AddLeadsText'

const AddLog1 = ({type , setType , typeList}) => {

    const [call , setCall] = useState('')
    const [direction , setDirection] = useState('')
    const [date , setDate] = useState(null)
    const [time , setTime] = useState(null)

    const callList = ['call' , 'call' , 'call']
    const directionList = ['outbound' , 'outbound' , 'outbound']

    const formattedDate = date ? dayjs(date).format('DD-MM-YYYY HH:mm') : '';
    console.log(formattedDate);
    const formattedTime = time ? dayjs(time).format('HH:mm') : '';
    console.log(formattedTime);

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

                

                <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                    <Box sx={{ width: '50%' , display:'flex' , flexDirection:'column'}}>
                        <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Call Outcome<Typography component="span" sx={{ color: 'red' }}>*</Typography></FormLabel>
                        <AddLeadDropdown name='' state={call} setState={setCall} menuList={callList} />
                    </Box>
                    <Box sx={{ width: '50%' , display:'flex' , flexDirection:'column'}}>
                        <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Direction<Typography component="span" sx={{ color: 'red' }}>*</Typography></FormLabel>
                        <AddLeadDropdown name='' state={direction} setState={setDirection} menuList={directionList} />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                    <Box sx={{ width: '50%' }}>
                        <FormLabel sx={{ color: 'black', fontSize: '13px', marginBottom: .5 }}>Date</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DesktopDatePicker
                                value={date}
                                onChange={(newDate) => setDate(newDate)}
                                sx={{ width: '100%', '& .MuiInputBase-input': { padding: '8px', fontSize: '13px', fontWeight: 500 } , '& svg': { fontSize: '15px' } }}
                            />
                        </LocalizationProvider>
                    </Box>
                    <Box sx={{ width: '50%' }}>
                        <FormLabel sx={{ color: 'black', fontSize: '13px', marginBottom: .5 }}>Time</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DesktopTimePicker
                                value={time}
                                onChange={(newTime) => setTime(newTime)}
                                sx={{ width: '100%', '& .MuiInputBase-input': { padding: '8px', fontSize: '13px', fontWeight: 500 }, '& svg': { fontSize: '15px' } }}
                            />
                        </LocalizationProvider>
                    </Box>
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

export default AddLog1
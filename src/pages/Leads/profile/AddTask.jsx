import { Box, Button, FormControl, FormLabel, MenuItem, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import cross from '../../../assets/cross2.png'
import AddLeadDropdown from '../../../components/AddLeadDropdown'
import { DesktopDatePicker, DesktopTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import DropDown from '../../../components/DropDown'
import AddLeadsText from '../../../components/AddLeadsText'



const AddTask = ({addTaskToggle , setAddTaskToggle}) => {
    const [task , setTask] = useState('')
    const [type , setType] = useState('')
    const [priority , setPriority] = useState('')
    const [date , setDate] = useState(null)
    const [time , setTime] = useState(null)
    const [assign , setAssign] = useState([])
    const [notify , setNotify] = useState('')


    const typeList =[]
    const PriorityList = [
        {name : 'High' , color:'#867AFC'},
        {name : 'Medium' , color:'#31B6B5'},
        {name : 'Low' , color:'#B4B631'}
    ]
    const assignList = [
        {name : 'Akhil Krishna' , color:'#867AFC'},
        {name : 'Ashwathi Ramesh' , color:'#31B6B5'},
        {name : 'Sharun das' , color:'#B4B631'}
    ]
    const notifyList = [
        {name : 'Akhil Krishna' , color:'#867AFC'},
        {name : 'Ashwathi Ramesh' , color:'#31B6B5'},
        {name : 'Sharun das' , color:'#B4B631'}
    ]

    const formattedDate = date ? dayjs(date).format('DD-MM-YYYY HH:mm') : '';
    console.log(formattedDate);
    const formattedTime = time ? dayjs(time).format('HH:mm') : '';
    console.log(formattedTime);

    const handleSubmit =(e)=>{
        e.preventDefault()
    }
  return (
    <Paper sx={{position:'absolute' , bottom:'10px' , right:'20px' , padding:2  , borderRadius:'10px' , width:'450px' , display:addTaskToggle?'block':'none'}}>
        <Box sx={{display:'flex' , justifyContent:'space-between' , padding:'20px 0px'}}>
            <Typography variant='subtitle2'>Add Leads</Typography>
            <Button sx={{ minWidth: '16px'}} 
            onClick={()=>setAddTaskToggle(false)}
            >
                <img src={cross} alt="" style={{width:'18px' , height:'18px'}}/>
            </Button>
        </Box>
        <FormControl component="form" onSubmit={handleSubmit} sx={{width:'100%' }}>
            <Box sx={{display:'flex', flexDirection:'column', gap:2 }}>

                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Task name <Typography component="span" sx={{ color: 'red' }}>*</Typography></FormLabel>
                    <TextField sx={{width:'100%', '& .MuiInputBase-input': {padding: '6px', fontSize:'13px' , fontWeight:500}}} value={task} onChange={(e)=>setTask(e.target.value)}/>
                </Box>

                <Box sx={{display:'flex' , gap:2 , width:'100%'}}>
                    <Box sx={{width:'50%'}}>
                        <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Task Type<Typography component="span" sx={{ color: 'red' }}>*</Typography></FormLabel>
                        <Box sx={{display:'flex' , width:'100%',alignItems:'center', gap:1}}>
                            <AddLeadDropdown name='' state={type} setState={setType} menuList={typeList} />
                        </Box>
                    </Box>
                    <Box sx={{width:'50%'}}>
                        <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Assigned to </FormLabel>
                                
                        <TextField
                            sx={{ width: '100%'  , '& .MuiInputBase-input': { padding: '6px' , width:'70%' , fontSize:'13px' , fontWeight:500 , display:'flex'} }}
                            value={priority}
                            onChange={(e)=>setPriority(e.target.value)}
                            select
                        >

                                {PriorityList.map((item ,i)=>(
                                    <MenuItem sx={{alignSelf:'flex-start' , fontSize:'13px' , fontWeight:500}} key={i} value={item.name}>
                                        <Box sx={{display:'flex' ,gap:1 , alignItems:'center'}}>
                                            <Typography sx={{width:'12px' , height:'12px' , borderRadius:'2px' , backgroundColor:item.color , display:'flex' , alignItems:'center' , justifyContent:'center' , fontSize:'12px' , fontweight:800 , color:'white'}}></Typography>
                                            {item.name}
                                        </Box>
                                    </MenuItem>
                                ))}

                        </TextField>
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

                <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                    <Box sx={{ width: '50%' }}>
                        <DropDown setTrue={true} name='Assigned to' state={assign} setState={setAssign} menuList={assignList}/>
                    </Box>

                    <Box sx={{ width: '50%' }}>
                        <DropDown setTrue={false} name='When done , notify' state={notify} setState={setNotify} menuList={notifyList}/>
                    </Box>
                </Box>

                <Box>
                    <FormLabel sx={{ color: 'black', fontSize: '13px', marginBottom: .5 }}>Notes</FormLabel>
                    <AddLeadsText/>
                </Box>

                <Box sx={{display:'flex' , width:'100%'  }}>
                    <Button type='submit' sx={{backgroundColor:"#EE3448" , color:'white' , px:5 , mr:3 , '&:hover': {bgcolor: '#EE4E44'}}}>Add Task</Button> 
                    <Button sx={{backgroundColor:"white" , color:'black' , px:3 , border:'1px solid black' , '&:hover': {bgcolor: 'white'}}}>Cancel</Button> 
                </Box>

            </Box>
        </FormControl>
    </Paper>
  )
}

export default AddTask
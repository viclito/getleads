import { Box, Button, FormControl, FormLabel, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import cross from '../../../assets/cross2.png'
import AddLeadDropdown from '../../../components/AddLeadDropdown'
import plus from '../../../assets/Pluscircle.png'
import AddLeadsText from '../../../components/AddLeadsText'
import { DesktopDateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

const AddLeads = ({addLeadToggle, setAddLeadToggle}) => {
    const [name , setName] = useState('')
    const [number , setNumber] = useState('')
    const [email , setEmail] = useState('')
    const [company , setCompany] = useState('')
    const [source , setSource] = useState('')
    const [purpose , setPurpose] = useState('')
    const [status , setStatus] = useState('')
    const [followup , setFollowup] = useState(null)
    const [agent , setAgent]= useState([])

    const handleAgentChange = (event) => {
        setAgent(event.target.value)
    };


    // const renderAgent = (agent) => {
    //     if (agent.length === 0) {
    //         return [];
    //     } else if (agent.length === 1) {
    //         return [agent[0]];
    //     } else if (agent.length === 2) {
    //         return [agent[0],agent[1], `${agent.length - 1} more`];
    //     } else {
    //         return [agent[0], `${agent.length - 1} more`];
    //     }
    // };

    const formattedfollowup = followup ? dayjs(followup).format('DD-MM-YYYY HH:mm') : '';
    console.log(formattedfollowup);

    const AgentList = [
        {name : 'Akhil Krishna' , color:'#867AFC'},
        {name : 'Ashwathi Ramesh' , color:'#31B6B5'},
        {name : 'Sharun das' , color:'#B4B631'}
    ]
    const sourceList = ['instagram', 'facebook','Telegram']
    const purposeList = ['Insurance', 'GetLead CRM','Telegram']
    const statusList = ['New', 'Intersted','Not Interested', 'Closed']

    const handleSubmit = (e)=>{
        e.preventDefault()
        const data ={name , number , email ,company ,source ,purpose , status , agent ,formattedfollowup}

        console.log(data);
    }
  return (
    <>
        <Box sx={{position:'fixed' , height:'100vh' , width : 'calc(100vw - 55px)',top:0 , right:0 , zIndex:'31px' , display:addLeadToggle?'flex':'none' , justifyContent:'flex-end' , alignItems:'center' }}>
            <Box sx={{width:'100%' , height:'100%' , backgroundColor:'rgba(0, 0, 0, 0.5)' , position:'absolute'}}></Box>

            <Box sx={{bgcolor:'white', position:'relative',zIndex:'40px', width:'500px' , height:'100%' , overflowY:'auto'}}>
                <Box sx={{display:'flex' , justifyContent:'space-between' , padding:'20px 16px'}}>
                    <Typography variant='subtitle2'>Add Leads</Typography>
                    <Button sx={{ minWidth: '16px'}} onClick={()=>setAddLeadToggle(false)}>
                        <img src={cross} alt="" style={{width:'18px' , height:'18px'}}/>
                    </Button>
                </Box>

                <FormControl component="form" onSubmit={handleSubmit} sx={{width:'100%' }}>
                    <Box sx={{display:'flex', flexDirection:'column', gap:2 , padding:2}}>
                        <Box sx={{}}>
                            <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Veteran’s name <Typography component="span" sx={{ color: 'red' }}>*</Typography></FormLabel>
                            <TextField sx={{width:'100%', '& .MuiInputBase-input': {padding: '6px', fontSize:'13px' , fontWeight:500}}} value={name} onChange={(e)=>setName(e.target.value)}/>
                        </Box>
                        <Box sx={{display:'flex' , gap:2 , width:'100%'}}>
                            <Box sx={{width:'50%'}}>
                                <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Phone Number<Typography component="span" sx={{ color: 'red' }}>*</Typography></FormLabel>
                                <Box sx={{display:'flex' , width:'100%',alignItems:'center', gap:1}}>
                                    <TextField sx={{flexGrow:1, '& .MuiInputBase-input': {padding: '6px', fontSize:'13px' , fontWeight:500}}} value={number} onChange={(e)=>setNumber(e.target.value)}/> 
                                    <img src={plus} alt="" style={{width:'18px', height:'18px'}}/>
                                </Box>
                            </Box>
                            <Box sx={{width:'50%'}}>
                                <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Email </FormLabel>
                                
                                <Box sx={{display:'flex' , width:'100%',alignItems:'center' , gap:1}}>
                                    <TextField sx={{flexGrow:1, '& .MuiInputBase-input': {padding: '6px', fontSize:'13px' , fontWeight:500}}} value={email} onChange={(e)=>setEmail(e.target.value)}/> 
                                    <img src={plus} alt="" style={{width:'18px', height:'18px' }}/>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex' , gap:2 , width:'100%'}}>
                            <Box sx={{width:'50%'}}>
                                <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Company</FormLabel>
                                <Box sx={{display:'flex' , width:'100%',alignItems:'center', gap:1}}>
                                    <TextField sx={{flexGrow:1, '& .MuiInputBase-input': {padding: '6px', fontSize:'13px' , fontWeight:500}}} value={company} onChange={(e)=>setCompany(e.target.value)}/> 
                                </Box>
                            </Box>
                            <Box sx={{width:'50%'}}>
                                <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Source </FormLabel>
                                
                                <Box sx={{display:'flex' , width:'100%',alignItems:'center' , gap:1}}>
                                    <AddLeadDropdown name='' state={source} setState={setSource} menuList={sourceList}/>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex' , gap:2 , width:'100%'}}>
                            <Box sx={{width:'50%'}}>
                                <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Purpose </FormLabel>
                                
                                <Box sx={{display:'flex' , width:'100%',alignItems:'center' , gap:1}}>
                                    <AddLeadDropdown name='' state={purpose} setState={setPurpose} menuList={purposeList}/>
                                </Box>
                            </Box>
                            <Box sx={{width:'50%'}}>
                                <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Status</FormLabel>
                                
                                <Box sx={{display:'flex' , width:'100%',alignItems:'center' , gap:1}}>
                                    <AddLeadDropdown name='' state={status} setState={setStatus} menuList={statusList}/>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex' , gap:2 , width:'100%'}}>
                            <Box sx={{width:'50%'}}>
                                <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Assigned to </FormLabel>
                                
                                <TextField
                                    sx={{ width: '100%'  , '& .MuiInputBase-input': { padding: '6px' , width:'70%' , fontSize:'13px' , fontWeight:500 , display:'flex'} }}
                                    value={agent}
                                    onChange={handleAgentChange}
                                    select
                                    SelectProps={{multiple : true}}
                                >
                                        
                                        {AgentList.map((item ,i)=>(
                                                <MenuItem sx={{alignSelf:'flex-start' , fontSize:'13px' , fontWeight:500}} key={i} value={item.name}>
                                                    <Box sx={{display:'flex' ,gap:.5}}>
                                                        <Typography sx={{width:'20px' , height:'20px' , borderRadius:20 , backgroundColor:item.color , display:'flex' , alignItems:'center' , justifyContent:'center' , fontSize:'12px' , fontweight:800 , color:'white'}}>{item.name ? item.name[0] : null}</Typography>
                                                        {item.name}
                                                    </Box>
                                                </MenuItem>
                                        ))}
                                    
                                </TextField>
                            </Box>
                            <Box sx={{width:'50%'}}>
                                <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Next follow-up</FormLabel>
                                
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DesktopDateTimePicker 
                                        value={followup}
                                        onChange={(date)=>setFollowup(date)}
                                        sx={{width :'226px' ,'& .MuiInputBase-input': {padding: '6px',  fontSize:'13px' , fontWeight:500}}}/>
                                </LocalizationProvider>
                            </Box>
                        </Box>
                        <Box sx={{ width:'100%' , height:'200px'}}>
                            <AddLeadsText/>
                        </Box>  
                    </Box>
                    

                    <Box sx={{position:'sticky' , bottom:'0' , width:'100%' , right:0 , p:3 , bgcolor:'#4A515E'}}>
                        <Button type='submit' sx={{backgroundColor:"#EE3448" , color:'white' , px:5 , mr:3 , '&:hover': {bgcolor: '#EE4E44'}}}>Add Leads</Button> 
                        <Button sx={{backgroundColor:"transparent" , color:'white' , px:3 , border:'1px solid white' , '&:hover': {bgcolor: 'transparent'}}}>Cancel</Button> 
                    </Box>
                </FormControl>
            </Box>
        </Box>
    </>
  )
}

export default AddLeads
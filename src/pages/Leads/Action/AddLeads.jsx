import { Box, Button, InputLabel, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import cross from '../../../assets/cross2.png'
import AddLeadDropdown from '../../../components/AddLeadDropdown'
import plus from '../../../assets/Pluscircle.png'
import AddLeadsText from './AddLeadsText'

const AddLeads = ({addLeadToggle, setAddLeadToggle}) => {
    const [source , setSource] = useState('')
    const [purpose , setPurpose] = useState('')
    const [status , setStatus] = useState('')
    const [agent , setAgent]= useState([])

    const AgentList = [
        {name : 'Akhil Krishna' , color:'#867AFC'},
        {name : 'Ashwathi Ramesh' , color:'#31B6B5'},
        {name : 'Sharun das' , color:'#B4B631'}
    ]
    const sourceList = ['instagram', 'facebook','Telegram']
    const purposeList = ['Insurance', 'GetLead CRM','Telegram']
    const statusList = ['New', 'Intersted','Not Interested', 'Closed']
  return (
    <>
        <Box sx={{position:'fixed' , height:'100vh' , width : 'calc(100vw - 55px)',top:0 , right:0 , zIndex:'31px' , display:addLeadToggle?'flex':'none' , justifyContent:'flex-end' , alignItems:'center'}}>
            <Box sx={{width:'100%' , height:'100%' , backgroundColor:'rgba(0, 0, 0, 0.5)' , position:'absolute'}}></Box>

            <Box sx={{bgcolor:'white', position:'relative',zIndex:'40px', width:'500px' , height:'100%', padding:2}}>
                <Box sx={{display:'flex' , justifyContent:'space-between' , padding:'20px 0'}}>
                    <Typography variant='subtitle2'>Add Leads</Typography>
                    <Button sx={{ minWidth: '16px'}} onClick={()=>setAddLeadToggle(false)}>
                        <img src={cross} alt="" style={{width:'18px' , height:'18px'}}/>
                    </Button>
                </Box>
                
                <Box sx={{display:'flex', flexDirection:'column', gap:2}}>
                    <Box sx={{}}>
                        <InputLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Veteran’s name <Typography component="span" sx={{ color: 'red' }}>*</Typography></InputLabel>
                        <TextField sx={{width:'100%', '& .MuiInputBase-input': {padding: '6px',}}} />
                    </Box>
                    <Box sx={{display:'flex' , gap:2 , width:'100%'}}>
                        <Box sx={{width:'50%'}}>
                            <InputLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Phone Number<Typography component="span" sx={{ color: 'red' }}>*</Typography></InputLabel>
                            <Box sx={{display:'flex' , width:'100%',alignItems:'center', gap:1}}>
                                <TextField sx={{flexGrow:1, '& .MuiInputBase-input': {padding: '6px',}}} /> 
                                <img src={plus} alt="" style={{width:'18px', height:'18px'}}/>
                            </Box>
                        </Box>
                        <Box sx={{width:'50%'}}>
                            <InputLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Email </InputLabel>
                            
                            <Box sx={{display:'flex' , width:'100%',alignItems:'center' , gap:1}}>
                                <TextField sx={{flexGrow:1, '& .MuiInputBase-input': {padding: '6px',}}} /> 
                                <img src={plus} alt="" style={{width:'18px', height:'18px' }}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex' , gap:2 , width:'100%'}}>
                        <Box sx={{width:'50%'}}>
                            <InputLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Company</InputLabel>
                            <Box sx={{display:'flex' , width:'100%',alignItems:'center', gap:1}}>
                                <TextField sx={{flexGrow:1, '& .MuiInputBase-input': {padding: '6px',}}} /> 
                            </Box>
                        </Box>
                        <Box sx={{width:'50%'}}>
                            <InputLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Source </InputLabel>
                            
                            <Box sx={{display:'flex' , width:'100%',alignItems:'center' , gap:1}}>
                                <AddLeadDropdown name='' state={source} setState={setSource} menuList={sourceList}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex' , gap:2 , width:'100%'}}>
                        <Box sx={{width:'50%'}}>
                            <InputLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Purpose </InputLabel>
                            
                            <Box sx={{display:'flex' , width:'100%',alignItems:'center' , gap:1}}>
                                <AddLeadDropdown name='' state={purpose} setState={setPurpose} menuList={purposeList}/>
                            </Box>
                        </Box>
                        <Box sx={{width:'50%'}}>
                            <InputLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Status</InputLabel>
                            
                            <Box sx={{display:'flex' , width:'100%',alignItems:'center' , gap:1}}>
                                <AddLeadDropdown name='' state={status} setState={setStatus} menuList={statusList}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex' , gap:2 , width:'100%'}}>
                        <Box sx={{width:'50%'}}>
                            <InputLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Assigned to </InputLabel>
                            
                            <TextField
                                sx={{ width: '100%'  , '& .MuiInputBase-input': { padding: '6px' , width:'70%' , fontSize:'13px' , fontWeight:500 , display:'flex'} }}
                                value={agent}
                                onChange={(e)=>setAgent(e.target.value)}
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
                            <InputLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Next follow-up</InputLabel>
                            
                            <Box sx={{display:'flex' , width:'100%',alignItems:'center' , gap:1}}>
                                <AddLeadDropdown name='' state={status} setState={setStatus} menuList={statusList}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width:'100%'}}>
                        <AddLeadsText/>
                    </Box>


                    
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default AddLeads
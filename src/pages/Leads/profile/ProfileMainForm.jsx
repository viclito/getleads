import { Box, Button, FormControl, FormLabel, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddLeadDropdown from '../../../components/AddLeadDropdown'

const ProfileMainForm = () => {
    const [status , setStatus] = useState('')
    const [source , setSource] = useState('')
    const [agent , setAgent]= useState([])
    const [purpose , setPurpose]= useState('')
    const [type , setType]= useState('')
    const [additional , setAdditional]= useState('')

    const handleAgentChange = (event) => {
        setAgent(event.target.value)
    };
    const AgentList = [
        {name : 'Akhil Krishna' , color:'#867AFC'},
        {name : 'Ashwathi Ramesh' , color:'#31B6B5'},
        {name : 'Sharun das' , color:'#B4B631'}
    ]
    const statusList = ['Check Claim1' ,'Check Claim2' ,'Check Claim3' ]

    const handleSubmit = (e)=>{
        e.preventDefault()
        const data ={status,source ,purpose , type , agent ,additional}

        console.log(data);
    }
    
  return (
    <FormControl sx={{pb:3}} component="form" onSubmit={handleSubmit}>
        <FormLabel sx={{fontSize:'12px'}}>Status</FormLabel>
        <AddLeadDropdown name='' state={status} setState={setStatus} menuList={statusList} />

        <FormLabel sx={{fontSize:'12px' , pt:2}}>Lead Source</FormLabel>
        <TextField sx={{ flexGrow:1 , '& .MuiInputBase-input': {padding: '6px',  fontSize:'13px' , fontWeight:500}}}
            value={source} onChange={(e)=>setSource(e.target.value)}/>
        
        <FormLabel sx={{fontSize:'12px', pt:2}}>Assigned to</FormLabel>
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
        
        <FormLabel sx={{fontSize:'12px', pt:2}}>Lead Purpose</FormLabel>
        <AddLeadDropdown name='' state={purpose} setState={setPurpose} menuList={statusList} />
        
        <FormLabel sx={{fontSize:'12px', pt:2}}>Lead type</FormLabel>
        <AddLeadDropdown name='' state={type} setState={setType} menuList={statusList} />
        
        <FormLabel sx={{fontSize:'12px', pt:2}}>Additional field</FormLabel>
        <AddLeadDropdown name='' state={additional} setState={setAdditional} menuList={statusList} />

        <Button type='submit'  sx={{display:'flex' , alignSelf:'flex-end' , mt:2 , fontSize:'13px' , color:'#EE3448'}}>Done</Button>
        
    </FormControl>
  )
}

export default ProfileMainForm
import {  Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import cross from '../../../assets/cross.png'

const AssignedToAgents = ({assigntoogle , setAssigntoogle}) => {
    const [agent , setAgent]= useState([])

    const [filter , setFilter] = useState('')

    const AgentList = [
        {name : 'Akhil Krishna' , color:'#867AFC'},
        {name : 'Ashwathi Ramesh' , color:'#31B6B5'},
        {name : 'Sharun das' , color:'#B4B631'}
    ]



    const filteredAgents = AgentList.filter(agent => agent.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <>
        
       <Box sx={{position:'fixed' , height:'100vh' , width : 'calc(100vw - 55px)',top:0 , right:0 , zIndex:'31px' , display:assigntoogle?'flex':'none' , justifyContent:'center' , alignItems:'center'}}>
            <Box sx={{width:'100%' , height:'100%' , backgroundColor:'rgba(0, 0, 0, 0.5)' , position:'absolute'}}></Box>

            <Box sx={{p:2 , borderRadius:'5px' , zIndex:'40px' , bgcolor:'white' , position:'relative' , height:'310px' , display:'flex' , flexDirection:'column'}}>
                <Button sx={{position:'absolute', top:"12px" , right:'12px'  , minWidth: '16px'}} onClick={()=>setAssigntoogle(false)}>
                    <img src={cross} alt="" style={{width:'16px' , height:'16px'}}/>
                </Button>
                <Typography variant='subtitle2' sx={{textAlign:'center' , fontWeight:'600' , paddingBottom:'20px'}}>Assigned to Agent</Typography>
                <Typography variant='subtitle2' sx={{textAlign:'start' , fontSize:'12px' , fontWeight:'400'}}>Select Agent</Typography>

                

                    <TextField
                        sx={{ width: '230px'  , '& .MuiInputBase-input': { padding: '6px' , fontSize:'13px' , fontWeight:500 , display:'flex'} }}
                        value={agent}
                        onChange={(e)=>setAgent(e.target.value)}
                        select
                        SelectProps={{multiple : true}}
                    >
                        
                            <TextField
                                sx={{ width: '170px',margin:'auto', '& .MuiInputBase-input': { padding: '6px' } }}
                                value={filter}
                                onChange={(e)=>setFilter(e.target.value)}
                                >

                            </TextField>
                            
                            {filteredAgents.map((item ,i)=>(
                                    <MenuItem sx={{alignSelf:'flex-start' , fontSize:'13px' , fontWeight:500}} key={i} value={item.name}>
                                        <Box sx={{display:'flex' ,gap:.5}}>
                                            <Typography sx={{width:'20px' , height:'20px' , borderRadius:20 , backgroundColor:item.color , display:'flex' , alignItems:'center' , justifyContent:'center' , fontSize:'12px' , fontweight:800 , color:'white'}}>{item.name ? item.name[0] : null}</Typography>
                                            {item.name}
                                        </Box>
                                    </MenuItem>
                            ))}
                        
                    </TextField>
            <Button variant='contained' sx={{backgroundColor:"#EE3448" , fontSize:'13px' , textTransform:'inherit', alignSelf:'center', px:11, marginTop:18.5, fontWeight:400, '&:hover': {bgcolor: '#EE4E44'} }}>Assign</Button>
            
            
            </Box>



            
        </Box> 
    </>
  )
}

export default AssignedToAgents
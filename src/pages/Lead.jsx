import React, { useState } from 'react'
import Layout from '../components/Navbar'
import { Box, Button, ButtonGroup, IconButton, Paper, Typography } from '@mui/material'
import {Search , FilterAltOutlined} from '@mui/icons-material'
import { DownArrowSvg, HorLineSvg, LeadsImgOneSvg, LeadsImgThreeSvg, LeadsImgTwoSvg, ThreeDotSvg, VerLineSvg } from '../utils/Logos'
import LeadsList from '../components/LeadsList'
import LeadFilterData from './Leads/Action/LeadFilterData'
import AddData from './Leads/AddButton/AddButtonData'
import LeadActionData from './Leads/Action/LeadActionData'
import LeadThreeDots from './Leads/Action/LeadThreeDots'
import assignImg from '../assets/assignimg.png'
import AssignedToAgents from './Leads/Action/AssignedToAgents'
import AddLeads from './Leads/Action/AddLeads'

const Lead = () => {
  const [username ,  setUsername]= useState('Sharun Das')
  const [filter , setFilter]= useState(false)
  const [action , setAction]= useState(false)
  const [assigntoogle , setAssigntoogle]= useState(false)
  const [addLeadToggle , setAddLeadToggle]= useState(false)
  const [addButton , setAddButton]= useState(false)
  const [threeDot , setThreeDot]= useState(false)
    
  return (
    <Layout>
      <Box sx={{p:3 , position:'relative ' , width:"100%"}}>
        <Box sx={{display:'flex' , justifyContent:'center' , width:'100%'}}>
          <Box sx={{ display: 'flex', alignItems: 'center' , flexGrow:1}}>
              <Paper component="form" onSubmit={() => {}} sx={{ borderRadius: 10, boxShadow: 'none', border: '1px solid #C2C2C2', px: '10px' , margin:'auto' }}>
                  <IconButton type='submit' sx={{ py: '4px' }}>
                      <Search />
                  </IconButton>
                  <input placeholder='Search here' style={{ width: '250px', outline: 'none', border: 'none' }} />
              </Paper>
          </Box>

          <Box sx={{flexShrink: 0 , display:'flex', gap:2 , alignItems:'center'}}>
            <Box sx={{position:'relative'}}>
              <ButtonGroup variant="contained" aria-label="Add-buttons" onClick={()=>setAddButton(!addButton)} >
                <Button sx={{backgroundColor:"#EE3448" , '&:hover': {bgcolor: '#EE4E44'} }}>Add</Button>
                <Button sx={{backgroundColor:"#EE3448" , '&:hover': {bgcolor: '#EE4E44'} }}>+</Button>
              </ButtonGroup>
              <AddData addButton = {addButton}/>
            </Box>
            <IconButton sx={{border:'1px solid #c2c2c2'}}>
              <LeadsImgOneSvg/>
            </IconButton>
            <IconButton sx={{border:'1px solid #c2c2c2'}}>
              <LeadsImgTwoSvg/>
            </IconButton>
            <IconButton sx={{border:'1px solid #c2c2c2'}}>
              <LeadsImgThreeSvg/>
            </IconButton>
            <Typography variant='body2' sx={{display:'flex', alignItems:'center' , gap:'2px' , fontWeight:400 , fontSize:'12px'}}>{username} <DownArrowSvg/> </Typography>
          </Box>

        </Box>
        <Typography variant='subtitle2' sx={{pb:2}}>Leads</Typography>

        <Box sx={{display:'flex', justifyContent:'space-between' , alignItems:'center'}}>
          <Box sx={{display:'flex' , gap:2}}>
            <ButtonGroup variant='contained' >
              <Button sx={{backgroundColor:'transparent' ,p:'3px', '&:hover':{bgcolor:'transparent'}}}>
                <VerLineSvg color='#BFBCBC'/>
              </Button>
              <Button sx={{backgroundColor:'transparent' ,p:'3px', '&:hover':{bgcolor:'transparent'}}}>
                <HorLineSvg color='#117DE0'/>
              </Button>
            </ButtonGroup>

            <Box sx={{position:'relative'}}>
              <Button onClick={()=>setThreeDot(!threeDot)} variant='contained' sx={{backgroundColor:'transparent' ,p:'3px', minWidth:'40px', '&:hover':{bgcolor:'transparent'}}}>
                <ThreeDotSvg color='#8D8D8D'/>
              </Button>
              <LeadThreeDots threeDot={threeDot}/>
            </Box>

          </Box>

          <Box sx={{display:'flex' , gap:2}}>

            <Box sx={{position:'relative'}}>
              <Button onClick={()=>setAssigntoogle(true)} sx={{display:'flex' ,  color:'black', alignItems:'center', justifyContent:'space-between', width:'120px' , cursor:'pointer', borderRadius:'4px' , p:'10px' , textTransform:'inherit', backgroundColor:'#F9C847','&:hover':{backgroundColor:'#F9C847'}}}>
                <Typography variant='body1' sx={{fontWeight:500 ,display:'flex', alignItems:'center', fontSize:'13px'}}>
                  Assign to
                </Typography>
                <img src={assignImg} alt="" />
              </Button>
            </Box>
            
            <Box sx={{position:'relative'}}>
              <Button onClick={()=>setAction(!action)} sx={{display:'flex' ,  color:'black', alignItems:'center', justifyContent:'space-between', width:'120px',border:'1px solid black' , cursor:'pointer', borderRadius:'4px' , p:'10px' , textTransform:'inherit'}}>
                <Typography variant='body1' sx={{fontWeight:500 ,display:'flex', alignItems:'center', fontSize:'13px'}}>
                  Actions
                </Typography>
                <DownArrowSvg/>
              </Button>
              <LeadActionData action = {action}/>
            </Box>

            <Box sx={{position:'relative'}}>
              <Button onClick={()=>setFilter(!filter)} sx={{display:'flex' ,  color:'black', alignItems:'center', justifyContent:'space-between', width:'130px',border:'1px solid black' , cursor:'pointer', borderRadius:'4px' , p:'8px' , textTransform:'inherit'}}>
                <Typography variant='body1' sx={{fontWeight:500 ,display:'flex', alignItems:'center', fontSize:'13px'}}>
                  <FilterAltOutlined/> Filter
                </Typography>
                <DownArrowSvg/>

              </Button>
              <LeadFilterData filter={filter}/>
            </Box>

            <Paper component="form" onSubmit={() => {}} sx={{ borderRadius: '4px', boxShadow: 'none', border: '1px solid black', px:'12px', display:'flex' , alignItems:'center'}}>
              <input placeholder='Search here' style={{ width: '150px', outline: 'none', border: 'none' }} />
                <IconButton type='submit'>
                  <Search />
                </IconButton>
            </Paper>

            <Button onClick={()=>setAddLeadToggle(true)} variant='contained' sx={{backgroundColor:"#EE3448" , fontSize:'13px' , textTransform:'inherit' , fontWeight:400, '&:hover': {bgcolor: '#EE4E44'} }}>Add Lead</Button>

          </Box>
        </Box>

        {/* Lead Component */}

        <LeadsList/>


        <AssignedToAgents assigntoogle={assigntoogle} setAssigntoogle={setAssigntoogle}/>
        <AddLeads addLeadToggle={addLeadToggle} setAddLeadToggle={setAddLeadToggle}/>

      </Box>
    </Layout>
  )
}

export default Lead
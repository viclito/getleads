import { Box, Button, ButtonGroup, IconButton, Tab, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import cross from '../../../assets/cross2.png'
import { PlusSvg, ProfileCall2Svg, ProfileCallSvg, ProfileDeleteSvg, ProfileEditSvg, ProfileEmailSvg, ProfileMessageSvg } from '../../../utils/Logos'
import ProfileMainForm from './ProfileMainForm'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import ProfileActivity from './ProfileActivity'
import AddTask from './AddTask'
import AddLog1 from './AddLog1'
import AddLog2 from './AddLog2'
import AddLog3 from './AddLog3'
import AddLog4 from './AddLog4'
import AddLog5 from './AddLog5'
import AddDeal from './AddDeal'
import LogTimeline from './timeline/LogTimeline'
import { Activity } from '../../../utils/activity'
import { logs } from '../../../utils/log'
import { Task } from '../../../utils/task'
import { Deal } from '../../../utils/deal'
import TaskTimeline from './timeline/TaskTimeline'
import DealTimeline from './timeline/DealTimeline'


const Profile = ({ profileToggle , setProfileToggle , username}) => {
  const [value, setValue] =useState('1');
  const [activitys, setActivitys] =useState(10);
  const [ log, setLog] =useState(2);
  const [task, setTask] =useState(5);
  const [deal, setDeal] =useState(6);
  const [type , setType] = useState('')
  const [addDealToggle , setAddDealToggle] = useState(false)
  const [addTaskToggle , setAddTaskToggle] = useState(false)

  const activity = Activity.length
  useEffect(()=>{
    setActivitys(activity)
  } , [])
  const loglength = logs.length
  useEffect(()=>{
    setLog(loglength)
  } , [])
  const tasklength = Task.length
  useEffect(()=>{
    setTask(tasklength)
  } , [])
  const Deallength = Deal.length
  useEffect(()=>{
    setDeal(Deallength)
  } , [])

  const typeList = ['log a call' , 'log a note' ,'log a mail' ,'log a meeting' , 'log a file']

  const handleChange = (_e ,newValue) => {
    setValue(newValue);
  };

  const getInitials = (name)=>{
    const words = name.split(' ')

    let initial = ''

    for(let i = 0 ; i < words.length ; i++){
      initial += words[i][0]
    }
    return initial
  }

  const dealAmount = '5,02000'
  return (
    <>
      <Box sx={{position:'fixed' , height:'100vh', overflowY:'auto', width : 'calc(100vw - 55px)',top:0 , right:0 , zIndex:50 , display:profileToggle?'flex':'none' , justifyContent:'flex-end' , alignItems:'center'}}>
        <Box sx={{width:'100%' , height:'100%' , backgroundColor:'rgba(0, 0, 0, 0.5)' , position:'absolute'}}>
          <Box sx={{position:'absolute', top:"3px"  ,zIndex:40, left:'calc(10% - 30px)', height:'27px' , width:'27px' , bgcolor:'white' , borderRadius:'5px'}}>
              <IconButton sx={{p:0}} onClick={()=>setProfileToggle(false)}>
                <img src={cross} alt="" />
              </IconButton>
            </Box>
        </Box>

        <Box sx={{bgcolor:'white', overflowY:'auto', position:'relative',zIndex:'40px', width:'90%' , height:'100%' , display:'flex'}}>

            <Box sx={{width:'30%', bgcolor:'#F9F9F9', display:'flex' , height:'100%' , flexDirection:'column' , gap:1 , p:4 }}>
                <Box sx={{width:'55px' , height:'55px' , bgcolor:'#856EED' , display:'flex' , justifyContent:'center' , alignItems:'center', borderRadius:'3px'}}>
                  <Typography variant='h6' sx={{fontWeight:600 , color:'white' ,py:2}}>{getInitials(username)}</Typography>
                </Box>
                <Box>
                  <Typography variant='subtitle2' >{username}</Typography>
                  <Typography variant='body2' sx={{fontSize:'12px'}}>Getlead analytics Pvt. Ltd.</Typography>
                </Box>
                <Box sx={{display:'flex'}}>
                  <IconButton>
                    <ProfileEditSvg/>
                  </IconButton>
                  <IconButton>
                    <ProfileCallSvg/>
                  </IconButton>
                  <IconButton>
                    <ProfileMessageSvg/>
                  </IconButton>
                  <IconButton>
                    <ProfileCallSvg/>
                  </IconButton>
                  <IconButton>
                    <ProfileDeleteSvg/>
                  </IconButton>
                </Box>
                <Typography variant='subtitle2' sx={{fontSize:'13px'}}>Contact Info</Typography>
                <Box sx={{display:'flex' , gap:1 , alignItems:'center'}}>
                  <ProfileCall2Svg/>
                  <Typography variant='subtitle1' sx={{fontSize:'13px' , color:'#19232BCC'}}>+919774452786</Typography>
                </Box>
                <Box sx={{display:'flex' , gap:1 , alignItems:'center'}}>
                  <ProfileEmailSvg/>
                  <Typography variant='subtitle1' sx={{fontSize:'13px' , color:'#19232BCC'}}>Johndeo@monospear.com</Typography>
                </Box>
                <Box sx={{display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
                  <Typography variant='subtitle2' sx={{fontSize:'13px'}}>Deal</Typography>
                  <Button onClick={()=>setAddDealToggle(true)} sx={{display:'flex' , alignItems:'center' ,px:'6px' , border:'solid 2px #008D43' , borderRadius:'5px', fontSize:'12px' ,py:0 , color:'#008D43' ,gap:'3px'}}>
                      Add Deal <PlusSvg/>
                  </Button>
                </Box>
                <Box sx={{display:'flex', alignItems:'center'}}>
                  <Typography variant='subtitle2' sx={{fontSize:'13px' , fontWeight:400 , pr:1 , borderRight:'1px solid'}}>Total Deal : <span style={{color:'red'}}>02</span></Typography>
                  <Typography variant='subtitle2' sx={{fontSize:'13px' , fontWeight:400 , pl:1}}>Deal Amount: &#x20B9; {dealAmount} </Typography>  
                </Box>
                <Typography variant='subtitle2' sx={{fontSize:'13px'}}>More info</Typography>
                <ProfileMainForm/>

            </Box>

            <TabContext value={value}>
            <Box sx={{width:'70%', p:4 , position:'relative'}}>
                <Box sx={{display:'flex' , width:'100%' , justifyContent:'space-between' , position:'relative'}}>
                  <Box sx={{position:'absolute' , height:'1px' , bottom:0 , width:'100%' , bgcolor:'#DADADA'}}></Box>

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab sx={{fontWeight:600}} label={`ACTIVITY(${activitys})`} value="1" />
                        <Tab sx={{fontWeight:600}} label={`LOG NOTE(${log})`} value="2" />
                        <Tab sx={{fontWeight:600}} label={`TASK(${task})`} value="3" />
                        <Tab sx={{fontWeight:600}} label={`DEAL(${deal})`} value="4" />
                        <Tab sx={{fontWeight:600}} label={`ORDER`} value="5" />
                      </TabList>
                    </Box>
                    <Box sx={{position:'relative'}}>
                      <ButtonGroup variant="contained" aria-label="Add-buttons" onClick={()=>setAddTaskToggle(true)} >
                        <Button sx={{backgroundColor:"#EE3448" , '&:hover': {bgcolor: '#EE4E44'} }}>Add</Button>
                        <Button sx={{backgroundColor:"#EE3448" , '&:hover': {bgcolor: '#EE4E44'} }}>+</Button>
                      </ButtonGroup>
                    </Box>
                    
                </Box>
                <>
                  {/* {children} */}
                  <TabPanel value="1" sx={{pl:0}}>
                    <ProfileActivity/>
                  </TabPanel>
                  <TabPanel value="2" sx={{pl:0}}>
                    <LogTimeline/>
                  </TabPanel>
                  <TabPanel value="3" sx={{pl:0}}>
                    <TaskTimeline/>
                  </TabPanel>
                  <TabPanel value="4" sx={{pl:0}}>
                    <DealTimeline/>
                  </TabPanel>
                  <TabPanel value="5">Item five</TabPanel>
                </>

                
            </Box>
            </TabContext>
        </Box>


        <AddTask addTaskToggle={addTaskToggle} setAddTaskToggle={setAddTaskToggle} />
        {type === 'log a call' &&  <AddLog1 type={type}  setType={setType} typeList={typeList}/>}
        {type === 'log a note' &&  <AddLog2 type={type}  setType={setType} typeList={typeList}/>}
        {type === 'log a mail' &&  <AddLog3 type={type}  setType={setType} typeList={typeList}/>}
        {type === 'log a meeting' && <AddLog4 type={type}  setType={setType} typeList={typeList}/>}
        {type === 'log a file' && <AddLog5 type={type}  setType={setType} typeList={typeList}/>}

      </Box>
      <AddDeal addDealToggle={addDealToggle} setAddDealToggle={setAddDealToggle}/>
    </>
  )
}

export default Profile
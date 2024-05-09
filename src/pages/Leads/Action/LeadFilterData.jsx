import React, { useState } from 'react';
import { Box, Button, Paper,  Typography } from '@mui/material';
import LeadFilter from '../../../components/LeadFilter';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';


const LeadFilterData = ({ filter }) => {
    const [agent, setAgent] = useState('');
    const [stage , setStage] =useState('')
    const [status , setStatus] =useState('')
    const [type , setType] =useState('')
    const [source , setSource] =useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)


    const formattedStartDate = startDate ? dayjs(startDate).format('DD-MM-YYYY') : '';
    console.log(formattedStartDate);
    const formattedEndDate = endDate ? dayjs(endDate).format('DD-MM-YYYY') : '';
    console.log(formattedEndDate);


    const AgentList = ['hello', 'hi', 'hyeee'];
    const stageList = ['hello', 'hi', 'hyeee'];
    const statusList = ['hello', 'hi', 'hyeee'];
    const typeList = ['hello', 'hi', 'hyeee'];
    const sourceList = ['hello', 'hi', 'hyeee'];


    return (
        <Paper sx={{ position: 'absolute', zIndex:'40',backgroundColor:'white', top: 50, right: 0,  p: 3, boxShadow: '-1px -1px 1px #ccc , 1px 1px 1px #ccc', display: filter ? 'block' : 'none' }}>
            <Typography variant='subtitle2'>Filter leads</Typography>
            <Box sx={{ display: 'flex', gap: 2 , paddingTop:1 }}>
                <LeadFilter
                    state={agent}
                    setState={setAgent}
                    name='Agent:'
                    menuList={AgentList}
                />
                <LeadFilter
                    state={stage}
                    setState={setStage}
                    name='Stage:'
                    menuList={stageList}
                />
                <LeadFilter
                    state={status}
                    setState={setStatus}
                    name='status:'
                    menuList={statusList}
                />
                <LeadFilter
                    state={type}
                    setState={setType}
                    name='type:'
                    menuList={typeList}
                />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 , paddingTop:1 }}>
              <LeadFilter
                  state={source}
                  setState={setSource}
                  name='Source:'
                  menuList={sourceList}
              />
                <Box sx={{ display: 'flex', gap: '6px' , alignItems:'center' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker value={startDate}
                            onChange={(date)=>setStartDate(date)}
                            sx={{width :'166px' ,'& .MuiInputBase-input': {padding: '6px',}}}/>
                    </LocalizationProvider>

                    <Typography variant='subtitle2'>to</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DatePicker 
                            value={endDate}
                            onChange={(date)=>setEndDate(date)}
                            sx={{width :'166px' ,'& .MuiInputBase-input': {padding: '6px',}}}/>
                    </LocalizationProvider>
                </Box>

                <Button variant='contained' sx={{px:'28px', textTransform:'inherit '}}>Filter</Button>
                <Button variant='contained'sx={{px:'10px', textTransform:'inherit ', backgroundColor:'#C2C2C2' , '&:hover':{backgroundColor:'#C2C2C2'}}}>Clear</Button>
            </Box>
        </Paper>
    );
};

export default LeadFilterData;
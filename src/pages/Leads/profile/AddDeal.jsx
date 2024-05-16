import { Box, Button, FormControl, FormLabel, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import cross from '../../../assets/cross2.png'
import AddLeadDropdown from '../../../components/AddLeadDropdown'
import AddLeadsText from '../../../components/AddLeadsText'
import { DesktopDatePicker, DesktopDateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import DropDown from '../../../components/DropDown'

const AddDeal = ({addDealToggle, setAddDealToggle}) => {
    const [name , setName] = useState('')
    const [type , setType] = useState('')
    const [amount , setAmount] = useState('')
    const [currency , setCurrency] = useState('')
    const [startDate , setStartDate] = useState(null)
    const [endDate , setEndDate] = useState(null)
    const [status , setStatus] = useState('')
    const [agent , setAgent]= useState([])
    const [notify , setNotify]= useState([])


    const formattedStartDate = startDate ? dayjs(startDate).format('DD-MM-YYYY') : '';
    console.log(formattedStartDate);
    const formattedEndDate = endDate ? dayjs(endDate).format('DD-MM-YYYY') : '';
    console.log(formattedEndDate);

    const AgentList = [
        {name : 'Akhil Krishna' , color:'#867AFC'},
        {name : 'Ashwathi Ramesh' , color:'#31B6B5'},
        {name : 'Sharun das' , color:'#B4B631'}
    ]

    const statusList = ['New', 'Intersted','Not Interested', 'Closed']
    const typeList = ['sales' ,'sales' , 'Sales']
    const currencyList = ['INR' ,'USD' , 'Euro']

    const handleSubmit = (e)=>{
        e.preventDefault()
        const data ={name , type  ,formattedStartDate , currency ,amount  , status , agent ,notify ,formattedEndDate}

        console.log(data);
    }
  return (
    <>
        <Box sx={{position:'fixed' , height:'100vh' , width : 'calc(100vw - 55px)',top:0 , right:0 , zIndex:70 , display:addDealToggle?'flex':'none' , justifyContent:'flex-end' , alignItems:'center'}}>
            <Box sx={{width:'100%' , height:'100%' , backgroundColor:'rgba(0, 0, 0, 0.5)' , position:'absolute'}}></Box>

            <Box sx={{bgcolor:'white', position:'relative',zIndex:'40px', width:'500px' , height:'100%', overflowY:'auto'}}>
                <Box sx={{display:'flex' , justifyContent:'space-between' , padding:'20px 16px'}}>
                    <Typography variant='subtitle2'>Add Leads</Typography>
                    <Button sx={{ minWidth: '16px'}} onClick={()=>setAddDealToggle(false)}>
                        <img src={cross} alt="" style={{width:'18px' , height:'18px'}}/>
                    </Button>
                </Box>

                <FormControl component="form" onSubmit={handleSubmit} sx={{width:'100%' }}>
                    <Box sx={{display:'flex', flexDirection:'column', gap:2 , padding:2}}>
                        <Box sx={{}}>
                            <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Deal name <Typography component="span" sx={{ color: 'red' }}>*</Typography></FormLabel>
                            <TextField sx={{width:'100%', '& .MuiInputBase-input': {padding: '6px', fontSize:'13px' , fontWeight:500}}} value={name} onChange={(e)=>setName(e.target.value)}/>
                        </Box>
                        <Box sx={{display:'flex' , gap:2 , width:'100%'}}>
                            <Box sx={{width:'50%' , display:'flex' , flexDirection:'column'}}>
                                <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Deal Status<Typography component="span" sx={{ color: 'red' }}>*</Typography></FormLabel>
                                <AddLeadDropdown name='' state={status} setState={setStatus} menuList={statusList} />
                            </Box>
                            <Box sx={{width:'50%', display:'flex' , flexDirection:'column'}}>
                                <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Deal Type <Typography component="span" sx={{ color: 'red' }}>*</Typography> </FormLabel>                   
                                <AddLeadDropdown name='' state={type} setState={setType} menuList={typeList} />
                            </Box>
                        </Box>
                        <Box sx={{display:'flex' , gap:2 , width:'100%'}}>
                            <Box sx={{width:'50%', display:'flex' , flexDirection:'column'}}>
                                <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Select Currency <Typography component="span" sx={{ color: 'red' }}>*</Typography> </FormLabel>                   
                                <AddLeadDropdown name='' state={currency} setState={setCurrency} menuList={currencyList} />
                            </Box>
                            <Box sx={{width:'50%',  display:'flex' , flexDirection:'column'}}>
                                <FormLabel sx={{color:'black' , fontSize:'13px', marginBottom:.5}}>Deal Amount <Typography component="span" sx={{ color: 'red' }}>*</Typography> </FormLabel>         
                                <TextField sx={{width:'100%', '& .MuiInputBase-input': {padding: '8px', fontSize:'13px' , fontWeight:500}}} value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                            <Box sx={{ width: '50%' }}>
                                <FormLabel sx={{ color: 'black', fontSize: '13px', marginBottom: .5 }}>Start Date</FormLabel>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DesktopDatePicker
                                        value={startDate}
                                        onChange={(newDate) => setEndDate(newDate)}
                                        sx={{ width: '100%', '& .MuiInputBase-input': { padding: '8px', fontSize: '13px', fontWeight: 500 } , '& svg': { fontSize: '15px' } }}
                                    />
                                </LocalizationProvider>
                            </Box>
                            <Box sx={{ width: '50%' }}>
                                <FormLabel sx={{ color: 'black', fontSize: '13px', marginBottom: .5 }}>End Date</FormLabel>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DesktopDatePicker
                                        value={endDate}
                                        onChange={(Date) => setStartDate(Date)}
                                        sx={{ width: '100%', '& .MuiInputBase-input': { padding: '8px', fontSize: '13px', fontWeight: 500 } , '& svg': { fontSize: '15px' } }}
                                    />
                                </LocalizationProvider>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex' , gap:2 , width:'100%'}}>
                            <Box sx={{width:'50%'}}>
                                <DropDown setTrue={true} name='Assign to'  state={agent}  setState={setAgent}  menuList={AgentList}/>
                            </Box>
                            <Box sx={{width:'50%'}}>
                                
                                <DropDown setTrue={true} name='When deal close, notify'  state={notify}  setState={setNotify}  menuList={AgentList}/>
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

export default AddDeal
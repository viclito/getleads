import { Box, Button, Checkbox, Typography } from '@mui/material'
import React, { useState } from 'react'
import { HorThreeDotSvg, PlusSvg } from '../utils/Logos'
import LeadThreeHorDot from '../pages/Leads/Action/LeadThreeHorDot'

const LeadsListData = ({data}) => {
    const {name , Number , Purpose , Assigned , Status , Next } = data
    const colors = ['#867AFC' , '#31B6B5' , '#B4B631']
    const randomColor =(color)=>{
         const value = Math.floor(Math.random()*color.length)
        return color[value]
    }
    const selectedColor = randomColor(colors)

    const [edit , setEdit] = useState(false)

  return (
    <>
        <Box sx={{display:'grid' , gridTemplateColumns:'3fr 3fr 3fr 3fr 3fr 3fr 1fr' , border:'1px solid #DDDEDF' , borderTop:'0px solid ' , position:'relative' , zIndex:'20px'}}>
            <Box sx={{p:1.5 , display:'flex', gap:1 , borderRight:'1px solid #DDDEDF'}}>
                <Checkbox sx={{p:0 , color:'#DDDEDF' }} inputProps={{ 'aria-label': 'Checkbox' }} />
                <Typography variant='subtitle2' >{name}</Typography>
            </Box>
            <Box sx={{p:1.5 , display:'flex', gap:1 , borderRight:'1px solid #DDDEDF'}}>
                <Typography variant='subtitle2' >{Number}</Typography>
            </Box>
            <Box sx={{p:1.5 , display:'flex', gap:1 , borderRight:'1px solid #DDDEDF'}}>
                <Typography variant='subtitle2' >{Purpose}</Typography>
            </Box>
            <Box sx={{p:1.5 , display:'flex', gap:1 , alignItems:'center' , borderRight:'1px solid #DDDEDF'}}>
                <Typography sx={{width:'20px' , height:'20px' , borderRadius:20 , backgroundColor:selectedColor , display:'flex' , alignItems:'center' , justifyContent:'center' , fontSize:'12px' , fontweight:800 , color:'white'}}>{Assigned ? Assigned[0] : null}</Typography>
                <Typography variant='subtitle2' >{Assigned}</Typography>
            </Box>
            <Box sx={{p:1.5 , display:'flex', gap:1 , alignItems:'center' , borderRight:'1px solid #DDDEDF'}}>
                <div style={{display:'flex', justifyContent:'center' , alignItems:'center', width:'fit-content' }}>
                    {Status === 'New' && <Typography variant='subtitle2' sx={{backgroundColor:'#867AFC', px:'6px' , color:'white' , borderRadius:'3px'}}>{Status}</Typography>}
                    {Status === 'Interested' && <Typography variant='subtitle2' sx={{backgroundColor:'#5F9EEE', px:'6px' , color:'white', borderRadius:'3px'}}>{Status}</Typography>}
                    {Status === 'Not interested' && <Typography variant='subtitle2' sx={{backgroundColor:'#EF4C5D', px:'6px' , color:'white', borderRadius:'3px'}}>{Status}</Typography>}
                    {Status === 'Closed' && <Typography variant='subtitle2' sx={{backgroundColor:'#3DC17B', px:'6px' , color:'white', borderRadius:'3px'}}>{Status}</Typography>}
                </div>
            </Box>

            <Box sx={{p:1.5 , display:'flex', gap:1 , alignItems:'center' , borderRight:'1px solid #DDDEDF'}}>
                {Next ? <Typography variant='subtitle2'>{Next}</Typography> : 
                        <Typography variant='subtitle2' sx={{display:'flex' , alignItems:'center' ,px:'6px' , border:'solid 2px #008D43' , borderRadius:'5px' ,py:0 , color:'#008D43' ,gap:'3px'}}>
                            Add <PlusSvg/>
                        </Typography>}
            </Box>
            <Box sx={{position:'relative' , display:'flex' , alignItems:'center' , justifyContent:'center' }}>
                <Button onClick={()=>setEdit(!edit)} disableRipple sx={{p:1.5 , display:'flex', gap:1 , alignItems:'center' , justifyContent:'center'}}>
                    <HorThreeDotSvg/>
                </Button>
                <LeadThreeHorDot edit ={edit}/>
                
            </Box>
        </Box>
    </>
  )
}

export default LeadsListData
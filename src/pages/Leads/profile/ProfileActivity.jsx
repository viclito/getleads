import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CheckboxSvg } from '../../../utils/Logos'
import ActivityTimeline from './timeline/ActivityTimeline'

const ProfileActivity = () => {

    const [ isChecked , setIsChecked]= useState([])
    const [toggleChecked , setToggleChecked] = useState(false)
    const handleCheckboxChange = (event) => {
        const value = event.target.name;
        setIsChecked((prev) => 
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const checkboxLogList = ['Note' , 'Call' , 'Email', 'Meeting' ]
    const checkboxTaskList = ['Call ', 'Meeting ' ]

  return (
    <Box sx={{position:'relative' , }}>
        <Button onClick={()=>setToggleChecked(!toggleChecked)} sx={{position:'absolute' , top:'-16px' , right:0 , display:'flex' , textTransform:'inherit' ,'&:hover': {bgcolor: 'transparent'}}} disableRipple>
            <Typography variant='subtitle2' sx={{fontWeight:400}}>filter by : <span style={{color:'#3E9FD7' , fontWeight:600}}>All Activity</span></Typography>
        </Button>
        <Box sx={{display:toggleChecked ? 'flex':'none' , gap:2 , position:'absolute' , p:2 , top:'18px' , right:0 , boxShadow:'0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);'}}>
            <FormControl>
                <FormLabel><Typography variant='h6' sx={{fontSize:'15px'}}>Log</Typography></FormLabel>
            {checkboxLogList.map((item) =>(
                <FormControlLabel
                        sx={{fontSize:'12px'}}
                        label={item}
                        control={
                            <Checkbox
                                
                                name={item}
                                checked={isChecked.includes(item)}
                                onChange={handleCheckboxChange}
                                checkedIcon={<CheckboxSvg color='#34BFA3'/>}
                                icon={<CheckboxSvg second='#C6D9E7'/>}
                            />
                        }
                    />
            
            ))}
            </FormControl>
            <FormControl>
                <FormLabel><Typography variant='h6' sx={{fontSize:'15px'}}>Task</Typography></FormLabel>
            {checkboxTaskList.map((item) =>(
                <FormControlLabel
                        label={item}
                        control={
                            <Checkbox
                                name={item}
                                checked={isChecked.includes(item)}
                                onChange={handleCheckboxChange}
                                checkedIcon={<CheckboxSvg color='#34BFA3'/>}
                                icon={<CheckboxSvg second='#C6D9E7'/>}
                            />
                        }
                    />
            
            ))}
            </FormControl>
        </Box>

        <Box>
            <ActivityTimeline/>
        </Box>
    </Box>
  )
}

export default ProfileActivity
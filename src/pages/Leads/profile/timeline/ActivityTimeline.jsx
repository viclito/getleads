import { Box, Typography } from '@mui/material'
import React from 'react'
import TimelineComponent from '../../../../components/TimelineComponent'
import { Activity } from '../../../../utils/activity'
import { TickBoxSvg } from '../../../../utils/Logos'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import note from '../../../../assets/note.png'
import log from '../../../../assets/log.png'
import task from '../../../../assets/task.png'
import deal from '../../../../assets/deal.png'
import status from '../../../../assets/status.png'

const ActivityTimeline = () => {
    const getImage = (type) => {
        switch (type) {
          case 'Note':
            return note;
          case 'Call log ':
            return log;
          case 'Call task':
          case 'Meeting log':
            return task;
          case 'Deal':
            return deal;
          case 'Status':
            return status;
          default:
            return null;
        }
      };
  return (
    <Box>
    {Activity.map((item)=>{
        return <TimelineComponent key={item.id} image={getImage(item.type)}>
            <Box sx={{p:2 , bgcolor:'#F9F9F9' , borderRadius:'5px'}}>
                <Box sx={{display:'flex' , gap:1 , alignItems:'center'}}>
                    {['Completed', 'Pending'].includes(item.status) && <TickBoxSvg color={item.status === 'Completed'?'#2BA17B':'#C1C1C1'}/>}
                    <Box >
                        <Typography variant='subtitle2' sx={{fontSize:'13px' ,fontWeight:600}}>
                            {item.name}<span style={{fontWeight:400}}>{item.verb}{item.type === 'Status' || 'Lead' ? ' the ' :' a '}</span>{item.type}
                        </Typography>
                        <Typography variant='subtitle1' sx={{fontSize:'12px' , color:'#808080'}}>
                            {item.time}
                        </Typography>
                    </Box>
                </Box>
                {item.task && <Box sx={{display:'flex' , alignItems:'center'}}>
                    <Typography variant='subtitle1' sx={{color:'#707178',fontSize:'13px' , fontWeight:400 }}>Task : </Typography><Typography variant='subtitle1' sx={{fontSize:'13px' , lineHeight:1.4 , fontWeight:500 ,textDecoration:item.status === 'Completed' ? 'line-through':'none'}}>{item.task}</Typography>
                    </Box>}
                {item.assignedto && <Typography variant='subtitle1' sx={{fontSize:'13px' , lineHeight:1.4 , fontWeight:500}}><span style={{color:'#707178',fontWeight:400}}>Assigned To : </span>{item.assignedto}</Typography>}
                {item.content && <Typography variant='subtitle1' sx={{fontSize:'12.5px', pb:'3px' , lineHeight:1.4 ,textDecoration:item.status === 'Completed' ? 'line-through':'none'}}>{item.content}</Typography>}
                {item.note && <Typography variant='subtitle1' sx={{fontSize:'13px' , lineHeight:1.4 , fontWeight:500}}><span style={{color:'#707178',fontWeight:400}}>Note : </span>{item.note}</Typography>}
                {item.outcome && <Typography variant='subtitle1' sx={{fontSize:'13px' , lineHeight:1.4 , fontWeight:500}}><span style={{color:'#707178',fontWeight:400}}>outcome : </span>{item.outcome}</Typography>}
                {item.date && <Typography variant='subtitle1' sx={{fontSize:'13px' , lineHeight:1.4 , fontWeight:500 , color:'#3A6685'}}><span style={{color:'#707178',fontWeight:400}}>Date : </span>{item.date}</Typography>}
                {item.dealname && <Typography variant='subtitle1' sx={{fontSize:'13px' , lineHeight:1.4 , fontWeight:500 }}><span style={{color:'#707178',fontWeight:400}}>Deal name : </span>{item.dealname}</Typography>}
                {item.amount && <Typography variant='subtitle1' sx={{fontSize:'13px' , lineHeight:1.4 , fontWeight:500}}><span style={{color:'#707178',fontWeight:400}}>Amount : </span>&#8377;{item.amount}</Typography>}
                {item.Status && <Typography variant='subtitle1' sx={{fontSize:'13px' , lineHeight:1.4 , fontWeight:500 }}><span style={{color:'#707178',fontWeight:400}}>Status : </span>{item.Status}</Typography>}
                {item.enddate && <Typography variant='subtitle1' sx={{fontSize:'13px' , lineHeight:1.4 , fontWeight:500 , color:'#3A6685'}}><span style={{color:'#707178',fontWeight:400}}>End Date : </span>{item.enddate}</Typography>}
                {item.updatefrom && <Typography variant='subtitle1' sx={{fontSize:'13px' , lineHeight:1.4 , fontWeight:500}}><span style={{color:'#707178',fontWeight:400}}>Changed Status from </span>{item.updatefrom} to {item.updateto}</Typography>}
                {item.scheduled &&
                <Box sx={{display:'flex', gap:'2px', py:'5px' }}>
                    <CalendarTodayIcon sx={{fontSize:'13px', color:'#808080'}}/>
                    <Typography variant='subtitle1' sx={{fontSize:'13px' , lineHeight:1.4 , fontWeight:500 , pr:'12px' , borderRight:'1px solid #707178' , color:'#3A6685'}}><span style={{color:'#707178',fontWeight:400}}>scheduled Date : </span>{item.scheduled}</Typography>
                    <Typography variant='subtitle1' sx={{fontSize:'13px' , lineHeight:1.4 , fontWeight:500 , pl:'12px'  , color: item.status === 'Completed' ?'#008D43':'#F2994A'}}><span style={{color:'#707178',fontWeight:400}}>Status : </span>{item.status}</Typography>
                </Box>
                }
            </Box>
        </TimelineComponent>
       })}
    </Box>
  )
}

export default ActivityTimeline
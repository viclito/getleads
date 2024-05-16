import React from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'

const TimelineComponent = ({children , image}) => {
  return (
    <div>
        <Timeline sx={{p:0}}>
            <TimelineItem sx={{'&::before':{msFlex: 0,flex:0 ,p:0}}}>
                <TimelineSeparator sx={{justifyContent:'center'}}>
                    <TimelineDot sx={{m:0 , p:0 , alignSelf:'center' , justifySelf:'center' , position:'absolute' , bgcolor:'white'}}>
                      <img src={image} alt="" />
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>{children}</TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
  )
}

export default TimelineComponent
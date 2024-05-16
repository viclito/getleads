import React from 'react'
import { Timeline, TimelineContent,  TimelineItem } from '@mui/lab'

const TimelineComponentNoDot = ({children }) => {
  return (
    <div>
        <Timeline sx={{p:0}}>
            <TimelineItem sx={{'&::before':{msFlex: 0,flex:0 ,p:0}}}>
                <TimelineContent>{children}</TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
  )
}

export default TimelineComponentNoDot
import { Box, Checkbox, Pagination, Typography } from '@mui/material'
import React, { useState } from 'react'
import LeadsListData from './LeadsListData'

const LeadsList = () => {

    const [currentPage , setCurrentPage]=useState(1)
    const handleChange =(_e,p)=>{
        setCurrentPage(p)
    }
    console.log(currentPage);
    const startList = currentPage * 10 - 10
    const endList = currentPage *10 
    const totalList = 250
    const PaginationLength = Math.floor(totalList / 10) 

    const leadDetails = [
        {
            name:'John Deo',
            Number:9023323453,
            Purpose:'Getlead CRM', 
            Assigned : 'Sharundas',
            Status:'New',
            Next:''
        },
        {
            name:'Sharun das',
            Number:9023323453,
            Purpose:'Gdesk', 
            Assigned : 'Sumisha',
            Status:'Interested',
            Next:'25 Dec 2023 , 10:00pm'
        },
        {
            name:'John Deo',
            Number:9023323453,
            Purpose:'Getlead CRM', 
            Assigned : 'Sharundas',
            Status:'Not interested',
            Next:''
        },
        {
            name:'Sharun das',
            Number:9023323453,
            Purpose:'Gdesk', 
            Assigned : 'Sumisha',
            Status:'Closed',
            Next:'25 Dec 2023 , 10:00pm'
        },
        {
            name:'John Deo',
            Number:9023323453,
            Purpose:'Getlead CRM', 
            Assigned : 'Sharundas',
            Status:'New',
            Next:''
        },
        {
            name:'Sharun das',
            Number:9023323453,
            Purpose:'Gdesk', 
            Assigned : 'Sumisha',
            Status:'Interested',
            Next:'25 Dec 2023 , 10:00pm'
        },
        {
            name:'John Deo',
            Number:9023323453,
            Purpose:'Getlead CRM', 
            Assigned : 'Sharundas',
            Status:'Not interested',
            Next:''
        },
        {
            name:'Sharun das',
            Number:9023323453,
            Purpose:'Gdesk', 
            Assigned : 'Sumisha',
            Status:'Closed',
            Next:'25 Dec 2023 , 10:00pm'
        },
        // {
        //     name:'John Deo',
        //     Number:9023323453,
        //     Purpose:'Getlead CRM', 
        //     Assigned : 'Sharundas',
        //     Status:'Not interested',
        //     Next:''
        // },
        // {
        //     name:'Sharun das',
        //     Number:9023323453,
        //     Purpose:'Gdesk', 
        //     Assigned : 'Sumisha',
        //     Status:'Closed',
        //     Next:'25 Dec 2023 , 10:00pm'
        // }
    ]
  return (
    <>
        <Box sx={{display:'grid', gridTemplateColumns:'3fr 3fr 3fr 3fr 3fr 3fr 1fr' , backgroundColor:'#273045' , borderTopLeftRadius:'5px', borderTopRightRadius:'5px' , marginTop:2}}>
            <Box sx={{p:1.5 , display:'flex', gap:1}}>
                <Checkbox sx={{p:0 , color:'#DDDEDF' }} inputProps={{ 'aria-label': 'Checkbox' }} />
                <Typography variant='subtitle2' sx={{color:'white'}}>Lead name</Typography>
            </Box>
            <Box sx={{p:1.5}}>
                <Typography variant='subtitle2' sx={{color:'white'}}>Contact number</Typography>
            </Box>
            <Box sx={{p:1.5}}>
                <Typography variant='subtitle2' sx={{color:'white'}}>Purpose</Typography>
            </Box>
            <Box sx={{p:1.5}}>
                <Typography variant='subtitle2' sx={{color:'white'}}>Assigned to</Typography>
            </Box>
            <Box sx={{p:1.5}}>
                <Typography variant='subtitle2' sx={{color:'white'}}>Status</Typography>
            </Box>
            <Box sx={{p:1.5}}>
                <Typography variant='subtitle2' sx={{color:'white'}}>Next follow-up</Typography>
            </Box>
            <Box sx={{p:1.5}}>
                <Typography variant='subtitle2' sx={{color:'white'}}>Action</Typography>
            </Box>
            
        </Box>

        <Box>
            {leadDetails.map((data)=>{
                return <>
                    <LeadsListData data={data}/>
                </>
            })}
            
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between' , paddingTop:2}}>
            <Typography sx={{color:'#19232B99'}}>Showing {startList} to {endList} of {totalList} </Typography>
            <Pagination onChange={handleChange} sx={{'& .MuiPaginationItem-root':{borderRadius:0 , padding:1 , bgcolor:'#F0F2F6' , '& .Mui-selected': { bgcolor: '#95AFBC' }}}}  count={PaginationLength}></Pagination>
        </Box>
        
    </>
  )
}

export default LeadsList
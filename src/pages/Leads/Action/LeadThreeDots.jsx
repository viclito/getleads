import { Paper } from '@mui/material'
import React from 'react'
import AddButton from '../../../components/AddButton'
import imports from '../../../assets/import.png'
import bulkassign from '../../../assets/bulkassign.png'
import exports from '../../../assets/export.png'

const LeadThreeDots = ({threeDot}) => {
    const Data = [
        {img : imports , name : 'Import leads'},
        {img : bulkassign , name : 'Bulk assign'},
        {img : exports , name : 'Export all'},
    ]
  return (
    <>
        <Paper sx={{ position: 'absolute', width:'190px', zIndex:'30', top: 50, left: 0,  p: 3, boxShadow: '-1px -1px 1px #ccc , 1px 1px 1px #ccc', display: threeDot ? 'flex' : 'none' , flexDirection:'column' , gap:1.5 }}>
            {Data.map((item)=>{
                return <>
                    <AddButton 
                        img = {item.img}
                        name={item.name}
                    />
                </>
            })}
        </Paper>      
    </>
  )
}

export default LeadThreeDots
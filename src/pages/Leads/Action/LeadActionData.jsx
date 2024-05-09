import { Paper } from '@mui/material'
import React from 'react'
import bulk from '../../../assets/bulk.png'
import update from '../../../assets/update.png'
import add from '../../../assets/add.png'
import create from '../../../assets/create.png'
import LeadAction from '../../../components/LeadAction'

const LeadActionData = ({action}) => {

    const Data = [
        {img : bulk , name : 'Bulk Update'},
        {img : update , name : 'Update status'},
        {img : add , name : 'Add to campaign'},
        {img : create , name : 'Create call task'}
    ]
  return (
    <>
        <Paper sx={{ position: 'absolute', width:'190px',zIndex:34, top: 50, right: 0,  p: 3, boxShadow: '-1px -1px 1px #ccc , 1px 1px 1px #ccc', display: action ? 'flex' : 'none' , flexDirection:'column' , gap:1.5 }}>
            {Data.map((item)=>{
                return <>
                    <LeadAction 
                        img = {item.img}
                        name={item.name}
                    />
                </>
            })}
        </Paper>      
    </>
  )
}

export default LeadActionData
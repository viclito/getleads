import lead from '../../../assets/lead.png'
import deal from '../../../assets/deal.png'
import campaign from '../../../assets/campaign.png'
import task from '../../../assets/task.png'
import { Paper } from '@mui/material'
import AddButton from '../../../components/AddButton'

const AddData = ({addButton}) => {

    const Data = [
        {img : lead , name : 'Lead'},
        {img : deal , name : 'Deal'},
        {img : campaign , name : 'Campaign'},
        {img : task , name : 'Task'}
    ]
  return (
    <>
        <Paper sx={{ position: 'absolute', width:'190px', zIndex:'30', top: 50, right: 0,  p: 3, boxShadow: '-1px -1px 1px #ccc , 1px 1px 1px #ccc', display: addButton ? 'flex' : 'none' , flexDirection:'column' , gap:1.5 }}>
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
export default AddData
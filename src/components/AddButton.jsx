import { Box, Typography } from "@mui/material"


const AddButton = ({img , name}) => {
    return (
      <>
          <Box sx={{display:'flex' , gap:1.5 }}>
              <img src={img} alt=""  style={{width:'22px' , height:'22px'}}/>
              <Typography variant='subtitle2'>{name}</Typography>
          </Box>
      </>
    )
  }

export default AddButton
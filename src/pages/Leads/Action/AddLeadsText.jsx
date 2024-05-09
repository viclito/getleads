import { Box, Button, TextField, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'

import { styled } from '@mui/system';
import B from '../../../assets/textimg/B.png'
import I from '../../../assets/textimg/I.png'
import U from '../../../assets/textimg/U.png'
import erase from '../../../assets/textimg/erase.png'
import S from '../../../assets/textimg/S.png'
import X1 from '../../../assets/textimg/x1.png'
import X2 from '../../../assets/textimg/x2.png'
import dotlist from '../../../assets/textimg/dotlist.png'
import numlist from '../../../assets/textimg/numlist.png'
import align from '../../../assets/textimg/align.png'

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    maxHeight: '100px',
    overflowY: 'scroll',
  },
  '&::-webkit-scrollbar': {
    width: '2px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.background.paper,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '20px',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
const theme = createTheme();

const AddLeadsText = () => {
    const [text, setText] = useState('');
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{border:'1px solid #ccc', display:'flex' ,justifyContent:'space-between'}}>
            <Button sx={{p:2 , minWidth:'20px'}}>
                <img src={B} alt="" />
            </Button>
            <Button sx={{p:2 , minWidth:'20px'}}>
                <img src={I} alt="" />
            </Button>
            <Button sx={{p:2 , minWidth:'20px'}}>
                <img src={U} alt="" />
            </Button>
            <Button sx={{p:2 , minWidth:'20px'}}>
                <img src={erase} alt="" />
            </Button>
        </Box>

        <Box sx={{display:'flex' , flexDirection:'column'}}>
            <CustomTextField
                multiline
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                sx={{height: '100px', overflowY: 'scroll','& .css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root':{p:'6px'},'& .MuiInputBase-input': { padding: '2px' , fontSize:'13px' , fontWeight:500}}}
            />
        </Box>
    </ThemeProvider>
  )
}

export default AddLeadsText
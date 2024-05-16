import { Box, Button, TextField, ThemeProvider, createTheme } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/system';
import B from '../assets/textimg/B.png';
import I from '../assets/textimg/I.png';
import U from '../assets/textimg/U.png';
import erase from '../assets/textimg/erase.png';
import S from '../assets/textimg/S.png';
import X1 from '../assets/textimg/x1.png';
import X2 from '../assets/textimg/x2.png';
import dotlist from '../assets/textimg/dotlist.png';
import numlist from '../assets/textimg/numlist.png';
import alignleft from '../assets/textimg/align.png';
import aligncenter from '../assets/textimg/aligncenter.png';
import alignright from '../assets/textimg/align-right.png';
import downarrow from '../assets/textimg/downarrow.png';

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    maxHeight: '80px',
    overflowY: 'scroll',
  },
  '& .MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-input': {
      padding: '2px',
  
    },
  },
  '& .MuiInputBase-inputMultiline': {
    padding: '2px',
  },
  '&::-webkit-scrollbar': {
    width: '2px',
    opacity:0
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
  const [size, setSize] = useState(13);
  const [align, setAlign] = useState('left');
  const [numToggle, setNumToggle] = useState(false);
  const [alignToggle, setAlignToggle] = useState(false);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  const numbers = [...Array(20)].map((_, i) => i);
  const alignImages = {
    left: alignleft,
    center: aligncenter,
    right: alignright,
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ border: '1px solid #ccc', display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={() => setBold(!bold)}
          sx={{
            p: '15px',
            minWidth: '20px',
            borderRadius: '1px',
            backgroundColor: bold ? '#ccdbe2' : '',
            '&:hover': {
              backgroundColor: bold ? '#ccdbe2' : '',
            },
          }}
        >
          <img src={B} alt="" />
        </Button>

        <Button
          onClick={() => setItalic(!italic)}
          sx={{
            p: '15px',
            minWidth: '20px',
            borderRadius: '1px',
            backgroundColor: italic ? '#ccdbe2' : '',
            '&:hover': {
              backgroundColor: italic ? '#ccdbe2' : '',
            },
          }}
        >
          <img src={I} alt="" />
        </Button>
        <Button
          onClick={() => setUnderline(!underline)}
          sx={{
            p: '15px',
            minWidth: '20px',
            borderRadius: '1px',
            backgroundColor: underline ? '#ccdbe2' : '',
            '&:hover': {
              backgroundColor: underline ? '#ccdbe2' : '',
            },
          }}
        >
          <img src={U} alt="" />
        </Button>
        <Button onClick={() => setText('')} sx={{ p: '15px', minWidth: '20px' }}>
          <img src={erase} alt="" />
        </Button>
        <Button sx={{ p: '15px', minWidth: '20px' }}>
          <img src={S} alt="" />
        </Button>
        <Button sx={{ p: '15px', minWidth: '20px' }}>
          <img src={X1} alt="" />
        </Button>
        <Button sx={{ p: '15px', minWidth: '20px' }}>
          <img src={X2} alt="" />
        </Button>

        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Button
            sx={{ px: '10px', py: '12px', minWidth: '20px', color: 'black', fontSize: '12px' }}
            onClick={() => setNumToggle(!numToggle)}
          >
            {size}
            <img src={downarrow} alt="" />
          </Button>
          <Box
            sx={{
              position: 'absolute',
              zIndex: 60,
              display: numToggle ? 'flex' : 'none',
              flexDirection: 'column',
              height: '300px',
              overflow: 'scroll',
              left: '50px',
            }}
          >
            {numbers.map((num) => (
              <Button
                key={num}
                value={num + 10}
                onClick={(e) => {
                  setSize(parseInt(e.target.value, 10));
                  setNumToggle(false);
                }}
                sx={{
                  border: '1px solid #ccc',
                  minWidth: '20px',
                  bgcolor: 'white',
                  color: 'black',
                  fontSize: '12px',
                  '&:hover': { bgcolor: '#F0F2F6' },
                }}
              >
                {num + 10}
              </Button>
            ))}
          </Box>
        </Box>

        <Button sx={{ p: '15px', minWidth: '20px' }}>
          <img src={dotlist} alt="" />
        </Button>
        <Button sx={{ p: '15px', minWidth: '20px' }}>
          <img src={numlist} alt="" />
        </Button>

        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Button
            sx={{ px: '10px', py: '12px', minWidth: '20px', color: 'black', fontSize: '12px' }}
            onClick={() => setAlignToggle(!alignToggle)}
          >
            <img src={alignImages[align]} alt="" style={{ width: '12px', height: '12px' }} />
            <img src={downarrow} alt="" />
          </Button>
          <Box
            sx={{
              position: 'absolute',
              zIndex: 60,
              display: alignToggle ? 'flex' : 'none',
              flexDirection: 'column',
              right: '50px',
            }}
          >
            <Button
              value="left"
              onClick={(e) => {
                setAlign(e.currentTarget.value);
                setAlignToggle(false);
              }}
              sx={{
                border: '1px solid #ccc',
                minWidth: '20px',
                bgcolor: 'white',
                color: 'black',
                fontSize: '12px',
                '&:hover': { bgcolor: '#F0F2F6' },
              }}
            >
              <img src={alignleft} alt="" />
            </Button>
            <Button
              value="center"
              onClick={(e) => {
                setAlign(e.currentTarget.value);
                setAlignToggle(false);
              }}
              sx={{
                border: '1px solid #ccc',
                minWidth: '20px',
                bgcolor: 'white',
                color: 'black',
                fontSize: '12px',
                '&:hover': { bgcolor: '#F0F2F6' },
              }}
            >
              <img src={aligncenter} alt="" style={{ width: '12px', height: '12px' }} />
            </Button>
            <Button
              value="right"
              onClick={(e) => {
                setAlign(e.currentTarget.value);
                setAlignToggle(false);
              }}
              sx={{
                border: '1px solid #ccc',
                minWidth: '20px',
                bgcolor: 'white',
                color: 'black',
                fontSize: '12px',
                '&:hover': { bgcolor: '#F0F2F6' },
              }}
            >
              <img src={alignright} alt="" style={{ width: '12px', height: '12px' }} />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CustomTextField
          multiline
          fullWidth
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{
            
            overflowY: 'scroll',
            '& .css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root': { p: '6px' },
            '& .MuiInputBase-input': {
              padding: '2px',
              fontSize: `${size}px`,
              textAlign: align,
              fontWeight: bold ? '600' : '400',
              fontStyle: italic ? 'italic' : 'normal',
              textDecoration: underline ? 'underline' : 'none',
            },
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default AddLeadsText;

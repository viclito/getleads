import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import {  Typography, Paper } from '@mui/material';
import upload from '../assets/upload.png'

const DragAndDropFileUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    // Handle the uploaded files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*', 
    multiple: true,   
  });

  return (
    <Paper
      {...getRootProps()}
      sx={{
        padding: '24px 16px',
        border: '2px dotted #ccc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: isDragActive ? '#fafafa' : 'white',
        '&:hover': {
          borderColor: '#aaa',
        },
      }}
    >
      <input {...getInputProps()} />
      <img src={upload} alt="" />
      {isDragActive ? (
        <Typography variant="subtitle1" sx={{fontSize:'13px'}}>Drop the files here...</Typography>
      ) : (
        <Typography variant="subtitle1" sx={{fontSize:'13px'}}>Drag & drop  or choose file to upload</Typography>
      )}
    </Paper>
  );
};

export default DragAndDropFileUpload;

import React, { useState } from 'react';
import Box from '@mui/system/Box';
import { Modal, style, Backdrop } from '../AddProductModal/styled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

export function AddWarehouseModal({ props }: any) {
  const { isOpen, handleModalOpen, modalMethod } = props;
  const [userInput, setUserInput] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    fetch('http://localhost:3001/warehouse/', {
      method: modalMethod,
      body: JSON.stringify({ name: userInput }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => data);
    handleModalOpen();
  };

  return (
    <Modal open={isOpen} slots={{ backdrop: Backdrop }}>
      <Box sx={style}>
        <input onChange={handleOnChange}></input>
        <Button
          disabled={!userInput}
          variant='outlined'
          onClick={handleClick}
          startIcon={<AddCircleIcon color='success' />}
        >
          Save
        </Button>
        <Button
          variant='outlined'
          onClick={handleModalOpen}
          startIcon={<CloseIcon color='error' />}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}

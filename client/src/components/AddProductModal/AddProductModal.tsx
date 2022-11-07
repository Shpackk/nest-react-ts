import React, { useState } from 'react';
import Box from '@mui/system/Box';
import { Modal, style, Backdrop } from './styled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

export function AddProductModal({ props }: any) {
  const { isOpen, handleModalOpen, productId } = props;
  const [isBadInput, setIsBadInput] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (isNaN(+value)) {
      return setIsBadInput(true);
    }
    setUserInput(e.target.value);
    return setIsBadInput(false);
  };

  const handleClick = () => {
    fetch(`http://localhost:3001/products/${productId}`, {
      method: 'PATCH',
      body: JSON.stringify({ amount: userInput }),
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
          Update
        </Button>
        <Button
          variant='outlined'
          onClick={handleClick}
          startIcon={<CloseIcon color='error' />}
        >
          Close
        </Button>

        {isBadInput && <p>Only Numbers PLEASE SUKA</p>}
      </Box>
    </Modal>
  );
}

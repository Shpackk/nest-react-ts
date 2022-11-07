import React, { useState } from 'react';
import Modal from 'react-modal'

export function AddProductModal({props}: any) {
  const { isOpen, handleModalOpen, productId} = props;
  const [isBadInput, setIsBadInput] = useState(false)
  const [userInput, setUserInput] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+e.target.value)) {
      return setIsBadInput(true)
    }
    setUserInput(e.target.value)
    return setIsBadInput(false)
  }

  const handleProductUpdate = () => {
    console.log(`Product id:${productId} updated on ${userInput}`)
    handleModalOpen()
  }

  return (
    <Modal ariaHideApp={false} isOpen={isOpen}
    >
      <input onChange={handleOnChange}></input>
      <button onClick={handleProductUpdate}>Update Product</button>
      <button onClick={handleModalOpen}>Close Modal</button>
      {isBadInput && <p>Only Numbers PLEASE SUKA</p>}
    </Modal>
  )
}
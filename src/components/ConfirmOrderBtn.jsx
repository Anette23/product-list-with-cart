import React from 'react'

const ConfirmOrderBtn = ({openModal}) => {
  return (
    <button className='confirmOrderBtn' onClick={openModal}  id="openModal">Confirm Order</button>
  )
}

export default ConfirmOrderBtn
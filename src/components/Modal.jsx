import React from 'react'
import "./styles/Modal.css"

const Modal = ({message}) => {
  return (
    <div className='modal'>
        <p className='text-modal'>{message}</p>
    </div>
  )
}

export default Modal
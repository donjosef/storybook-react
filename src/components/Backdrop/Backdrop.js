import React from 'react'
import './Backdrop.css';

function Backdrop({open, closeModal}) {
  
  return (
    open ? <div className="backdrop" onClick={closeModal}></div> : null
  );
}

export default Backdrop;
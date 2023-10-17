import React from 'react'
import './tagbutton.css'
import crossImage from '../../../images/X.png'

function Tagbutton({text,crossbuttonTag}) {
  return (
    <>
      <button className='Tagname-button'>{text}<img src={crossImage} id={text} onClick={crossbuttonTag}></img></button>
    </>
  )
}

export default Tagbutton
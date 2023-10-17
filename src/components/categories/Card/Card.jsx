import React from 'react'
import './Card.css'

function Card({id,imageUrl,bgColor,handleClick,isSelected}) {
  return (
   <>
       <div onClick={handleClick} id={id}  className={`card-container ${(isSelected[id])? 'card-container-border':''}`} style={{backgroundColor:bgColor}} >
        <p id={id} className='card-genre'>{id}</p>
        <img id={id}  src={imageUrl} alt={{id}+" image"} />
       </div>
   </>
  )
}

export default Card
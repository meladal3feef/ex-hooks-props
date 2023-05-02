import React, { useState } from 'react'

const TourCard = ({tour}) => {
    const [click,setClick]=useState(false)
  return (
    <div className='card'>
    <div className='dd'>
    <img className='card-img' src={tour.image} alt="404" />
    <h4 className='title'>{tour.name}</h4>
    </div>
      
      <div className='card-content'>
     <div className='btnd'><button onClick={()=>setClick(!click)}><div>More</div></button></div>
      {click && 
      <div  className='info'> 
      <p>{tour.info}</p>
       </div>}
       {click && 
     <div>
      <p>{tour.price}</p>
      </div>}
       
      </div>
    </div>
  )
}

export default TourCard

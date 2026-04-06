import React from 'react'
import { RiStarFill, RiStarHalfFill, RiStarLine } from 'react-icons/ri'

const Star = ({rating}) => {
  return (
    <div className='flex text-yellow-400 text-xl'>
        {[1,2,3,4,5].map((star) => {
            if(rating >= star) return <span key={star}> <RiStarFill size={10}/> </span>
            if(rating >= star-0.5) return <span key={star}> <RiStarHalfFill size={10}/> </span>
            return <span key={star}><RiStarLine size={10}/></span>
        })}
    </div>
  )
}

export default Star
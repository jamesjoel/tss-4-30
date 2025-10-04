import React from 'react'

const Button = ({lable, handleClick, btnType}) => {
  return (
    <button onClick={()=>handleClick(lable, btnType)} className='btn btn-lg btn-light m-1'>{lable}</button>
  )
}

export default Button
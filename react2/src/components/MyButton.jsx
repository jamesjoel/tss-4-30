import React from 'react'

const MyButton = ({lable, changeLable, clsName, setClsName}) => {

  let demo = ()=>{
    changeLable("Logout")
    setClsName("btn-danger")
  }


  return (
    <button onClick={demo} className={'btn '+clsName}>{lable}</button>
  )
}

export default MyButton
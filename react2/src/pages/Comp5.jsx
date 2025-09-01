import React from 'react'

const Comp5 = () => {
    let demo1 = ()=>{
        console.log("*********")
    }
    let demo2 = ()=>{
        console.log("############")
    }
  return (
    <div className='container my-4'>
        <div className='row'>
            <div className='col-md-12'>
                <h3>Welcome</h3>
                <input type='text' onKeyDown={demo1} onKeyUp={demo2}/>
            </div>
        </div>
    </div>
  )
}

export default Comp5
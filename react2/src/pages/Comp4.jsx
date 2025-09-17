import React, { useState } from 'react'

const Comp4 = () => {

  let [img, setImg] = useState('https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/e/7/h/-original-imah4fsa3qjcf8n7.jpeg?q=70&crop=false')

  let changeImg = (a)=>{
    // console.log(a)
    setImg(a)
  }

  let hello = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <img onContextMenu={(e)=>hello(e)} style={{height : "400px", width : "400px", border : "5px solid red"}} src={img} />
          <br />
          <img onMouseOver={()=>changeImg('https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/9/x/z/-original-imah4fsa88uv67rz.jpeg?q=70&crop=false')} style={{height : "100px", width : "100px", border : "1px solid green"}} src='https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/9/x/z/-original-imah4fsa88uv67rz.jpeg?q=70&crop=false' />
          <img onMouseOver={()=>changeImg('https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/u/b/h/-original-imah6dt2eveuvcnf.jpeg?q=70&crop=false')} style={{height : "100px", width : "100px", border : "1px solid green"}} src='https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/u/b/h/-original-imah6dt2eveuvcnf.jpeg?q=70&crop=false' />
          <img onMouseOver={()=>changeImg('https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/5/n/s/-original-imahyz5xddycezxb.jpeg?q=70&crop=false')} style={{height : "100px", width : "100px", border : "1px solid green"}} src='https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/5/n/s/-original-imahyz5xddycezxb.jpeg?q=70&crop=false' />
          <img onMouseOver={()=>changeImg('https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/e/7/h/-original-imah4fsa3qjcf8n7.jpeg?q=70&crop=false')} style={{height : "100px", width : "100px", border : "1px solid green"}} src='https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/e/7/h/-original-imah4fsa3qjcf8n7.jpeg?q=70&crop=false' />
        </div>
      </div>
    </div>
  )
}

export default Comp4
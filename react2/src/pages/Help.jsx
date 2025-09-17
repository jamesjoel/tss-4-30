import React, { useState } from 'react'

const Help = () => {

  let [imgSrc, setImgSrc] = useState("https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg");



  let changeImg1 = ()=>{
    setImgSrc("https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg")
  }
  let changeImg2 = ()=>{
      setImgSrc("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9Xd2jWoidggu4ssoEyMu4BiltOKLG2wZsQ&s");
  }

  // 9827049416


  return (
    <>
    <div>Help</div>
    
    <button onClick={ changeImg1 } className='btn btn-primary'>Image 1</button>
    <button onClick={ changeImg2 } className='btn btn-primary'>Image 2</button>
    <br />
    <br />


    <img src={imgSrc} height="200" width="200"/>
    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9Xd2jWoidggu4ssoEyMu4BiltOKLG2wZsQ&s' height="200" width="200"/> */}
    </>
  )
}

export default Help
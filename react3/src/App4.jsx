import React, {useRef} from 'react'
import { useState } from 'react'
import axios from 'axios'

const App4 = () => {

    let file = useRef();
    
    let upload = ()=>{
        // console.log(file.current.files[0])
        let data = file.current.files[0];
        // its not a "FORM DATA  --- <form></form> "
        // now we have to create a "form" variable by JavaScript

        let myForm = new FormData();
        myForm.append("hello", data);

        axios
        .post("http://localhost:3000/api/v1/upload", myForm)
        .then(response=>{
            console.log(response.data);
        })
    }

  return (
    <>
    <div>
        <br />
        <br />
        <input ref={file} type='file' />
        <br />
        <br />
        <button onClick={upload}>Upload</button>
        <br />
        <br />
        
    </div>
    </>
  )
}

export default App4
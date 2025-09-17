import React, { useState } from 'react'
import axios from 'axios'

const App3 = () => {

    let [user, setUser] = useState([]);
    let [btn, setBtn] = useState("OK")

    let handleClick = ()=>{
        setBtn("Loading")
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setUser(response.data);
            setBtn("OK")
        })
    }

  return (
    <>
    <div>App3</div>
    <button onClick={handleClick}>{btn}</button>
    <table>
        <tbody>
            {
                user.map((item, index)=><tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    
                )
            }
        </tbody>
    </table>
    </>
  )
}

export default App3
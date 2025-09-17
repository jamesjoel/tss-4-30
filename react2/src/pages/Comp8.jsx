import React, { useState } from 'react'

const Comp8 = () => {
  let [arrowCls, setArrowCls] = useState("fa-caret-down")
  let [arr, setArr] = useState([
    {
      id : 1,
      name : "rohit",
      age : 14,
      class : 6
    },
    {
      id : 2,
      name : "ajay",
      age : 10,
      class : 4
    },
    {
      id : 3,
      name : "jaya",
      age : 15,
      class : 7
    },
    {
      id : 4,
      name : "gaurav",
      age : 12,
      class : 5
    },
    {
      id : 5,
      name : "nidhi",
      age : 17,
      class : 9
    },
    {
      id : 6,
      name : "nilesh",
      age : 10,
      class : 4
    },
    {
      id : 7,
      name : "amar",
      age : 12,
      class : 5
    }
  ])

  let sortAge = ()=>{
    if(arrowCls=="fa-caret-down"){

      setArrowCls("fa-caret-up")
      setArr((curr)=>{
        let x = [...curr]
        return x.sort((a, b)=> a.age - b.age);
      });
    }
    else{
      setArrowCls("fa-caret-down")
      setArr((curr)=>{
        return [...curr].sort((a, b)=> b.age - a.age);
      });
    }
  }



  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <h4>All Student</h4>
          <table className='table table-info table-hover table-bordered table-striped'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>
                  <button onClick={sortAge} className='btn fw-bold p-0'>Age <i className={"fa "+arrowCls} aria-hidden="true"></i></button>
                </th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              {
                arr.map((item, index)=>{
                  return(
                    <tr>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.age} </td>
                      <td>{item.class}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Comp8
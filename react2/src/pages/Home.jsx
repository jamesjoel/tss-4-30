import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MyButton from '../components/MyButton';


const Home = () => {
  let [allComp, setAllComp] = useState([])
  let [allEmp, setAllEmp] = useState([])
  let [cname, setCName] = useState("")
  useEffect(()=>{
    axios
    .get("http://localhost:3000/api/v1/company")
    .then(response=>{
      setAllComp(response.data);
    })

  },[])
  
  let demo = (cobj)=>{
    
    let a = cobj._id;
    setCName(cobj.title)
    axios
    .get("http://localhost:3000/api/v1/employee/"+a)
    .then(response=>{
      // console.log(response.data);
      setAllEmp(response.data)
    })
  }

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <table className="table table-dark table-hover my-3">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {
                  allComp.map((item, index)=><tr key={index}>
                    <td>{index+1}</td>  
                    <td><button onClick={()=>demo(item)} className='btn btn-info'>{item.title}</button></td>  
                  </tr>)
                }
              </tbody>
            </table>
            {
              allEmp.length > 0
              ?
              <>
              <h3>List of All Employee of {cname} ({allEmp.length})</h3>
            <table className="table table-info">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Employee</th>
                </tr>
              </thead>
              <tbody>
                {
                  allEmp.map((item, index)=><tr key={item._id}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                  </tr>)
                }
              </tbody>
            </table>
              </>
              :
              ''
            }
          </div>          
        </div>
      </div>
    </>
  )
}

export default Home


/*
  let demo = ()=>{single
   hello}



  let demo = a =>"hello";


  let demo = (a)=>{
    return "hello";
    }

*/
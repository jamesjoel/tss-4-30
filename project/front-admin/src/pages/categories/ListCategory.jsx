import React, { useEffect, useState } from 'react'
import {API_URL} from '../../config/API'
import axios from 'axios'
const ListCategory = () => {

  let [allCate, setAllCate] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/category`)
    .then(response=>{
      setAllCate(response.data.result);
    })
  },[])

  return (
    <div className='container'>
      <div className="row">
        <h5>List All Categories</h5>
       {
        allCate.length > 0
        ?
         <table className='table my-3 table-light table-bordered table-hover table-striped'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              allCate.map((item, index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td><button className='btn btn-sm btn-info'><i className='fa fa-pencil'></i></button></td>
                <td><button className='btn btn-sm btn-danger'><i className='fa fa-trash'></i></button></td>
              </tr>)
            }
          </tbody>
        </table>
        :
        <div className='alert alert-danger'>
          Not Data Found
        </div>
       }
      </div>
    </div>
  )
}

export default ListCategory
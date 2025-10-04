import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../config/API'
const ListSubCategory = () => {

  let [allSubCate, setAllSubCate] = useState([])

  useEffect(()=>{
    axios
    .get(`${API_URL}/subcategory`)
    .then(response=>{
      setAllSubCate(response.data.result);
    })
  },[])


  return (
     <div className='container'>
      <div className="row">
        <h5>List All Sub-Categories</h5>
       
         <table className='table my-3 table-light table-bordered table-hover table-striped'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Category Title</th>
              <th>Sub-Category Title</th>
            </tr>
          </thead>
          <tbody>
            {
              allSubCate.map((item, index)=><tr key={item._id}>
                <td>{index+1}</td>
                <td>{item.cate_id.title}</td>
                <td>{item.title}</td>
              </tr>)
            }
          </tbody>
        </table>
        
      </div>
    </div>
  )
}

export default ListSubCategory
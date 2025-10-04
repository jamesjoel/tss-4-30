import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {API_URL} from '../../config/API'

const ListUsers = () => {

    let [allUser, setAllUser] = useState([]);

    useEffect(()=>{
        axios
        .get(`${API_URL}/user/allusers`, {headers : {Authorization : localStorage.getItem("admin_access")}})
        .then(response=>{
            // console.log(response.data)
            setAllUser(response.data.result);
        })
    },[])



  return (
    <>
    <h3>List of All Registered Users</h3>
     <div className="table-responsive mt-4">
                    <table className="table mb-0 text-nowrap varient-table align-middle fs-3">
                      <thead>
                        <tr>
                          <th scope="col" className="px-0 text-muted">
                            #
                          </th>
                          <th scope="col" className="px-0 text-muted">Contact</th>
                          <th scope="col" className="px-0 text-muted">
                            Status
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        {
                            allUser.map((item, index)=>{
                                return(
                                    <tr>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <img src="/public/images/profile/user-3.jpg" className="rounded-circle" width="40"
                                alt="flexy" />
                              <div className="ms-3">
                                <h6 className="mb-0 fw-bolder">{item.name}</h6>
                                <span className="text-muted">{item.email}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-0">{item.contact}</td>
                          <td className="px-0">
                            <button className='btn btn-info btn-sm'>Active</button>
                          </td>
                          
                        </tr>
                                )
                            })
                        }
                        
                        
                      </tbody>
                    </table>
    </div>
    </>
  )
}

export default ListUsers
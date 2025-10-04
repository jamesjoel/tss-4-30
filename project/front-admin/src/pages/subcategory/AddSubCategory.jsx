import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config/API'
import axios from 'axios'
import {useFormik} from 'formik'
import SubCateSchema from '../../schemas/SubCateSchema'
import { useNavigate } from 'react-router-dom'

const AddSubCategory = () => {
    let navigate = useNavigate();
    let [allCate, setAllCate] = useState([]);

    useEffect(()=>{
        axios
        .get(`${API_URL}/category`)
        .then(response=>{
            setAllCate(response.data.result)
        })
    },[])

    let subCateFrm = useFormik({
        validationSchema : SubCateSchema,
        initialValues : {
            title : "",
            cate_id : ""
        },
        onSubmit : (formData)=>{
            // console.log(formData)
            axios
            .post(`${API_URL}/subcategory`, formData, {headers : {Authorization : localStorage.getItem("admin_access")}})
            .then(response=>{
                //console.log(response.data)
                navigate("/subcategory")
            })
        }
    })


  return (
    <div className='container'>
      <div className="row">
        <h5>Add New Sub-Category</h5>
        <form onSubmit={subCateFrm.handleSubmit}>

        <div className='col-md-6'>
          <label className='my-3'>Select Category</label>
          <select name='cate_id' onChange={subCateFrm.handleChange} className={'form-control textbox-bg ' + (subCateFrm.errors.cate_id && subCateFrm.touched.cate_id ? 'is-invalid' : '')}>
            <option>Select Category</option>
            {
                allCate.map(item=><option value={item._id} key={item._id}>{item.title}</option>)
            }
          </select>
        
        <br />
          <label className='my-3'>Sub-Category Title</label>
          <input name='title' onChange={subCateFrm.handleChange} type='text' className={'form-control textbox-bg ' + (subCateFrm.errors.title && subCateFrm.touched.title ? 'is-invalid' : '')}/>
          <br />
          <button type='submit' className='btn btn-primary'>Add</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default AddSubCategory
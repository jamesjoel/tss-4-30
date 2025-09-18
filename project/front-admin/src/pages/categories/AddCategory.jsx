import React from 'react'
import {useFormik} from 'formik'
import CateSchema from '../../schemas/CateSchema'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {API_URL} from '../../config/API'
const AddCategory = () => {
  let navigate = useNavigate();
  let cateFrm = useFormik({
    validationSchema : CateSchema,
    initialValues : {
      title : ""
    },
    onSubmit : (formData)=>{
      axios
      .post(`${API_URL}/category`, formData, {
        headers : { Authorization : localStorage.getItem("admin_access")}
      })
      .then(response=>{
        // console.log(response.data)
        navigate("/category")
      })
    }
  })

  return (
    <div className='container'>
      <div className="row">
        <h5>Add New Category</h5>
        <form onSubmit={cateFrm.handleSubmit}>
        <div className='col-md-6'>
          <label className='my-3'>Category Title</label>
          <input name='title' onChange={cateFrm.handleChange} type='text' className={'form-control textbox-bg ' + (cateFrm.errors.title && cateFrm.touched.title ? 'is-invalid' : '')} />
          <br />
          <button type='submit' className='btn btn-primary'>Add</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default AddCategory
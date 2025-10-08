import React, {useState, useEffect} from 'react'
import { API_URL } from '../config/API';
import axios from 'axios'
import ProductBox from '../ui/ProductBox';

const Shop = () => {
    let [allPro, setAllPro] = useState([]);

  useEffect(()=>{
    axios
    .get(`${API_URL}/product`)
    .then(response=>{
      setAllPro(response.data.result);
    })
  },[])
  return (
    <>
    <div className='container m-4'>
        <h4>Shop Bags by Its Category</h4>
    <div className="row">
          {
            allPro.map(item=><ProductBox item={item}  key={item._id} />)
          }
          
          
         
        </div>
    </div>
    </>
  )
}

export default Shop
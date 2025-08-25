import React, { useState } from 'react'
import axios from 'axios'

const Product = () => {

    let [allPro, setAllPro] = useState([]);
    let [showLoader, setShowLoader] = useState(false)

    let showProduct = () => {

        setShowLoader(true)

        axios
            .get("https://fakestoreapi.com/products")
            .then(response => {
                // console.log(response.data)
                setAllPro(response.data);
                setShowLoader(false)
            })

    }


    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-12">
                    <button onClick={showProduct} className={'btn btn-info ' + (allPro.length==0 ? '' : 'disabled')}>Show All Product &nbsp;
                        {
                            showLoader == true 
                            ?
                            <span className='spinner-border spinner-border-sm'></span>
                            :
                            ''
                        }
                    </button>
                    <div className='row'>
                    {
                        allPro.length == 0
                        ?
                        <div className='col-md-8 offset-md-2'>
                            <div className='alert alert-danger my-3'>
                                If You want to show all Product, Please click the button
                            </div>
                        </div>
                        :
                        
                            allPro.map(item => <div className="col-md-3">
                                <div className='card my-3'>
                                    <div style={{height : "80px"}} className='card-header bg-dark'>
                                        <h6 className='text-light'>{item.title}</h6>
                                    </div>
                                    <div className='card-body'>
                                        <img src={item.image} className='img-thumbnail' style={{ height: "200px" }} />
                                        <p className='m-0 p-0'>{item.category}</p>
                                        <p className='fw-bold m-0 p-0'>{item.price}</p>
                                    </div>
                                    <div className='card-footer bg-dark'>
                                        <button className='btn btn-danger btn-sm'>Buy</button>

                                    </div>
                                </div>
                            </div>)
                        
                    } 
                        


                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
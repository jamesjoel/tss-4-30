import React from 'react'
import './Style.css'

const Mycart = () => {
    return (
        <div className='container my-4'>
            <div className='row'>
                <div className='col-md-12 col-sm-6'>
                    <h3>Item in your Cart</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Quantity</th>
                                <th>handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <img src='/images/beg1.jpeg' style={{ height: "50px" }} />
                                </th>
                                <th>Beg</th>
                                <th>&#8377; 3500</th>
                                <th>&#8377; 7000</th>
                                <th>2</th>
                                <th>
                                    <button className='btn'>
                                        <i class="fa fa-times text-danger" aria-hidden="true"></i>

                                    </button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <img src='/images/beg1.jpeg' style={{ height: "50px" }} />
                                </th>
                                <th>Beg</th>
                                <th>&#8377; 3500</th>
                                <th>&#8377; 7000</th>
                                <th>2</th>
                                <th>
                                    <button className='btn'>
                                        <i class="fa fa-times text-danger" aria-hidden="true"></i>

                                    </button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <img src='/images/beg1.jpeg' style={{ height: "50px" }} />
                                </th>
                                <th>Beg</th>
                                <th>&#8377; 3500</th>
                                <th>&#8377; 7000</th>
                                <th>2</th>
                                <th>
                                    <button className='btn'>
                                        <i class="fa fa-times text-danger" aria-hidden="true"></i>

                                    </button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <img src='/images/beg1.jpeg' style={{ height: "50px" }} />
                                </th>
                                <th>Beg</th>
                                <th>&#8377; 3500</th>
                                <th>&#8377; 7000</th>
                                <th>2</th>
                                <th>
                                    <button className='btn'>
                                        <i class="fa fa-times text-danger" aria-hidden="true"></i>

                                    </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 offset-md-8 mt-5 card-bottom-box'>
                    <div className='alert bg-olive-light'>
                        <h3 className='text-light'><b>Card</b> Total</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>Sub Total</p>
                            <p>&#8377; 7000.00</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between',marginTop:'10px'}}>
                            <p>Shipping</p>
                            <p>Vijay Nagar , Indore</p>
                        </div>
                    
                        <div className='sperator'></div>
                           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>Total</p>
                            <p>&#8377; 7000.00</p>
                        </div>
                        <button className='btn btn-primary '>CheckOut</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mycart
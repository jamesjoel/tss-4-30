import React from 'react'

const About = () => {

  let user = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "ajay",
      age : 21,
      city : "mumbai"
    },
    {
      name : "gaurav",
      age : 26,
      city : "pune"
    },
    {
      name : "gaurav",
      age : 26,
      city : "pune"
    },
    {
      name : "gaurav",
      age : 26,
      city : "pune"
    },
    {
      name : "gaurav",
      age : 26,
      city : "pune"
    },
    {
      name : "gaurav",
      age : 26,
      city : "pune"
    },
    {
      name : "gaurav",
      age : 26,
      city : "pune"
    },
    {
      name : "gaurav",
      age : 26,
      city : "pune"
    },
    {
      name : "gaurav",
      age : 26,
      city : "pune"
    },
    {
      name : "gaurav",
      age : 26,
      city : "pune"
    },
    {
      name : "gaurav",
      age : 26,
      city : "pune"
    }
  ]


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 mt-4'>
          <table className='table table-dark table-hover table-bordered table-striped'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>

              {
                user.map((item, index)=>{
                  return(
                    <tr>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.city}</td>
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

export default About
import React from 'react'

const Service = () => {
  return (

    <>
     <h4 className='servicetitle' >Our Service</h4>
     <div className='service_page'>
       <div className='service_box'>
        <div className='features_service'>
            <img width="64" height="64" src="https://img.icons8.com/wired/64/home.png" alt="home"/>
            <h5>Home Cleanning</h5>
        </div>
        <div className='features_service'>
        <img width="64" height="64" src="https://img.icons8.com/?size=512&id=55798&format=png" alt="chandelier"/>
        <h5>Chandelier Cleaning</h5>
        </div>
        <div className='features_service'>
        <img width="64" height="64" src="https://img.icons8.com/?size=256&id=42324&format=png" alt="car"/>
        <h5>Car Cleaning</h5>
        </div>
        <div className='features_service'>
        <img width="64" height="64" src="https://img.icons8.com/?size=256&id=105740&format=png" alt="house-keeping"/>
        <h5>House-Keeping</h5>
        </div>
       </div>
    </div>
    </>
   
  )
}

export default Service

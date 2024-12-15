import Link from 'next/link'
import React from 'react'

const Service = () => {
  
  return (

    <>
     <h4 className='servicetitle' >Our Service</h4>
     <div className='service_page'>
       <div className='service_box'>
      
        <Link href='chandelier-cleaning'>
        <div className='features_service'>
        <img width="64" height="64" src="https://img.icons8.com/?size=100&id=SYs4RuvwBu7y&format=png&color=000000" alt="chandelier"/>
        <h5>Chandelier Cleaning Services</h5>
        </div>
        </Link>
        <Link href='home-cleaning'>
        <div className='features_service'>
            <img width="64" height="64" src="https://img.icons8.com/?size=100&id=iJzm3AFQCS4W&format=png&color=000000" alt="home"/>
            <h5>Home Cleaning Services</h5>
        </div>
        </Link>

       
        <Link href='water-tank-cleaning'>
        <div className='features_service'>
        <img width="64" height="64" src="https://img.icons8.com/?size=100&id=vV7aJbTd9T9Z&format=png&color=000000" alt="house-keeping"/>
        <h5>Water Tank Cleaning</h5>
        </div>
        </Link>
        
        <Link href='window-cleaning'>
        <div className='features_service'>
        <img width="64" height="64" src="https://img.icons8.com/?size=100&id=mgvawsY3nFyp&format=png&color=000000" alt="car"/>
        <h5>Window Cleaning Services</h5>
        </div>
        </Link>

        <Link href='home-interior'>
        <div className='features_service'>
        <img width="64" height="64" src="https://img.icons8.com/?size=100&id=WG2VAXzjULHJ&format=png&color=000000" alt="house-keeping"/>
        <h5>Home Interior Services</h5>
        </div>
        </Link>
       
        <Link href='house-painting'>
        <div className='features_service'>
        <img width="64" height="64" src="https://img.icons8.com/?size=100&id=9fS8epYOUvtK&format=png&color=000000" alt="house-keeping"/>
        <h5>House Painting Services</h5>
        </div>
        </Link>
        
        <Link href='gym-trainers'>
        <div className='features_service'>
        <img width="64" height="64" src="https://img.icons8.com/?size=100&id=dClvTNYgYOkj&format=png&color=000000g" alt="house-keeping"/>
        <h5>Home Fitness Gym Trainers</h5>
        </div>
        </Link>
        
        <Link href='house-keeping-contract'>
        <div className='features_service'>
        <img width="64" height="64" src="https://img.icons8.com/?size=100&id=13246&format=png&color=000000" alt="house-keeping"/>
        <h5>HouseKeeping/Office Boy Contract</h5>
        </div>
        </Link>
        
      
        
       </div>
    </div>
    </>
   
  )
}

export default Service

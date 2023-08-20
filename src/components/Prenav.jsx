import React from 'react'
import "./Prenav.css"

function Prenav() {
  return (
   
    <div className='container'>
    <div className='row'>

    <ul className='col-6 d-flex list-unstyled gap-5 mt-3'>
      <li>Careers</li>
      <li>Contact Us</li>
    </ul>
    
    
    <ul className='col-6 d-flex list-unstyled gap-5 mt-3 '>
      <li><i style={{fontsize:"10rem"}} class="fa">&#xf002; Search</i></li>
      <li><i class="fa-solid fa-location-dot"></i>Locate Me</li>
      <li> <button className='btn btn-warning' type="button">Order on McDelivery</button> </li>
     </ul>
    
    
 
    
    </div>
    
    </div>
      
  )
}

export default Prenav

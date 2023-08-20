import React,{useState} from 'react'

function Footer() {
    const [data,setData] =useState([
{
    heading:"Company",
    list1:"Our Community",
    list2:"Our History"
},
{
    heading:"Careers",
    list1:"Corporate",
    list2:"Resturant"
},
{
    heading:"Contact",
    list1:"Suggestion",
    list2:"Complaint"
},
{
    heading:"NewsRoom",
    list1:"local",
    list2:""
}
    ])
  return (

    <div>
      <div className='container mt-5'>
      <div className='row'>
      {data.map((item)=>{
        return(
            
      <div className='col-lg-3 '>
      <ul className='d-flex flex-column gap-2 list-unstyled'>
        <li><b>{item.heading}</b></li>
        <li>{item.list1}</li>
        <li>{item.list2}</li>
      </ul>

      </div>


      
        )

      })}
      
      </div>
      </div>

      <div className='container mt-5'>
      <hr/>
      </div>


      <div className='container'>
      <div className='row'> 
      <ul className='col-8 d-flex list-unstyled gap-5 my-5'>
        <li>Contact</li>
        <li>Private Policy</li>
        <li>Terms & Conditions</li>
       </ul>
      <div className='col-4 my-5'>
      <p>©2023 McDonald's. All Rights Reserved. </p>
      </div>
      </div>
      
      </div>
    </div>
    
  )
}

export default Footer

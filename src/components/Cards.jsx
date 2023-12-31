import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Loader from './Loader';


function Cards() {
    const [data, setData]=useState([]);
   const [loader,setLoader]=useState(true);
   
    

    const dataFunc=async()=>{
      const response =await axios.get("https://fakestoreapi.com/products")
      setData(response.data);
      setLoader(false);
      
    }

    useEffect(()=>{
      dataFunc();
    },[])

  return (
    <div>
    {loader?<Loader/>:null}
      <div className="container d-flex flex-wrap justify-content-between gap-3 mt-4" >
      {data.map((item)=>{
        return(
            <div class="card" style={{width: "22rem"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body d-flex flex-column justify-content-center align-items-center">
    <h5 class="card-title text-danger fs-2"><b>{item.title}</b></h5>
    <p class="card-text w-75 text-center">{item.description}</p>
    <a href="#" class="btn btn-primary" style={{background:"#ffbc0d",color:"black",border:"none"}}>Order Now</a>
  </div>
</div>
        )

      })}
 
  
    </div>
    </div>
  )
}

export default Cards

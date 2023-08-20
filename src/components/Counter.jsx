import React,{useState} from 'react'
import { toast} from 'react-toastify';

function Counter() {
    const [counter, setCounter]=useState(0);
    
    const add=()=>{
        if(counter>=10)
    {
        toast.dark("you cannot enter more than 10")
    //setCounter((counter)+1);
    setCounter(10)

    }
    else{
        setCounter(counter+1);
    }
   //setCounter(counter+1)
   
    }

    const subtract=()=>{
        if(counter<=10)
        {
            toast.dark("you cannot enter less than 0")
        //setCounter((counter)-1);
        setCounter(0)
    
        }
        else{
            setCounter(counter-1);
        }
      //  setCounter(counter-1)
    }

  return (
    <div className='d-flex'>
      <button className='btn btn-danger' onClick={add}>+</button>
    <h1>{counter}</h1>
      <button className='btn btn-primary' onClick={subtract}>-</button>
    </div>
  )
}

export default Counter

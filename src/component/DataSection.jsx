import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DataContent from './DataContent'




const DataSection = () => {
  const navigate =useNavigate()
  const Verifiy =(e)=>{
    e.preventDefault()
    if((e))
    {
      navigate("/Datacontent")
    }else{

    }
  }
  
  return (
    
        <div className='bg-red-200 h-screen'>
          <div>
          <h1 className='text-center text-2xl font-bold'>Welcome</h1>
          </div>
            <div className='border-2 border-stone-950 w-[1000px] h-[700px] ml-52 flex flex-wrap'>
            <div className=' flex'>
              <Link to="/DataContent">
              <div onClick={DataContent} className='cursor-pointer w-56 h-60 border-2 px-7 pt-12 bg-orange-400 ml-4' >
              Buy data
            </div>
              </Link>
           
            <div className='w-56 h-60 border-2 px-7 pt-12 bg-orange-400 ml-4' >
              Buy Airtime
            </div>
            
            </div>
            <div>
                
            <div className='w-56 h-60 border-2 px-7 pt-12 bg-orange-400 ml-4'>
              Dstv Subscribe
            </div>
            <div className='w-56 h-60 border-2 px-7 pt-12 bg-orange-400 ml-4'>
              
            </div>
            </div>
          
            </div>
            
        </div>
  

    
  )
}

export default DataSection
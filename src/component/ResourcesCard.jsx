import React, { useEffect, useState } from 'react'
import ResourceImage from '../assets/download.png'
import axios from 'axios';
const ResourcesCard = () => {
    const [users,setUsers]=useState([]);
  useEffect(()=>{
     const fetchPost=async () =>{
        try {
          const responce =await axios.get('https://dummyjson.com/users')
          setUsers(responce.data.users)
        
        
        } catch (error) {
          console.log("error",error);
        }
     };
     fetchPost()
  },[]);
  return (
        
          <>
            { users.map((u,index)=>(

  <div
  key={index}
   className='bg-white w-[300px] h-fit ml-10  rounded-xl shadow-lg'>
  <div className='bg-black'>
   <img className="size-[200px] m-auto bg-amber-950" src={u.image} alt="image" />
   <div>
        <h3 className='text-2xl font-bold pt-7 mb-3 text-white'>Firstname:{u.firstName}</h3> 
         <h2 className='text-2xl font-bold pt-3 mb-3 text-white'>Lastname:{u.lastName}</h2> 

               
           </div>
   
  </div>
  
</div>
            ))}
          </> 
         
        
    
  )
}

export default ResourcesCard
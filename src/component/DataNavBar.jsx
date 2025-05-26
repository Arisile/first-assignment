import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import DataSection from './DataSection';
import { Link } from 'react-router-dom';

const DataNavBar = ({firstName,lastName}) => {
  const [isLogin,setIsLogin]=useState(false); 
  const [Mobile,setMobile]=useState(false)
  const Toggle=()=>{
    setMobile(!Mobile)
  }
   const Login =()=>{
        setIsLogin(true);
        
       }
  return (
    <>
    
    <nav className="flex justify-between py-4 px-12 w-90 lg:hidden">
      <div  className="flex items-center gap-8">
        <h1 className="font-extrabold text-2xl">Dashboard</h1>
        <ul className="lg:flex hidden gap-9 font-semibold cursor-pointer ">
           <li  className="hover:text-red-200">Dashboard</li> 
           <li  className="hover:text-red-200">Buy Data</li>
           <li  className="hover:text-red-200">Bay Airtime</li>
           <li  className="hover:text-red-200">Fund Wallet</li>
           <li  className="hover:text-red-200">Account</li>
           <li  className="hover:text-red-200">Setting</li>
        </ul>
        </div> 
       
        
        <button className="px-3 py-3 border-2 rounded-2xl font-bold text-white bg-black sm:hidden">
            Log out
            </button> 
            <div>
            {Mobile?(<TfiClose onClick={Toggle} className="lg-hidden text-3xl flex " />

              ) :(<RxHamburgerMenu onClick={Toggle} className="flex lg:hidden text-3xl z-10"/>)}
        
        </div>
    </nav>
   {Mobile&& 
   
   <nav>
    <ul className="absolute left-1 w-[300px] p-7 space-y-4  gap-9 font-bold cursor-pointer text-[20px] h-[100%] bg-black text-white">
           <li  className="hover:text-red-200">Dashboard</li> 
           <li  className="hover:text-red-200">Buy Data</li>
           <li  className="hover:text-red-200">Bay Airtime</li>
           <li  className="hover:text-red-200">Fund Wallet</li>
           <li  className="hover:text-red-200">Account</li>
           <li  className="hover:text-red-200">Setting</li>
           <button>
            Log out
            </button> 
        </ul>
        

    </nav>}

     <nav  className="flex justify-between py-4 px-12 w-90">
      <div className="flex items-center gap-8 ">
         <ul className="lg:flex hidden gap-9 font-semibold cursor-pointer  text-[20px] h-[100%]  text-black ">
           <li  className="hover:text-red-200">Dashboard</li> 
           <li  className="hover:text-red-200">Buy Data</li>
           <li  className="hover:text-red-200">Bay Airtime</li>
           <li  className="hover:text-red-200">Fund Wallet</li>
           <li  className="hover:text-red-200">Account</li>
           <li  className="hover:text-red-200">Setting</li>
           
        </ul>
      </div>
   
        
        {isLogin?(
           <p className="font-bold text-xl">
           {lastName} |Hi {firstName}</p>
        ):(
          <div className=" lg:flex hidden gap-3 items-center">
            <Link to="/Datalogin">
            <button 
            onClick={Login} 
            className="px-3 py-3 border-2 rounded-2xl font-bold hover:border-2 hover:text-[#00a2ff] hover:border-[#00a2ff]">
            Log in
            </button>
            </Link>
         <Link to="/reg">
         <button className="px-4  py-3 border-2 rounded-2xl bg-[#00a2ff] font-bold hover:bg-white hover:border-[#00a2ff] hover:text-[#00a2ff] hover:border-2">
              Sign up free
              </button>
         </Link>
         
       </div>
         )
         }

    </nav>
    
    </>
  )
}

export default DataNavBar;
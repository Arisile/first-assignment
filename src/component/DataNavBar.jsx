import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import DataSection from './DataSection';

const DataNavBar = () => {
  const [Mobile,setMobile]=useState(false)
  const Toggle=()=>{
    setMobile(!Mobile)
  }
  return (
    <>
    
    <nav className="flex justify-between py-4 px-12 w-90">
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
   {Mobile&& <nav>
    <ul className="absolute left-1 w-[300px] p-7 space-y-4 lg:hidden gap-9 font-bold cursor-pointer text-[20px] h-[100%] bg-black text-white ">
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
    <DataSection/>
    </>
  )
}

export default DataNavBar
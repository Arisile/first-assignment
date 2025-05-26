import Aos from 'aos'
import React, { useEffect } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import "aos/dist/aos.css";

const Section = ({image, Heads, Head,Description,Text}) => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
       <section className="">
               <div className="hover:border-4 rounded-2xl cursor-pointer gap-5 space-y-16 hover:border-[#00a2ff] shadow-md px-4">
               <img className="h-10" loading="lazy" alt="ECS Publishing Group: Case Study – GetResponse" src={image}></img> 
            <h1 className="font-bold text-[40px] lg:text-[60px] leading-tight text-[#00a2ff]">{Heads} <h1 className="text-black">{Head}</h1></h1>
            <p>{Description}</p>
            <button className="px-9  py-3 rounded-3xl font-bold w-fit bg-[#00a2ff]  flex items-center gap-1 text-white hover:bg-amber-300 hover:text-black space-y-3">
            {Text} <FaArrowRightLong  className="mt-1"/>
            </button>
          </div>
    </section>
</div>
   
  )
}

export default Section
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function HeroSection(){

   const [issubscribe,setIsSubscribe]=useState(false)
         const Subscribe =()=>{
          setIsSubscribe(true)
         }
   
    return(
      <section className="h-100 w-90 flex flex-col justify-center item-center space-y-8 px-20">
        <div className="text-center space-y-7">
          <p className="font-bold lg:text-red-950 text-red-400 text-[14px]">
            ALL-IN-ONE MARKETIN SOFTWARE
            </p>
            <h1 className="font-bold lg:text-[62px] text-[14px] leading-tight">
                Send emails,automate marketing,monetize content - in one place
            </h1>
            <p className="text-[18px] lg:text-black text-blue-500" >
                Grow your business and boost revenue with an easy,affordable platform that brings email,
                <br />automation online course and paid newsletters together
            </p>
            
            <button onClick={Subscribe}
             className= "bg-[#fbe30c] px-8 py-4 rounded-3xl font-bold w-fit">
                {issubscribe ? "You are now subscribe" : "Start 30-day FREE trial"}
            </button>
            <p className="px">Try us {issubscribe?"Premium" :"free"}|No credit card required|Cancel anytime</p>
        </div>
        <div className="flex space-x-7">
          <div className="  h-100 w-auto border-4 rounded-2xl cursor-pointer gap-5 space-y-7 hover:border-[#00a2ff]" >
            <h1 className="font-bold text-[40px] lg:text-[60px] leading-tight text-[#00a2ff]">10% list growth & <h1 className="text-black">sales spike in tough niche</h1></h1>
            <p>it`s nice that with GetResponse,we have the tools and intergrations we need within our budget.</p>
            <button className="px-9  py-3 rounded-3xl font-bold w-fit bg-[#00a2ff]  flex items-center gap-1 text-white hover:bg-amber-300 hover:text-black">
              Read case study<FaArrowRightLong className="mt-1" />
            </button>
          </div>
          <div className="border-4 rounded-2xl cursor-pointer gap-5 space-y-16 hover:border-[#00a2ff] ">
            <h1 className="font-bold text-[40px] lg:text-[60px] leading-tight text-[#00a2ff]">75% of all public <h1 className="text-black">sales from  email autoresponders</h1></h1>
            <p>Together with GetResponse, we`ve been able to convince customers of need,cuminating in compelling sales</p>
            <button className="px-9  py-3 rounded-3xl font-bold w-fit bg-[#00a2ff]  flex items-center gap-1 text-white hover:bg-amber-300 hover:text-black space-y-3">
            Read case study<FaArrowRightLong  className="mt-1"/>
            </button>
          </div>
          <div className="border-4 rounded-2xl cursor-pointer gap-5 space-y-7 hover:border-[#00a2ff]">
            <h1 className="font-bold text-[40px] lg:text-[60px] leading-tight text-[#00a2ff]">Up to $1,000 <h1 className="text-black">for every 1,000 emails sent</h1> </h1>
            <p>Regarding revenue contribution, the email marketing channel is like free money for us.</p>
            <button className="px-9  py-3 rounded-3xl font-bold w-fit bg-[#00a2ff]  flex items-center gap-1 text-white hover:bg-amber-300 hover:text-black">
            Read case study<FaArrowRightLong className="mt-1" />
            </button>
          </div>
        </div>

      </section>
      

      
       
      
    )
}
export default HeroSection
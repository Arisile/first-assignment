import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Section = ({Heads, Head,Description,Text}) => {
  return (
    <section>
               <div className="border-4 rounded-2xl cursor-pointer gap-5 space-y-16 hover:border-[#00a2ff] ">
            <h1 className="font-bold text-[40px] lg:text-[60px] leading-tight text-[#00a2ff]">{Heads} <h1 className="text-black">{Head}</h1></h1>
            <p>{Description}</p>
            <button className="px-9  py-3 rounded-3xl font-bold w-fit bg-[#00a2ff]  flex items-center gap-1 text-white hover:bg-amber-300 hover:text-black space-y-3">
            {Text} <FaArrowRightLong  className="mt-1"/>
            </button>
          </div>
    </section>
  )
}

export default Section
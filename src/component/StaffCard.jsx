import Aos from 'aos'
import React, { useEffect } from 'react'
import "aos/dist/aos.css";

const StaffCard = ({name,position,departement,image}) => {
    useEffect(()=>{
      Aos.init()
    },[])
  return (
   <div data-aos="fade-right" data-aos-duration="3000">
 <section className="flex justify-between w-[70%] m-auto">
        <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden m-4 h-80">
            <img src={image} alt="pic" className="w-full h-48 object-cover" />

            <div>
                <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                <p className="text-gray-600"><span className="font-semibold">Position:</span>{position}</p>
                <p className="text-gray-600"><span className="font-semibold">Department:</span>{departement}</p>
            </div>
        </div>
    </section>
    </div>
   
  )
}

export default StaffCard
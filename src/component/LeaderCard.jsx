import React from 'react'

const LeaderCard = () => {
  const leaderList=[
    {
      rating:"100%",
      description:"average list growth for all paid plans in the first 30 days"
    },
    {
      rating:"99%",
      description:"deliverability rate for 160+ countries"
    },
    {
      rating:"350k+",
      description:"customers worldwide trust us with their email marketing"
    },
    {
      rating:"24/7",
      description:"support from a 5-star rated Customer Success Team"
    }
    
  ]
  return (
    <>
    <h1 className="text-center text-3xl font-extrabold">Why GetResponse?</h1>
    <section className="flex space-x-7 h-80 pt-14 w-[90%] ml-14">
    {leaderList.map((p) =>(
      
       <div>
       <h1 className="font-extrabold text-3xl text-[40px] space-x-8">{p.rating}</h1>
       <p className="text-[20px]">{p.description}</p>
     </div>
    ))  
    }
    </section>
    </>
  )
}

export default LeaderCard
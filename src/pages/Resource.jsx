import React from 'react'
import ResourcesCard from '../component/ResourcesCard'
import ResourceImage from '../assets/download.png'

const Resource = () => {
  return (
    <section className="h-full bg-gradient-to-r from-green-500 via-blue-300 to-red-500 flex flex-wrap gap-4">
      <ResourcesCard/>
      <ResourcesCard/>
      <ResourcesCard/>
    </section>
  )
}

export default Resource
import React from 'react'

const Button = ({label,className}) => {
  return  <div className={`bg-gray-100 px-4 py-2 mb-2 ${className}`}>{label}</div>
   
  
}

export default Button
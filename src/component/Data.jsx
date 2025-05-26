import React from 'react'

const Data = ({Network,data}) => {
  return (
    <div>
         <div>
                    
                    <label  className="block text-sm font-medium text-gray-700">
                      {Network}
                    </label>
                    <input 
                   type={data}
                    placeholder="-----"
                    className="w-full px-4 py-2 mt-1 border rounded-lg"/>
                    
                </div>
    </div>
  )
}

export default Data
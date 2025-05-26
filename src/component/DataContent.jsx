import React from 'react'

const DataContent = () => {
  
  
  return (
    <section className="min-h-screen w-[900px] ml-60 ">
              <div>
          <h3 className='text-xl font-bold text-center'>Code for data balance</h3>
            <div className='text-center border-2'>
                <div className='bg-gray-600 h-40 py-9 text-white'>
                    <p>MTN[SME]*461*4#</p>
                    <p>MTN[Gifting]*461*4#</p>
                 </div>
                 <div  className='bg-teal-300 h-40 py-9 text-white'>
                    <p> 9mobile[gifting]*228#</p>
                 </div>
                 <div  className='bg-sky-400 h-40 py-9 text-white'>
                    <p>Airtel*140#</p>
    
                 </div>
                 <div  className='bg-sky-700 h-40 py-9 text-white'>
                    <p>Glo *127*0#</p>
                 </div>
                 <div>
                 

            </div>
        
         
        </div>
        <form>
          
        <div className='mt-5 '>
                  <div>
                    
                    <label  className="block text-sm font-medium text-gray-700">
                      Network
                    </label>
                    <input 
                   type="Network"
                    placeholder="-----"
                    className="w-full px-4 py-2 mt-1 border rounded-lg"/>
                    
                </div>
                <div>
                
                  <label  className="block text-sm font-medium text-gray-700">
                        Data plan
                    </label>
                    <input 
                   type="------"
                    placeholder="-------"
                    className="w-full px-4 py-2 mt-1 border rounded-lg"/>
                </div>
                <div>
              
                <label  className="block text-sm font-medium text-gray-700">
                        Mobile number
                    </label>
                    <input 
                   type="------"
                    placeholder="-----"
                    className="w-full px-4 py-2 mt-1 border rounded-lg"/>
              </div>
              <button 
                 type="submit"
                 className="w-96 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 pt-4 rounded-lg transition duration-200 mt-4 flex justify-center"
                 >
                   Buy Now
                 </button>
            </div>
        </form>
       
            
    </div>
    </section>
        
    
  )
}

export default DataContent
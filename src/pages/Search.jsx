import { Input } from 'postcss'
import React, { useState } from 'react'

const Search = () => {
    const[todos,setTodos]=useState([])
    const[input,setInput]=useState("")
    const Verify=()=>{
        alert("error")
    }
    const Add=()=>{
        if(input.trim()==="")alert("Enter vaild statement");
       if(input.trim()==="")return;
        setTodos([...todos,{text:input,completed:false}])
        setInput("")
    }
    
    const deleteTo=(index)=>{
    const newTodos=todos.filter((_,i)=> i !==index);
    setTodos(newTodos)
    }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 ">
       <div className=' bg-gray-200 rounded-2xl w-full max-w-md p-6'>
        <h1 className='font-bold text-center text-2xl mb-4'>Search</h1>
        <div className="flex gap-2 mb-4">
            <input
         type="text"
         placeholder='Add task'
         value={input}
         onChange={(e)=>setInput(e.target.value)}
         className='flex-1 px-3 py-4 border rounded-xl focus:outline-none'
         />
         <button onClick={Add}
          className='border-2 px-4 py-3 text-white bg-blue-600 rounded-xl'>
            Add
         </button>
        </div>
        <ul className='space-y-2'>

           {todos.map((todo,index)=>(
<li className='flex items-center justify-between px-4 py-2 border rounded'>
                <span className="cursor-pointer flex-1">{todo.text}</span>
                <button
                onClick={()=>deleteTo(index)}
                 className='text-red-400 hover:bg-red-700 ml-4'>✕</button>
            </li>
           )) 
        }
        </ul>
       
       </div>
    </div>
  )
}

export default Search
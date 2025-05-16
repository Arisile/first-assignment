import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const[surname,setSurname]=useState("")
    const[firstname, setFirstName]=useState("")
    const[email,setEmail]=useState("")
     const[password,setPassword]=useState("");
      const[confirmpassword,setConfirmPassword]=useState("");
      const[showpassword,setShowPassword]=useState("")

      const navigate=useNavigate()
      
    const Click=()=>{
        setShowPassword(!showpassword)
    }
    const Verify=(e)=>{
        e.preventDefault();
        if((surname,firstname,email,password,confirmpassword))
        {
          navigate("/Hompage")
        }else{
            alert("Log in")
        }
    }
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-300 to-slate-600 flex items-center justify-center">
        <div className="bg-slate-500 p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Register Form
            </h2>
            <form onSubmit={Verify}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Surname
                    </label>
                    <input
                     type="Surname"
                     value={surname}
                     onChange={(e)=>setSurname(e.target.value)}
                     placeholder=" Surname"
                     className="w-full px-4 py-2 mt-1 border rounded-lg "
                     />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        FirstName
                    </label>
                    <input 
                    type="FirstName"
                    value={firstname} 
                    onChange={(e)=>setFirstName(e.target.value)}
                    placeholder="FirstName"
                     className="w-full px-4 py-2 mt-1 border rounded-lg"
                    />
                    
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                       Email 
                    </label>
                    <input 
                    type="Email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-2 mt-1 border rounded-lg"
                    />
                </div>
                <div>
                    <label  className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input 
                   type={showpassword? "text" :"password"}
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-1 border rounded-lg"
                    />
                </div>
                <div>
                    <label  className="block text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <input 
                    type="Password" 
                    value={confirmpassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    placeholder="ComfirmPassword"
                    className="w-full px-4 py-2 mt-1 border rounded-lg"
                    />
                </div>
                <p onClick={Click} className="mt-2 font-medium border-2 w-36 bg-slate-700 text-white rounded-md cursor-pointer">
                    Show Password
                    
                </p>
                
                <button
                 type="submit"
                 className="w-96 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 pt-4 rounded-lg transition duration-200 mt-4"
                 >
                   Sign Up
                 </button>
                
                
            </form>

        </div>
    </div>
  )
}

export default Register
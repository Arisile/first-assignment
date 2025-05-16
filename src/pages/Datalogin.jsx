import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Datalogin = () => {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")

  const navigate=useNavigate()
  const Verify=(e)=>{
    e.preventDefault();
    if((username&& password))
      {
      navigate("/DataNavBar")
      }else{
        alert("Log in")
      }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="bg-fuchsia-200 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            DataKonnect
            </h2>
            <form>
                <div>
                    <label  className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                    type="Username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
                </div>
                <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <button onClick={Verify}
                 type="submit"
                 className="w-96 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 pt-4 rounded-lg transition duration-200 mt-4"
                 >
                   Log in
                 </button>
            </form>
            <div className="text-center mt-4 text-sm text-gray-600 pt-2 border-y-2">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>{" "}
          |
          
          <a href="#" className="hover:underline ml-2">
            Create an account
          </a>
          
          
        </div>
        </div>
    </div>
  )
}

export default Datalogin
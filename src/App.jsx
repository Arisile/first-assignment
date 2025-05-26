
import './App.css'

import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import Datalogin from './pages/Datalogin'
import DataNavBar from './component/DataNavBar'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import DataContent from './component/DataContent'
import FacebookPost from './component/FacebookPost'
import Resource from './pages/Resource'
import PostPage from './pages/PostPage'
import NavBar from './component/NavBar'
import { useState } from 'react'
import { UserProvider } from './context/UserContext'
import DataSection from './component/DataSection'
import DataPage from './pages/DataPage'
import { Provider } from 'react-redux'
import { store } from './redux/Store'
import Counter from './pages/Counter'
import Todo from './pages/Todo'



function App() {
  // const [count, setCount] = useState(0)
const[firstName,setfirstName]=useState("")
  // const[useremail,setUserEmail]=useState("")
 const[lastName,setlastName] =useState("")

  return (
    <>
    <Provider store={store}>
 {/* <UserProvider> */}
         <DataNavBar firstName={firstName} lastName={lastName} />   
    {/* <NavBar firstname={firstName} /> */}
      <Routes>
         {/* <Route path="/" element={<Homepage/>}/>  
       <Route path="/Login" element={<Login setfirstName={setfirstName}/>}/>
         <Route path="/reg" element={<Register/>}/>
        <Route path="/product" element={<Product/>}/> 
        <Route path='/Resource'element={<Resource/>}/>
        <Route path="/Postpage" element={<PostPage/>}/> 
          <Route path="/counter" element={<Counter/>}/> */}
           <Route path='/' element={<Homepage/>}/>
          <Route path="/Datalogin" element={<Datalogin setfirstName={setfirstName} setlastName={setlastName}/>}/>
           <Route path="/Counter" element={<Counter/>}/>
          <Route path='/DataNavBar' element={<DataNavBar/>}/>
          <Route path='/DataContent' element={<DataContent/>}/> 
          <Route path='/Todo' element={<Todo/>}/>
          
      </Routes>
      {/* </UserProvider> */}
    </Provider>
   
     </>
    
     
  )
   
  
}

export default App

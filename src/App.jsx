
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



function App() {
  // const [count, setCount] = useState(0)

  return (
      <Routes>
         <Route path="/" element={<Login/>}/> 
        <Route path="homepage" element={<Homepage/>}/>
         <Route path="reg" element={<Register/>}/>
        <Route path="product" element={<Product/>}/> 
        <Route path='Resource'element={<Resource/>}/>
        {/* <Route path="/" element={<Datalogin/>}/>  
        <Route path="DataNavBar" element={<DataNavBar/>}/>
        <Route path='/datacontent' element={<DataContent/>}/> 
       <Route path="/" element={<FacebookPost/>}/>
         */}
      </Routes>
     
    
     
  )
   
  
}

export default App

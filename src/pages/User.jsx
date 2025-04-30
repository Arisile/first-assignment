import { useState } from "react"

function User(){
    // const [name, setName] =useState("MIKE")
    // const[age, setAge]=useState(15)
    // const updateName=()=>{
    //     setName("Arisile")
    // };
    const[count, setCount] =useState(0);
    const Add =() =>{
        setCount(count + 1);
        
    };
     
     const Remove =() =>{
        if(count > 0){
        setCount(count-1)   
        }
        
     };
     const Reset=()=>{
        setCount(0)
     }

    return(
        // <div className="space-y-7">
        //     <p>{name}</p>
        //     <p>{age}</p>
        //     <button onClick={updateName}>Change name</button>

          
        // </div>
        <div className="gap-3 p-[200px] flex w-fit">
            
        <button className="border-2 py-4 px-8 bg-red-600 rounded-md text-white shadow-lg hover:bg-red-200" onClick={Add}>
            Add
            </button>
        <span className="font-extrabold text-3xl">{count}</span>
         <button className=" border-2 py-4 px-8 bg-green-600 rounded-md text-white hover:bg-green-200" onClick={Remove}>
            Remove
            </button>
            {count > 0 &&
                <button className=" border-2 py-4 px-8 bg-blue-600 rounded-md text-white hover:bg-blue-200" onClick={Reset}>
            Reset
            </button>
            }
            
        </div>
    )
}
export default User
import { useEffect, useState } from "react"

const UseEffect = ()=>{
    const [count,setCount]=useState(1);
    const [name,setName]=useState("Abhiramsai")

    const handleClick =()=>{
        setName("Narayandasu")
    }
    useEffect(()=>{
        setCount(count+1)
    },[])
    return(
        <div>
            <h2>UseEffect</h2>
            <h2>Counter:{count}-{name}</h2>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default UseEffect;
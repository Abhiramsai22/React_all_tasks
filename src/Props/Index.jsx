import React from "react"
import "../App.css"
const Index=()=>{
    const str={
        name:"abhiram",
        age:null
    }
    const handleclick=()=>{
        console.log("clicked")
    }
    console.log(str);
    return(
        <div>
            <h2>Name:{str.name}</h2>
            <h2>Age:{str.age ? str.age:"N/A"}</h2>
            <button onClick={handleclick}>Click</button>
        </div>
    )
}

export default Index;
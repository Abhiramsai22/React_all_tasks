// import { Component } from "react";

import { Component } from "react";

// class Nameswithcolors extends Component{
//     constructor(){
//         super()
//         this.state={
//             names:["abhi","ram","sai","Narayan"],
//             colors:["red","blue","green","yellow"]
//         }
//     }
//     render(){
//         return(
//             <>
//             {
//                 this.state.names.map((name,index)=>{
//                     return(
//                         <h1 style={{color:this.state.colors[index]}}>{name}</h1>
//                     )
//                 })
//             }
            
//             </>
//         )
//     }

// }

// export default Nameswithcolors;


class Nameswithcolors extends Component{
    constructor(){
        super()
        this.state={
            names:["abhi","ram","sai","Narayan"],
            colors:["red","blue","green","yellow"]  
        }
    }
    render(){
        return(
            <>
            {
                this.state.names.map((name,index)=>{
                    return(
                        <h1 style={{color:this.state.colors[index]}}>{name}</h1>
                    )
                })
            }
            </>
        )
    }
}

export default Nameswithcolors;
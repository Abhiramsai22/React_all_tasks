import { Component } from "react";

class Typedvalue extends Component{
    constructor(){
        super()
        this.state={
            text:""
        }
    }
    handlechange=(event)=>{
        console.log(event.target.value)
        this.setState({text:event.target.value})
    }
    render(){
        return(
            <>
            <h1>Typed value:{this.state.text}</h1>
            <input type="text" placeholder="type something.." onChange={this.handlechange} />
            </>
        )

    }
}

export default Typedvalue;
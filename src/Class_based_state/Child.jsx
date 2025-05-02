import { Component } from "react";

class Child extends Component{
    render(){
        return(
            <>
            <button>{this.props.btnvalue}</button>
            </>
        )
    }
}

export default Child
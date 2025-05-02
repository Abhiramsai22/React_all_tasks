import { Component } from "react";

class ShowTypedcolour extends Component{
    constructor(){
        super()
        this.state={
            color:""
        }
    }
    handlecolorchange=(event)=>{
        this.setState({color:event.target.value})
    }
    render(){
        return(
            <>
            <div style={{backgroundColor:this.state.color,width:"100px",height:"100px"}}></div>
            <input type="color" placeholder="type color" onChange={this.handlecolorchange} />
            </>
        )
    }
}

export default ShowTypedcolour;
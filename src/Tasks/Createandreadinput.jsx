import { Component } from "react";
import "../App.css"

class Createandreadinput extends Component{
    constructor(){
        super()
        this.state={
            inputvalue:"",
            list:[]
        }
    }
    handlechange=(event)=>{
        this.setState({inputvalue:event.target.value})
    }
    handleAdd=(event)=>{
        event.preventDefault()
        this.setState({list:[...this.state.list,this.state.inputvalue]})
    }
    render(){
        return(
            <>
            <form onSubmit={this.handleAdd}>
                <label htmlFor="type">Type:</label>
                <input type="text" 
                placeholder="type something" 
                name="inputdata" 
                id="type" 
                onChange={this.handlechange}
                />
                <button type="submit">Add</button>
            </form>
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S NO</th>
                        <th>Input Value</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.list.length > 0 ? ( 
                            <>
                            {
                                this.state.list.map((str,index)=>{
                                    return(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{str}</td>
                                            <td> <button>Del</button></td>
                                        </tr>
                                    )
                                }
                            )
                            }
                            </>
                        )
                     : (
                            <>
                            No Data Available
                            </>
                        )
                    }
                </tbody>

            </table>
            </>
        )
    }
}

export default Createandreadinput;
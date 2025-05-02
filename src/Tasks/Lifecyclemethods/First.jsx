import { Component } from "react";

class First extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            data:[]
        }
        console.log("Constructor")
    }
    fetchproducts=async()=>{
        const response=await fetch("https://fakestoreapi.com/products")
        const data = response.json()
        this.setState({data:data})
    }
    componentDidMount(){
        console.log("componenet did mount")
        fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>this.setState({data:data}))
    }
    render(){
        console.log("render method")
        return(
            <>
            <h1>Counter : {this.state.count}</h1>
         <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
         {
           this.state.data.length > 0 && this.state.data.map((product, index)=>{
             return <p>{product.title}</p>
           })
         }
            </>
        )
    }


}
export default First;
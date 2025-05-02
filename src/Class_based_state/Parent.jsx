
import {Component} from 'react'
import Child from './Child'
// compoenent -> when a Compoenent  is being initiliazed this constructer gets called,
class Parent extends Component{
    render(){
        const btnvalue="login"
        return(
            <>
            <Child btnvalue={btnvalue}/>
            </>
        )
    }

}

export default Parent
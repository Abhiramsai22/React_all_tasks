import { StrictMode ,useState} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))
function Counter(){
    const [count,setCount]=useState(0);
    const [age,setAge]=useState(0);
    function handleclick(){
        console.log(count);
        setCount(count+1)
        setAge(age+1)
    }
    return (
    <>
        <h1>count:{count}</h1>
        <h1>Age:{age}</h1>
        <button onClick={handleclick}>Click</button>  
    </>
    )
}

root.render(<App/>)
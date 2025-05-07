
// phase 2 --> class based componenets -> adavantages

const { useState } = require("react");

// 1.statefull components -> state presents
// 2.Life cycle methods -> mounting,unmounting,updating
// 3.this

//drawbacks - code complexity -> moderate -> boiler plate ->constructer -- super
//                                                        -> render(){}
//                                                        ->this


// React Intoduced hooks concepts ->16.8 version ->
// Messy class components,this binding -> arrow function
// HOOKS -> Hooks are functions which are easier to code and to read -> need to invoke

// why ?

// -> Functional based components -> to manage state,side affects,prevents prop driling,complex state logic
// ref(without causing re-renders),memory caching etc..,
// -> you can create own hook (customize)

// constraints:-
// 1.Always hooks should be used  inside a function body,don't use  at top level,loops,conditions
// 2.Usestate(compoenet)->useState(hook)...if we write both as same then it will raise error (Range execeded)
// 3.Conventions -> use -> always your hook should have a prefix called "use"...ex:useadd,usefetch
// 
//
// Types:-
// #Basic hooks:-
// 1)usestate - state management
// 2)useEffect - to perform side effects
//  
//-------------------------------------------------------------------------------
// #Adavanced Hooks:-
// 1)useRef -> to intract with DOM nodes directly without causing any re-renders 
// 2)useContext(imp) -> to share data globally. why? means to prevent prop drilling(no need to use props)
// 3)useReducer -> complex state logic
//
//-------------------------------------------------------------------------------
// #Adavaced Hooks:-
// useMemo -> caches(stores) values across re-renders
// Note:-don't get confused between memo(Higher order component) and useMemo(Hook),both are different 
// useCallback -> caches functions across re-renders
// (child to parent)
//
//----------------------------------------------------------------------------------

// Usestate :-
// 1.It is used to store or hold values(primitive,non primitive)which changes overtime
// 2.syntax -> useState(initial value) -> [state,setstate]
//          -> useState("Abhiramsai") -> ["Abhiramsai",setstate]
//          -> useState(0) -> [0,setState]
//          -> useState(null) ->[null,setState]
//          -> useState(undefined) -> [undefined,setState]
//          -> useState() -> [undefined,setState]
//          -> useState(true) -> [true,setState]
//     <<<<------Non primitive cases ---------->>>>>
//          -> useState({name:"abhiram"}) -> [{name:"abhiram"},setState]
//          -> useState([1,2,3,4]) -> [[1,2,3,4],setState]
//          useState will take call back function
//          -> useState(()=>{}) -> [()=>{},setState] -> lazy initilization
//          
//
//
//
//
//
//

function counter(){
    const [count,setCount]=useState(0);
    const [age,setAge]=useState(0);
    function handleclick(){
        console.log(count);
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)
    }
    return <button onClick={handleclick}>Click</button>
}

export default counter;
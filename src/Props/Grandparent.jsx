import Parent1 from "./Parent1";

function Grandparent(props){
    return <Parent1 Grandparent={props}/>
}
export default Grandparent;
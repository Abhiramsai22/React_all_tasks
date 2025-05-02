import App from "../App"
import { formdata } from "./form"

const Staffform  =()=> {
    const {Staffform} = formdata
    return(
    <>
             <form>
                 {
                     Staffform.fields.map((field, index)=>{
                         console.log(field)
                         return (
                             <>
                             <label>{Staffform.labels[index]}: </label>
                             <input type={field.type} placeholder={field.placeholder} id={field.id} name={field.name}/><br />
                             </>
                         )
                     })
                 }
                 <button>Submit</button>
             </form>
         </>
    )
}

export default Staffform;
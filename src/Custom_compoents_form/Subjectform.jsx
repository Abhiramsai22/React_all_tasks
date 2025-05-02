import { formdata } from "./form"

const Subjectform=()=>{
    const{Subjectform}=formdata
    return(
        <>
        <form>
            {
                Subjectform.fields.map((field,index)=>{
                    console.log(field)
                    return(
                        <>
                        
                        <label>{Subjectform.labels[index]}:</label>
                        <input type={field.type} placeholder={field.placeholder} id={field.id} name={field.name}/> <br />
                        </>
                    )
                })
            }
            <button>Submit</button>
        </form>
        </>
    )
}

export default Subjectform;
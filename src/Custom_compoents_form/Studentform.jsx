import { formdata } from "./form"

const Studentform=()=>{
    const {Studentform}=formdata
    return(
        <>
        <form>
            {
                Studentform.fields.map((field,index)=>{
                    console.log(field)
                    return(
                        <>
                        <label>{Studentform.labels[index]}:</label>
                        <input type={field.type} placeholder={field.placeholder} id={field.id} name={field.name} /><br />
                        </>
                    )
                })
            }
            <button>Submit</button>
        </form>
        </>
    )
}

export default Studentform;
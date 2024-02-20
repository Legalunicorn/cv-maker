import { TextInput } from "./TextInput";
import "../styles/Form.scss"


function Work({workForm,setWorkForm}){
    function handleChangeTitle(e){
        const id = e.target.dataset.id;
        setWorkForm(workForm.map((work)=>{
            if (work.id==id){
                return {...work,title:e.target.value}
            }
            else{
                return work
            }
        }))
    }
    function handleChangePeriod(e){
        const id = e.target.dataset.id;
        setWorkForm(workForm.map(work=>{
            if (work.id==id){
                return {...work,period:e.target.value}
            }
            else{
                return work
            }            

        }))        

    }
    function handleChangePosition(e){
        const id = e.target.dataset.id;
        setWorkForm(workForm.map(work=>{
            if (work.id==id){
                return {...work,position:e.target.value}
            }
            else{
                return work
            }            
        }))
    }
    function handleChangeDesc(e){
        const id = e.target.dataset.id;
        setWorkForm(workForm.map(work=>{
            if (work.id==id){
                return {...work,desc:e.target.value}
            }
            else{
                return work
            }            
        }))
    }

    return(
        <div>
            {workForm.map(work=>(
                <div className="field-section" key={work.id}>
                    <TextInput
                        name="Title"
                        value={work.title}
                        id={work.id}
                        handleChange={handleChangeTitle}
                        type="text"
                    />
                    <TextInput
                        name="Period"
                        value={work.period}
                        id={work.id}
                        handleChange={handleChangePeriod}
                        type="text"
                    />
                    <TextInput
                        name="Position"
                        value={work.position}
                        id={work.id}
                        handleChange={handleChangePosition}
                        type="text"
                    />
                    <TextInput
                        name="Desc"
                        value={work.desc}
                        id={work.id}
                        handleChange={handleChangeDesc}
                        type="text"
                    />                                                            

                </div>
            ))}
        </div>
    )
}

export {Work}
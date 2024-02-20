

import { TextInput } from "./TextInput"
import "../styles/Form.scss"


function Education({eduForm,setEduForm}){
    function handleChangeSchool(e){
        const id = e.target.dataset.id;
        setEduForm(eduForm.map((edu)=>{
            if (edu.id==id){
                return {...edu,school:e.target.value}
            }
            else{
                return edu
            }
        }))
    }

    function handleChangeSpec(e){
        const id = e.target.dataset.id;
        setEduForm(eduForm.map((edu)=>{
            if (edu.id==id){
                return {...edu,specialization:e.target.value}
            }
            else{
                return edu
            }
        }))
    }

    return (
        <div>
            {eduForm.map((edu)=>(
                <div className="field-section" key={edu.id}>
                    <TextInput
                        name="School"
                        value={edu.school}
                        id={edu.id}
                        handleChange={handleChangeSchool}
                        type='text'
                    />
                    <TextInput
                        name="Specialization"
                        value={edu.specialization}
                        id={edu.id}
                        handleChange={handleChangeSpec}
                        type='text'
                    />
                </div>
            ))}
        </div>
    )
}

export {Education};
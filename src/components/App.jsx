import { useState } from 'react'

import "../styles/App.scss";
import "../styles/Resume.scss";
import "../styles/Form.scss"

import { PersonalDetails } from './PersonalDetails';
import { Education } from './Education';
import { Work } from './Work';

function App(){
  const [formOption,setFormOption] = useState('details')

  const [personalDetailsForm,setPersonalDetailsForm] = useState({
    fullName: '',address:'',contact: '',email:'',summary:''})


  const [educationID,setEducationID] = useState(1)
  const [educationForm,setEducationForm] = useState([
    {id:0,school:'',specialization:''}
  ])
  function handleAddEducation(){
    setEducationID(educationID+1)
    setEducationForm([...educationForm,{
      id: educationID,
      school:'',
      specialization:''
    }])
    console.log("new edu: ",educationForm)
    //with the new field, you need to render the inputs too..
  }

  const [workID,setWorkID] = useState(1)
  const [workForm,setWorkForm] = useState([
    {id:0,title:'',period:'',desc:''}])
  function handleAddWork(){
    setWorkID(workID+1)
    setWorkForm(
      [...workForm,{
        id: workID,
        title:'',
        period:'',
        position:'',
        desc:''
      }]
    )
  }

  //form switcher function
  function setToDetails(){
    console.log('changing to details')
    setFormOption('details')
  }
  function setToThemes(){
    console.log('changin to themes')
    setFormOption('themes')
  }

  return (
    <>
      <div className="contents">

        <div className="form-side">
          <div className="form-switcher">
            <button onClick={setToDetails}>Details</button>
            <button onClick={setToThemes}>Themes</button>
      
          </div>

          {formOption=='details' ?(
            <>
              <div className="field-group">
                <p className="form-header">Personal Details</p>
                <PersonalDetails
                  personalForm={personalDetailsForm}
                  setpersonalForm={setPersonalDetailsForm}
                />
              </div>

              <div className='field-group'>
              <p className="form-header">Education</p>
              <Education eduForm={educationForm} setEduForm={setEducationForm} />
              <button onClick={handleAddEducation}>Add Education</button>
              </div>


              <div className="field-group">
              <p className="form-header">Work Experiences</p>
              <Work workForm={workForm}  setWorkForm={setWorkForm} />
              <button onClick={handleAddWork}>Add Work</button>            
              </div>

            </>
          ):(
            <p>Yeah my bad no themes for you   --..LAZE.</p>
          )

          }


        </div>

        <div className="resume">
          <div className="resume-contents">
              <div className="resume-header">
                {/* change this to a component */}
                <div className="d-name">{personalDetailsForm.fullName}</div>
                <div className="d-address light">{personalDetailsForm.address}</div>
                <div className="d-contact light">{personalDetailsForm.contact}</div>
                <div className="d-email light">{personalDetailsForm.email}</div>
              </div>

              <div className="resume-body">
                <div className="resume-section">
                  <p className="header">Professional Summary</p>
                  <div id="summary-content">{personalDetailsForm.summary}</div>          
                </div>
                <div className="resume-section">
                  <p className="header">Education</p>
                  <div>
                    {educationForm.map(education=>{
                      return(
                        <div className="school"key={education.id}>  
                          <div className="school-name">{education.school}</div> 
                          <div>{education.specialization}</div>
                        </div>
                      )
                      })
                    }
                  </div>              
                </div>

                <p className="header">Work Experiences</p>
                <div className="resume-section">
                <div>
                  {workForm.map(work=>{
                    return(
                      <div className='work' key={work.id}>  
                        <p>{work.title}</p> 
                        <p>{work.position}</p>
                        <p>{work.period}</p>
                        <p>{work.desc}</p>
                      </div>
                    )
                    })
                  }
                </div>
                </div>
                  
                <div>
                </div>

              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
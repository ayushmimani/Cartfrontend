import React, { useState } from 'react'
import Step1 from './formstep/step1'
import Step2 from './formstep/step2'
import Register from './register'
import Step3 from './formstep/Step3'

const Addmember = () => {
    const [step,SetStep] = useState(1);

    const [formdata,setformdata] = useState({
      name:'',
      email:'',
      password:'',
      usertype:''
    })

    const handleinput = (e)=>{
        const {name,value} =e.target;
       setformdata((currentvalue)=>({
        ...currentvalue,
        [name]:value
       }))
    }

    const Nextbtn = (e)=>{
        e.preventDefault();
          SetStep(step+1);
    }
    const prevbtn=(e)=>{
        e.preventDefault();
           SetStep(step-1);
    }

  return (
    <div>
        {step===1 &&  <Step1 nextbtn={Nextbtn} handleinput={handleinput} formdata={formdata}/>}
        {/* {step===2 &&  <Step2 nextbtn={Nextbtn} handleinput={handleinput}  formdata={formdata}  prevbtn={prevbtn}/>} */}
        {step===2 &&  <Step3 handleinput={handleinput} prevbtn={prevbtn} formdata={formdata}/>}
    </div>
  )
}

export default Addmember
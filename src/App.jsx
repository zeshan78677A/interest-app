import './App.css'

import { TextField,Stack,Button } from '@mui/material';
import { useState } from 'react';

function App() {

  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [intrest,setIntrest] = useState(0)
 
  const [isPrincipleInvalid,setIsPrincipleInvalid] = useState(false)
  const [isRateInvalid,setRateInvalid] = useState(false)
  const [isYearInvalid,setYearInvalid] = useState(false)

  // input validation function
  const validateInput = (inputTag)=>{
   //object destructuring , const {key1,key2...} = object-name
   const {name,value} = inputTag
   console.log(name,value);
   console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
   console.log(!!value.match(/^\d*\.?\d+$/));
   if(name=="principle"){
     setPrinciple(value)
    !!value.match(/^\d*\.?\d+$/) ? setIsPrincipleInvalid(false) : setIsPrincipleInvalid(true)
  }
  else if(name=="rate"){
    setRate(value)
   !!value.match(/^\d*\.?\d+$/) ? setRateInvalid(false) : setRateInvalid(true)
 }
 else if(name=="year"){
  setYear(value)
 !!value.match(/^\d*\.?\d+$/) ? setYearInvalid(false) : setYearInvalid(true)
}
}

 
const handleCalculate = (e)=>{
  e.preventDefault() //to prevent unneccesary refreshing
  console.log("Inside handleCalculate function");
  if(principle && rate && year){
       setIntrest(principle*rate*year/100)
  }else{
    alert("Please fill the form")
  }
}
const resetVal=()=>{
  setPrinciple(0)
  setRate(0)
  setIntrest(0)
  setYear(0)
  isPrincipleInvalid(false)
  isRateInvalid(false)
  isYearInvalid(false)
}
  
  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
        <h3 >Simple Calculator App</h3>
        <p>Calculate your simple interest Easily</p>
        <div className='d-flex flex-column text-light justify-content-center align-items-center bg-warning shadow p-5 rounded'>
          <h1>₹{intrest}</h1>
          <p className='fw-bolder'>Total Simple Intrest</p>
        </div>
        <form className="mt-5">
          <div className='mb-3'>
          <TextField value={principle || ""} onChange={e=>validateInput(e.target)} name='principle' id="outlined-basic" className='w-100' label="₹ Principle amount" variant="outlined" />
          </div>
          {
            isPrincipleInvalid &&
          <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount</div>
          }
          <div className='mb-3'>
          <TextField value={rate || ""} onChange={e=>validateInput(e.target)} name='rate' id="outlined-basic1" className='w-100' label="Rate of Intrest (p.a)" variant="outlined" />
          </div>
          {
            isRateInvalid &&
          <div className="mb-3 text-danger fw-bolder">Invalid Rate of Interest</div>
          }
          <div className='mb-3'>
          <TextField value={year || ""} onChange={e=>validateInput(e.target)} name='year' id="outlined-basic2" className='w-100' label="Time period (yr)" variant="outlined" />
          </div>
          {
            isYearInvalid &&
          <div className="mb-3 text-danger fw-bolder">Invalid Time Period</div>
          }
          <Stack direction="row" spacing={2}>
          <Button disabled={isPrincipleInvalid || isRateInvalid || isYearInvalid} type='submit' onClick={handleCalculate} style={{width:'50%',height:'70px'}} className="bg-dark" variant="contained">Calculate</Button>
          <Button  onClick={resetVal}  style={{width:'50%',height:'70px'}} variant="outlined">Reset</Button>
          </Stack>
        </form>
        </div>
    </div>
  )
}

export default App
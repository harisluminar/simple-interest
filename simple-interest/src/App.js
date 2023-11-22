import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  //js code
  const [Principle, setPrinciple]=useState(0);
  const [Interest, setInterest]= useState(0);
  const [Rate, setRate]=useState(0);
  const [Year, setYear]=useState(0);
  const handlesubmit=(e)=>{
    e.preventDefault();
  console.log("==principle amount====")
  console.log(Principle)
  console.log("==rate of interest==");
  console.log(Rate);
  console.log("==total years==");
  console.log(Year);
  let result=Principle*Year*Rate/100;
  console.log(result);
  setInterest(result)
  }
  function clearvalue(){
    setPrinciple(0);
    setInterest(0);
    setYear(0);
  }
  return (
    <div ClassName='d-flex justify-content-center align-items-center w-100 mt-5' style={{ height: "70vh" }}> 
      <div style={{ width:"500px" }} className='bg-light p-5 rounded '>
      <h3>
        simple interest
        </h3>
      <p>calculate your simple interest easily</p>
      <div style={{ height:"150px" }} className='flex-column mt-5  bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
        <h1>{ '\u20B9' }{Interest}</h1>
        <p>Total simple interest</p>
      </div>
      <form action=""className='mt-5' onSubmit={(e)=> handlesubmit(e)}>
        <div className='mb-5'>
        <TextField id="outlined-basic" label="principle amount" variant="outlined" className='w-100' value={Principle} 
        onChange={(e)=>setPrinciple(e.target.value)}/>

        </div>
        <div className='mb-5' >
        <TextField id="outlined-basic" label="Rate of interest (pa)%" variant="outlined" className='w-100' value={Rate} 
        onChange={(e)=>setRate(e.target.value)} />
        </div>
        <div className='mb-3'>
        <TextField id="outlined-basic" label="Year(yr)" variant="outlined" className='w-100' value={Year}
         onChange={(e)=>setYear(e.target.value)}/>
        </div>
        <div className='mb-5'>
    <Stack direction="row" spacing={2}>
    <Button style={{ height: "50px", width: "200px",color:"white" }} varient="contained" className='bg-success'type='submit'>CALCULATE</Button>
    <Button style={{height: "50px", width: "200px",color:"black" ,backgroundColor:"red"}} varient="contained" className='bg-grey'>RESET</Button>
</Stack>
        </div>
      </form>
      </div>
    </div>
  ); 
}

export default App;

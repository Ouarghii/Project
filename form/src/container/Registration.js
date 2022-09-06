import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import useFetch from 'use-http'
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Bg from'../assets/entre.mp4'
import HomeIcon from '@mui/icons-material/Home';
// import './Login.css'
import './ap.css'
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  
function Registration() {
  const{get,post,response,loading,error}=useFetch('http://localhost:3000')
  const[sections,setSections]=useState([])

  useEffect(()=>{(async()=>{
     console.log(2)
     const sections=await get('/sections')
     console.log(sections)
     setSections(sections)
  })()
  },[])
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChangeg = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [gender, setGender] = React.useState();
  const[username,setUsername]=useState([])
  const[password,setPassword]=useState([])
  const[email,setEmail]=useState([])
  const[bd,setBd]=useState([])
  const[message,setMessage]=useState([])

  

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };


  return (
    <div>
        

        {/* <Header /> */}
        {/* <div>
            <video src={Bg} autoPlay loop muted
                style={{
                  position:"absolute",
                  width:"100%",
                  top:"50%",
                  height:"100%",
                  objectFit:"cover",
                  transform:"translate(0, -50%)",
                  zIndex:"-1"
                }}
            />
            </div> */}
        {/* <div style={{
            justifyContent:'center',
            display:'flex',
            flexDirection:'column',
            justifyItems:'center',
            alignItems:'center'
        }}>
        <div><TextField id="usename" label="usename" variant="standard" /></div>
        <div><TextField id="password" label="password" type="password" variant="standard" /></div>
        <div><TextField id="fullname" label="fullname" variant="standard" /></div>
        <div><Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={gender}
          label="Select Gender"
          onChange={handleChangeGender}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Female</MenuItem>
          <MenuItem value={20}>Male</MenuItem>
        </Select></div>
        <div><TextField id="bd" label="birthday date" variant="standard" /></div>

        </div>    */}
        <div className='Home-container'>
        <HomeIcon className="home"  onClick={()=>{
            window.location='/'
          }}/>
            <form action="" method="post">
             <div className="login">
             <div className="mb-3 mt-3">
             <h2 class="active"><a href="http://localhost:3001/login"  style={{color:'white',textDecoration:'none'}} >Login </a></h2>
                <h2 class="active" onClick={()=>{
              window.location='/registration'
            }}> <a href="http://localhost:3001/registration"  style={{color:'white',textDecoration:'none'}} >Registration</a></h2>
                    <input  style={{'color':'white'}} type="text" className="text" placeholder="your username ?"  onChange={(e)=>{
                      console.log(e.target.value)
                      setUsername(e.target.value)
                    }}/>
                </div>
                <div className="mb-3 mt-3">
                    <input  style={{'color':'white'}} type="email" className="text" placeholder="your email ?"onChange={(e)=>{
                      console.log(e.target.value)
                      setEmail(e.target.value)
                    }}/>
                </div>
                <div className="mb-3 mt-3">
                    <input style={{'color':'white'}} type="password" className="text" placeholder="your password ?"   onChange={(e)=>{
                      console.log(e.target.value)
                      setPassword(e.target.value)
                    }}/>
                </div>
               
                
                
                <div>
                <Button style={{
                  "background":"#f1f1f1",
                  '&:hover': {
                    background: "#f00",
                 },
                }} className="signin"  onClick={async()=>{
                        const regis= await post('/members',{
                          username,
                          email,
                          password,
                          
                          
                        })
                        setMessage(regis.msg)
                         if(regis.ok){
                          window.location='/login'
                        }
                      }}
                >Register</Button>
                <p style={{ "textDecoration":"underline"}} className="lin"><a  href='http://localhost:3001/login' style={{'color':'white'}}>Already have an account</a> </p>
                </div>
                <div className="msg">{message}</div>
                </div>
                
            </form>
        </div>
             
    </div>
               
        
    
  );
}

export default Registration;

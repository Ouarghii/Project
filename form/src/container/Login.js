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
import {useLocalStorage} from "react-use-storage";
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
  
function Login() {
  const{get,post,response,loading,error}=useFetch('http://localhost:3000')
  const[sections,setSections]=useState([])
  const[email,setEmail]=useState([])
  const[password,setPassword]=useState([])
  const [islogin, setislogin, removeislogin] = useLocalStorage("islogin", "false");
  const [memberId, setmemberId, removememberId] = useLocalStorage("memberId", "");
  const[message,setMessage]=useState([])
  




  return (
    <div >
      
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

        
       
        <div className='Home-container'>
        <HomeIcon className="home"  onClick={()=>{
            window.location='/'
          }}/>
            <form action="" method="post">
                <div className="login">
                  <div className="mb-3 mt-3">
                <h2 class="active"  ><a style={{color:'white',textDecoration:'none'}} href="http://localhost:3001/login" >Login </a></h2>
                <h2 class="active" onClick={()=>{
              window.location='/registration'
            }}> <a href="http://localhost:3001/registration" style={{color:'white',textDecoration:'none'}} >Registration</a></h2>
                    <input type="email" style={{'color':'white'}} className="text" placeholder="your email ?" onChange={(e)=>{
                      setEmail(e.target.value)
                    }}/>
                </div>
                <div className="mb-3 mt-3">
                    <input type="password" style={{'color':'white'}} className="text" placeholder="your password ?"    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}/>
                </div>
                
                
               
                <div>
                <Button style={{
                  "background":"#f1f1f1",
                  '&:hover': {
                    background: "#f00",
                 },
                }} className="signin" onClick={async()=>{
                        const login= await post('/members/login',{
                          email,
                          password
                        })
                        console.log(login)
                         if(login.ok){
                          setislogin(true)
                          setmemberId(login._id)
                          setEmail(login.email)
                          window.location='/'
                         }
                      }}
                >Login</Button>
                 <p style={{ "textDecoration":"underline"}}   className="lin"><a  href='http://localhost:3001/registration' style={{color:'white'}}>you haven't an account ?</a></p>
                </div>
                </div>
            </form>
        </div>
             
    </div>
               
        
    
  );
}

export default Login;

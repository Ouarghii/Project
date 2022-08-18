import React, { useEffect, useState } from "react";

import useFetch from 'use-http'
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Bg from'../assets/entre.mp4'
import './Home.css'
import HomeIcon from '@mui/icons-material/Home';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';
import Main from'./Crds'
import Navbar from "./Navbar";
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
  const CARDS = 10;
  const MAX_VISIBILITY = 3;
  const Card = ({title, content}) => (
    <div className='card'>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
  
  
function Home({children}) {
  
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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <div>
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
            </div>
   
    <div className="Home-container">
        
        
      
       
{/*         
         {sections?.map((section)=>{
                return (<div>
                    <Accordion  expanded={expanded === section.name} onChange={handleChange(section.name)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{section.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {section.description}
          </Typography>
        </AccordionDetails>
      </Accordion>

      
                </div>)
            })}  */}
            
            <div className="btn"><button onClick={()=>{
        window.location='/registration'
      }} className='btn-3'>User</button>
                  <button onClick={()=>{
        window.location='/registrationa'
      }} className='btn-3'>Admin</button></div>
        {/* <Main /> */}
       
        </div>  
        </div>
    
  );
}

export default Home;

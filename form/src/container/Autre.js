import React from 'react'
import  { useEffect, useState } from "react";
import axios from "axios";
import InputGroup from "../components/InputGroup";
import RowDetails1 from "../components/RowDetails1";
import Alert from '../components/Alert';
import './Client.css'
import useFetch from 'use-http';
import {FcCancel} from 'react-icons/fc'
import HomeIcon from '@mui/icons-material/Home';
function Autre() {
    const{get,post,response,loading,error}=useFetch('http://localhost:3000')
    useEffect(()=>{(async()=>{
        await axios.get('http://localhost:3000/autres')
        .then(res=>{
            setAutres(res.data)
        })
     })()
     },[])
   
    
        const [autres, setAutres] = useState([]);
        const [form, setForm] = useState({});
        const [errors, setErrors] = useState({});
        const [message, setMessage] = useState("");
        const [show, setShow] = useState(false);
        const [show1, setShow1] = useState(false);
        
        const onChangeHandler = (e) => {
          setForm({
            ...form,
            [e.target.name]: e.target.value,
          });
        };
        
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/autres', form)

    .then(res=>{
      setMessage(res.data.message)
      /* hide form after save */
      setForm({})
      /* hide errors after save */
      setErrors({})
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
    })
    .catch(err=>setErrors(err.response.data))
    
  }
  const OnDelete = (id__)=>{
    if(window.confirm("are you sure to delete this user")){
 
     axios.delete(`http://localhost:3000/autres/${id__}`)
     .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
     })
    }
   }
  /* find all users */
  
    return (
        <div className='Home-containe'>
          <HomeIcon className="home"  onClick={()=>{
            window.location='/'
          }}/>
           <Alert message={message} show={show}/> 
          <div className="mt-4">
           
           
          <div className="container col-12 col-lg-4">
          <h2>Crud Clients</h2>
            <h4 style={{
              "color":"black",
              "alignItems":"center"
          }} id="personne_physique">Autres Types</h4>

          </div>
          <button style={{
            "AlignItems": "center"
            
          }} className='btn '  type='button' onClick={()=>setShow1(!show1)}>Add new Client</button>
          {show1 &&
                <form className='form' onSubmit={onSubmitHandler} action="" method="post">
                <InputGroup
                  label="Email"
                  type="text"
                  name="Email"
                  onChangeHandler={onChangeHandler}
                  errors={errors.Email}
                />
                <InputGroup
                  label="Fullname"
                  type="text"
                  name="Fullname"
                  onChangeHandler={onChangeHandler}
                  errors={errors.Fullname}
                />
                <InputGroup
                  label="Type"
                  type="text"
                  name="Type"
                  onChangeHandler={onChangeHandler}
                  errors={errors.Type}
                />
                
                <InputGroup
                  label="status"
                  type="text"
                  name="status"
                  onChangeHandler={onChangeHandler}
                  errors={errors.status}
                />
                <button style={{
                   "transform": "translateY(-30%)"
                }} className="btn btn-primary"  type="submit">Add Client</button>
              </form>
          }
         
            

          </div>
          <div className="container col-13 col-lg-7">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Full Name</th>
                  
                  <th scope="col">Type</th>
                  <th scope="col">status</th>
                </tr>
              </thead>
              <tbody>
                {autres.map(({ Email, Fullname ,Type, status, _id }) => (
                  <RowDetails1
                    Email={Email}
                    Fullname={Fullname}
                    Type={Type}
                    
                    status={status}
                    Id={_id}
                    OnDelete={OnDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
   
}

export default Autre
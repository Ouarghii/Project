import React from 'react'
import  { useEffect, useState } from "react";
import axios from "axios";
import InputGroup from "../components/InputGroup";
import RowDetails1 from "../components/RowDetails1";
import Alert from '../components/Alert';
import './Entreprise.css'
import useFetch from 'use-http';
import {FcCancel} from 'react-icons/fc'
import HomeIcon from '@mui/icons-material/Home';
import Entete from '../components/Entete';
function Client() {
    const{get,post,response,loading,error}=useFetch('http://localhost:3000')
    useEffect(()=>{(async()=>{
        await axios.get('http://localhost:3000/clients')
        .then(res=>{
            setClients(res.data)
        })
     })()
     },[])
   
    
        const [clients, setClients] = useState([]);
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
    axios.post('http://localhost:3000/clients', form)

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
 
     axios.delete(`http://localhost:3000/clients/${id__}`)
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
          <Entete/>
          <HomeIcon className="home"  onClick={()=>{
            window.location='/'
          }}/>
           <Alert message={message} show={show}/> 
          <div className="mt-4">
           
           
          <div className="container col-12 col-lg-4">
          
            <h4 style={{
              "color":"#4682B4",
              "alignItems":"center",
              
              
          }} id="personne_physique">- Personne Physique -</h4>

          </div>
          <button style={{
            "AlignItems": "center"
            
          }} className='custom-btn btn-1'  type='button' onClick={()=>setShow1(!show1)}>Ajouter</button>
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
                  label="Cin"
                  type="text"
                  name="Cin"
                  onChangeHandler={onChangeHandler}
                  errors={errors.Cin}
                />
                
                <InputGroup
                  label="NumberPhone"
                  type="text"
                  name="NumberPhone"
                  onChangeHandler={onChangeHandler}
                  errors={errors.NumberPhone}
                />
                <InputGroup
                  label="Profession"
                  type="text"
                  name="Profession"
                  onChangeHandler={onChangeHandler}
                  errors={errors.Profession}
                />
                <InputGroup
                  label="status"
                  type="text"
                  name="status"
                  onChangeHandler={onChangeHandler}
                  errors={errors.status}
                />
                <button style={{
                   "transform": "translateY(50%)"
                }} className="btn"  type="submit">ajouter un Client</button>
              </form>
          }
         
            

          </div>
          <div className="container col-13 col-lg-7">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Cin</th>
                  <th scope="col">number phone</th>
                  <th scope="col">Profession</th>
                  <th scope="col">status</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(({ Email, Fullname ,Cin, NumberPhone,Profession, status, _id }) => (
                  <RowDetails1
                    Email={Email}
                    Fullname={Fullname}
                    Cin={Cin}
                    NumberPhone={NumberPhone}
                    Profession={Profession}
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

export default Client
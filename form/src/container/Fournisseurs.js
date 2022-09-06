import React from 'react'
import  { useEffect, useState } from "react";
import axios from "axios";
import InputGroup from "../components/InputGroup";
import RowDetailsF from "../components/RowDetailsF";
import Alert from '../components/Alert';
import './Entreprise.css'
import useFetch from 'use-http';
import {FcCancel} from 'react-icons/fc'
import HomeIcon from '@mui/icons-material/Home';
import Entete from '../components/Entete';
function Fournisseur() {
    const{get,post,response,loading,error}=useFetch('http://localhost:3000')
    useEffect(()=>{(async()=>{
        await axios.get('http://localhost:3000/fournisseurs')
        .then(res=>{
            setFournisseurs(res.data)
        })
     })()
     },[])
   
    
        const [fournisseurs, setFournisseurs] = useState([]);
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
    axios.post('http://localhost:3000/fournisseurs', form)

    .then(res=>{
      setMessage(res.data.message)
      setForm({})
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
 
     axios.delete(`http://localhost:3000/fournisseurs/${id__}`)
     .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
     })
    }
   }
  /* trouver les fournisseurs */
  
    return (
        <div className='Home-containe'>
          <Entete />
          <HomeIcon className="home"  onClick={()=>{
            window.location='/'
          }}/>
           <Alert message={message} show={show}/> 
          <div className="mt-4">
           
           
          <div className="container col-12 col-lg-4">
          
            <h4  style={{
              "color":"#4682B4",
              "alignItems":"center",
              
              
          }} id="fournisseur">- Fournisseurs -</h4>

          </div>
          <button style={{
            "AlignItems": "center"
            
          }} className='custom-btn btn-1'   type='button' onClick={()=>setShow1(!show1)}>Ajouter</button>
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
                  label="NumberPhone"
                  type="text"
                  name="NumberPhone"
                  onChangeHandler={onChangeHandler}
                  errors={errors.NumberPhone}
                />
                
                <InputGroup
                  label="status"
                  type="text"
                  name="status"
                  onChangeHandler={onChangeHandler}
                  errors={errors.status}
                />
                <button  style={{"transform": "translateY(50%)"}}
                 className="btn"  type="submit">ajouter un fournisseur</button>
              </form>
          }
         
            

          </div>
          <div className="container col-13 col-lg-7">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Full Name</th>                  
                  <th scope="col">Number phone</th>                
                  <th scope="col">status</th>
                </tr>
              </thead>
              <tbody>
                {fournisseurs.map(({ Email, Fullname, NumberPhone, status, _id }) => (
                  <RowDetailsF
                    Email={Email}
                    Fullname={Fullname}                    
                    NumberPhone={NumberPhone}                    
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

export default Fournisseur
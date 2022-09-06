import React from 'react'
import  { useEffect, useState } from "react";
import axios from "axios";
import InputGroup from "../components/InputGroup";
import RowwDetails from "../components/RowwDetails";
import Alert from '../components/Alert';
import './Entreprise.css'
import useFetch from 'use-http';
import {FcCancel} from 'react-icons/fc'
import HomeIcon from '@mui/icons-material/Home';
import Entete from '../components/Entete';
function Boite() {
    const{get,post,response,loading,error}=useFetch('http://localhost:3000')
    useEffect(()=>{(async()=>{
        await axios.get('http://localhost:3000/boite')
        .then(res=>{
            setBoites(res.data)
        })
     })()
     },[])
   
    
        const [boites, setBoites] = useState([]);
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
    axios.post('http://localhost:3000/boite', form)

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
 
     axios.delete(`http://localhost:3000/boite/${id__}`)
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
          <HomeIcon className="home" style={{color: "#404040"}} onClick={()=>{
            window.location='/'
          }}/>
           <Alert  message={message} show={show}/> 
          <div className="mt-4">
           
           
          <div className="container col-12 col-lg-4">
          
            <h4 style={{
              "color":"#4682B4",
              "alignItems":"center",
              
              
          }} id="personne_physique">- Boite Informatique -</h4>

          </div>
          <button style={{
            "AlignItems": "center"
            
          }} className='custom-btn btn-1 '  type='button' onClick={()=>setShow1(!show1)}>Ajouter</button>
          {show1 &&
                <form className='form' onSubmit={onSubmitHandler} action="" method="post" style={{marginBottom:'100px'}}>
                <InputGroup
                  label="Email"
                  type="text"
                  name="Email"
                  onChangeHandler={onChangeHandler}
                  errors={errors.Email}
                />
                <InputGroup
                  label="Name"
                  type="text"
                  name="Name"
                  onChangeHandler={onChangeHandler}
                  errors={errors.Name}
                />
                <InputGroup
                  label="Phone"
                  type="text"
                  name="Phone"
                  onChangeHandler={onChangeHandler}
                  errors={errors.Phone}
                />
                
           
                <InputGroup
                  label="Status"
                  type="text"
                  name="Status"
                  onChangeHandler={onChangeHandler}
                  errors={errors.Status}
                />
                <button  style={{"transform": "translateY(50%)"}}
                 className="btn"  type="submit">Ajouter une boite</button>
              </form>
          }
         
            

          </div>
          <div className="container col-13 col-lg-7">
            <table className="table" style={{marginLeft:'50px'}}>
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {boites.map(({ Email, Name ,Phone, Status, _id }) => (
                  <RowwDetails
                    Email={Email}
                    Name={Name}
                    Phone={Phone}
                   
                    Status={Status}
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

export default Boite
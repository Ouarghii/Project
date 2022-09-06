import React, { useEffect, useState } from 'react'
import InputGroup from '../components/InputGroup';

import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
function EntrepriseUpdate() {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const {id}=useParams()

    const onChangeHandler = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
    
const onSubmitHandler = (e)=>{
e.preventDefault();
axios.put(`http://localhost:3000/entreprise/${id}`, form)
.then(res=>{
   navigate('/entreprise')
})
.catch(err=>setErrors(err.response.data))

}

useEffect(()=>{(async()=>{
    await axios.get(`http://localhost:3000/entreprise/${id}`)
    .then(res=>{
        setForm(res.data)
    })
 })()
 },[])
  return (
    <div className="container mt-4 col-16 col-lg-7">
           

            <form className='form' onSubmit={onSubmitHandler} action="" method="post">
              <InputGroup
                label="Email"
                type="text"
                name="Email"
                // onChangeHandler={onChangeHandler}
                errors={errors.Email}
                value={form.Email}
              />
              <InputGroup
                label="Name"
                type="text"
                name="Name"
                // onChangeHandler={onChangeHandler}
                errors={errors.Name}
                value={form.Name}
              />
              <InputGroup
                label="Matricule"
                type="text"
                name="Matricule"
                // onChangeHandler={onChangeHandler}
                errors={errors.Matricule}
                value={form.Matricule}
              />
              
              
              <InputGroup
                label="Status"
                type="text"
                name="Status"
                onChangeHandler={onChangeHandler}
                errors={errors.Status}
                value={form.Status}
              />
              <button  style={{"transform": "translateY(50%)"}}
                 className="btn"  type="submit">Mise a jour</button>
            </form>
          </div>
  )
}

export default EntrepriseUpdate
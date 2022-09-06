import React, { useEffect, useState } from 'react'
import InputGroup from '../components/InputGroup';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
function TypeUpdate() {
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
axios.put(`http://localhost:3000/autres/${id}`, form)
.then(res=>{
   navigate('/autres')
})
.catch(err=>setErrors(err.response.data))

}

useEffect(()=>{(async()=>{
    await axios.get(`http://localhost:3000/autres/${id}`)
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
                errors={errors.Email}
                value={form.Email}
              />
              <InputGroup
                label="Fullname"
                type="text"
                name="Fullname"
                errors={errors.Fullname}
                value={form.Fullname}
              />
              
              
              <InputGroup
                label="NumberPhone"
                type="text"
                name="NumberPhone"
                errors={errors.NumberPhone}
                value={form.NumberPhone}
              />

<InputGroup
                label="Nouveautype"
                type="text"
                name="Nouveautype"
                errors={errors.Nouveautype}
                value={form.Nouveautype}
              />
              
              <InputGroup
                label="status"
                type="text"
                name="status"
                onChangeHandler={onChangeHandler}
                errors={errors.status}
                value={form.status}
              />
              <button  style={{"transform": "translateY(50%)"}}
                 className="btn"  type="submit">Misa a jour </button>
            </form>
          </div>
  )
}

export default TypeUpdate

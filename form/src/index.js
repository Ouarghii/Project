import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homee from './Routes/Homee';
import Registration from './container/Registration';
import Login from './container/Login';
import Logina from './container/Logina';
import Registrationa from './container/Registrationa';
import Services from './Routes/Services';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Fournisseur from './container/Fournisseurs';
import FournisseurUpdate from './container/FournisseursUpdate';
import Type from './container/Types';
import TypeUpdate from './container/TypesUpdate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
  
    <Routes>
      <Route exact path='/' element={<Homee />} />
      <Route exact path='/services' element={<Services/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/registration' element={<Registration />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/logina' element={<Logina />} />
      <Route exact path='/registrationa' element={<Registrationa />} />
      <Route exact path='/fournisseurs' element={<Fournisseur />} />
      <Route exact path='/fournisseurs/:id' element={<FournisseurUpdate />} />
      <Route exact path='/types' element={<Type/>} />
      <Route exact path='/types/:id' element={<TypeUpdate />} />
      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

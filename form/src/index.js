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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import View from './container/View'
import Entreprise from './container/Entreprise';
import EntrepriseUpdate from './container/EntrepriseUpdate';
import Boite from './container/Boite';
import BoiteUpdate from './container/BoiteUpdate';
import Client from './container/Client';
import ClientUpdate from './container/ClientUpdate';
import Fournisseur from './container/Fournisseurs';
import FournisseurUpdate from './container/FournisseursUpdate';
import Type from './container/Types';
import TypeUpdate from './container/TypesUpdate';
import Wlcm1 from './container/Wlcm1';





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
      <Route exact path='/entreprise' element={<Entreprise />} />
      <Route exact path='/entreprise/:id' element={<EntrepriseUpdate />} />
      <Route exact path='/welcome' element={<Wlcm1/>} />
      
      <Route exact path='/boite/:id' element={<BoiteUpdate />} />
      <Route exact path='/boite' element={<Boite />} />
      <Route exact path='/clients' element={<Client />} />
      <Route exact path='/clients/:id' element={<ClientUpdate />} />
      <Route exact path='/fournisseurs' element={<Fournisseur />} />
      <Route exact path='/fournisseurs/:id' element={<FournisseurUpdate />} />
      <Route exact path='/autres' element={<Type/>} />
      <Route exact path='/autres/:id' element={<TypeUpdate />} />
      <Route exact path='/view/:id' element={<View />} />

      
      
    


      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

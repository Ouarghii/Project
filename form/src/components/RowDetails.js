import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import './RowDetails.css'

function RowDetails({Email, Fullname, Cin,NumberPhone,Profession, status, Id, OnDelete}) {
 
  return (
    <tr>
    <th>{Email}</th>
    <td>{Fullname}</td>
    <td>{Cin}</td>
    <td>{NumberPhone}</td>
    <td>{Profession}</td>
    <td>{status}</td>
    <td className="gap__actions">
      <span className="badge1 bg-info">
        <Link to={`/clients/${Id}`} className="text-white">
          <i className="fas fa-edit"></i>
        </Link>
      </span>

      <span className="badge bg-danger" onClick={()=>OnDelete(Id)}>
        <i className="fas fa-trash-alt"></i>
      </span>
    </td>
  </tr>
  )
}

export default RowDetails
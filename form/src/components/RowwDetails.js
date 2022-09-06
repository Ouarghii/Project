import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import './RowDetails.css'

function RowwDetails({Email, Name, Phone, Status, Id, OnDelete}) {
 
  return (
    <tr>
    <th>{Email}</th>
    <td>{Name}</td>
    <td>{Phone}</td>
   
    <td>{Status}</td>
    <td className="gap__actions">
      <span className="badge1 bg-info">
        <Link to={`/boite/${Id}`} className="text-white">
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

export default RowwDetails
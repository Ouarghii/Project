import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import './RowDetails.css'

function RowDetailsT({Email, Fullname,NumberPhone,Nouveautype, status, Id, OnDelete}) {
 
  return (
    <tr>
    <th>{Email}</th>
    <td>{Fullname}</td>
    <td>{NumberPhone}</td>
    <td>{Nouveautype}</td>
    <td>{status}</td>
    <td className="gap__actions">
      <span className="badge1 bg-info">
        <Link to={`/types/${Id}`} className="text-white">
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

export default RowDetailsT
import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form' style={{backgroundColor:'white',marginBottom:'50px'}} >
        <form>
            <label style={{'color': 'black',marginBottom:'2px'}}>Your Name</label>
            <input type='text'/>
          <p>

          </p>

            <label style={{'color': 'black',
          marginBottom:'2px'}}>Email</label>
            <input type='text'/>
            <p>
            
          </p>

            <label style={{'color': 'black',  marginBottom:'2px'}}>Subject</label>
            <input type='text'/>
            <p>
            
          </p>

            <label style={{'color': 'black'}}>Details</label>
            <textarea  rows='6' placeholder= 'Type a short message here'/>
            <p>
            
          </p>
            <button style={{'color': 'black',
          'borderColor':'#000', 'backgroundColor':'grey','&:hover': {
            background: "blue",
         },}} className='btn'>Submit</button>
        </form>

    </div>
  )
}

export default Form
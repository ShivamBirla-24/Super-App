import './Register.css'
import React from 'react'
import Form from './Form/Form'
function Register() {
  return (
    <div className="register-container">
       <div className="leftarea">
            <div className="textarea">
            Discover new things on Superapp
            </div>
       </div>

       <div className="rightarea">
            <div className='heading-form'>
               <h1>Super app</h1>
               <h4>Create your new account</h4>
            </div>
            <Form/>
       </div>
    </div>
  )
}

export default Register
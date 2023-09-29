import './Form.css';
import React, { useState } from 'react';

function Form(){

    let [userDetails,setuserDetails] = useState({
        name:"",
        username:"",
        email:"",
        mobile:"",
    })
    
    let [error,setError] = useState(false);

    let [checkbox,setCheckbox]=useState(false);
    const checkboxClick = ()=>{
        setCheckbox(!checkbox);
    }

    const handleChange = (e)=>{
        let {name,value}= e.target;

        setuserDetails({
            ...userDetails,
            [name]:value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(userDetails.name.length===0 || userDetails.username.length===0 || userDetails.email.length===0 || userDetails.mobile.length===0 || checkbox===false){
            setError(true);
        }

        if(userDetails.name.length!==0 && isValid(/^[a-zA-Z\s]*$/,userDetails.name) && userDetails.username.length!==0 && isValid(/^[a-zA-Z0-9]*$/,userDetails.username) && userDetails.email.length!==0 && isValid(/^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})?$/,userDetails.email) && userDetails.mobile.length!==0 && isValid(/^(?:\d+|)$/,userDetails.mobile) && checkbox){
            localStorage.setItem('name',userDetails.name);
            localStorage.setItem('username',userDetails.username);
            localStorage.setItem('email',userDetails.email);
            localStorage.setItem('mobile',userDetails.mobile);
        }

    }
    
    function isValid(regex,string){
        return regex.test(string)
    }
    

    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className='input-div'>

                    <div>
                        
                        <input type='text' name="name" placeholder='Name' className='input-box' value={userDetails.name} onChange={handleChange}></input>
                    
                        {(error && userDetails.name.length===0)? <p className='warning-msg'>Name can't be empty</p>:""}
                        
                        {(!isValid(/^[a-zA-Z\s]*$/,userDetails.name))? <p className='warning-msg'>
                            Name can only contain alphabets
                        </p>:""}

                    </div>

                    <div>
                        <input type='text' name="username" placeholder='UserName'  className='input-box' onChange={handleChange}></input>

                        {(error && userDetails.username.length===0)? <p className='warning-msg'>Username can't be empty</p>:""}

                        {(!isValid(/^[a-zA-Z0-9]*$/,userDetails.username))? <p className='warning-msg'>
                            Spaces are not allowed
                        </p>:""}

                    
                    </div>

                    <div>
                        <input type='email'placeholder='Email' name='email' className='input-box' onChange={handleChange}></input>

                        {(error && userDetails.email.length===0)? <p className='warning-msg'>Email can't be empty</p>:""}
                    
                        {(!isValid(/^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})?$/,userDetails.email))? <p className='warning-msg'>
                            Email is Invalid
                        </p>:""}
                    </div>

                    <div>
                        <input type='text' placeholder='Mobile' name='mobile' className='mobile input-box' maxLength={10} onChange={handleChange}></input>
                        
                        {(error && userDetails.mobile.length===0)? <p className='warning-msg'>Mobile Number can't be empty</p>:""}

                        {(!isValid(/^(?:\d+|)$/,userDetails.mobile))? <p className='warning-msg'>
                            Invalid Mobile Number
                        </p>:""}

                        
                     </div>

                    <div >
                         <div className="checkbox-div">
                         <input className="checkbox" type='checkbox' name='checkbox' onClick={checkboxClick}></input>
                         <p>Share my registration data with Superapp</p>
                         </div>
                         {(error && checkbox===false)? <p className='warning-msg'>Check this box if you want to proceed</p>:""}

                     </div>
                     
                    
                </div>

                <button className='signup-button'>SIGN UP</button>

            </form>
            <p>By clicking on Sign up. you agree to Superapp <strong>Terms and Conditions of Use</strong></p>
            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <strong>Privacy Policy</strong></p>
        </div>
    )
}

export default Form;
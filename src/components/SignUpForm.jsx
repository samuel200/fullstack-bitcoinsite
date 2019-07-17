import React, { useState } from 'react'

let signupParent;

const validateSignUP = setErrorMessage =>{
    const username = signupParent.querySelector("[name='username']").value;
    const email = signupParent.querySelector("[name='email']").value;
    const password = signupParent.querySelector("[name='password']").value;
    const passwordConfirm = signupParent.querySelector("[name='password-confirm']").value;
    const errorHolder = signupParent.querySelector(".error-message");
    const passwordTest = /[a-zA-Z\d]{8,}/;

    if(!(passwordTest.test(password) && passwordTest.test(passwordConfirm.value))){
        setErrorMessage("Password less than 8 digits")
    }else if(password.value === passwordConfirm.value){
        setErrorMessage("Password does not match")
    }
    setTimeout(()=>{
        errorHolder.style.animation = "slidedown 2s backwards"
    }, 100)
    errorHolder.style.animation = "";
}

const usernameValidation = e =>{
    let input = e.target;
    if(input.value === ""){
        input.classList.remove('valid')
        input.classList.add('invalid')
    }else{
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
}

const emailValidation = e =>{
    let input = e.target;
    let emailTest = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(!emailTest.test(input.value)){
        input.classList.remove('valid')
        input.classList.add('invalid')
    }else{
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
}

const passwordValidation = e =>{
    let input = e.target;
    let passwordTest = /[a-zA-Z\d]{8,}/;
    if(!passwordTest.test(input.value)){
        input.classList.remove('valid')
        input.classList.add('invalid')
    }else{
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
}

export default function LoginForm() {
    let [clicked, setClicked] = useState(false);
    let [confirmClicked, setConfirmClicked] = useState(false)
    let [errorMessage, setErrorMessage] = useState("Error")
    return (
        <div style={ {position: 'relative'} } ref={el=> signupParent = el}>
            <div className="error-message">{ errorMessage }</div>
            <sub>Enter your details to create account.</sub>
            <form action="#" method="post" onSubmit={e=>{ 
                e.preventDefault();
                validateSignUP(setErrorMessage);
                }} >
                <input type="text" name="username" placeholder="Username" onChange={ usernameValidation }/>
                <input type="email" name="email" placeholder="Email" onChange={ emailValidation }/>
                <div className="password-input">
                    <input type={!clicked ? "password" : "text"} name="password" placeholder="password" onChange={ passwordValidation }/>
                    <span>
                        <i className={ !clicked ? "fas fa-eye-slash" : "fas fa-eye"} onClick={ ()=>{
                            setClicked(!clicked)
                        } }></i>
                    </span>
                </div>
                <div className="password-input">
                    <input type={!confirmClicked ? "password" : "text"} name="password-confirm" placeholder="Confirm Password" onChange={ passwordValidation }/>
                    <span>
                        <i className={ !confirmClicked ? "fas fa-eye-slash" : "fas fa-eye"} onClick={ ()=>{
                            setConfirmClicked(!confirmClicked)
                        } }></i>
                    </span>
                </div>
                <input type="submit" value="Register"/>
            
            </form>
        </div>
    )
}

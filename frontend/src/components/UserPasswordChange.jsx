import React, { useState } from 'react'
import axios from 'axios'
import url from '../DomainName'
import '../css/Auth.css'

export default function UserPasswordChange(){
    let [errorMessage, setErrorMessage] = useState("Error");
    let [loading, setLoading] = useState(false);

    const showErrorMessage = (errorHolder, errorMessage)=>{
        setErrorMessage(errorMessage);
        setTimeout(()=>{
            errorHolder.style.animation = "2s slidedown";
        }, 500)
        errorHolder.style.animation = "";
    }

    const onSubmit = form =>{
        const { username, userPassword } = JSON.parse(localStorage.getItem('authenticatedUser'));
        const oldPassword = form.querySelector("input[name='old-password']");
        const newPassword = form.querySelector("input[name='new-password']");
        const errorHolder = form.querySelector("div.error-message");

        if(newPassword.value !== "" && oldPassword.value !== "" && oldPassword.value === userPassword){
            if(newPassword.value === oldPassword.value){
                showErrorMessage(errorHolder, "Password cannot be the same as the previous")
            }else{
                setLoading(true);
                axios.post(url.domain_url + "/password_change/" + username + "/", {password: newPassword.value})
                    .then(response => {
                        setLoading(false);
                        newPassword.value = "";
                        oldPassword.value = "";
                    })
                    .catch(error =>{
                        setLoading(false)
                        showErrorMessage(errorHolder, "Invalid password")
                    })
            }
        }else{
            showErrorMessage(errorHolder, "Field value incorrect")
        }
    }

    return(
        <form method="POST" action={url.domain_url+"/password_change/"} onSubmit={e=>{
            e.preventDefault()
            onSubmit(e.target)    
        }}>
            <h3>Change Password</h3>
            <div style={{position: "relative"}}>
                <div className="error-message">{ errorMessage }</div>
                <input type="password" placeholder="Old Password" name="old-password"/>
                <input type="password" placeholder="New Password" name="new-password"/>
                <i className="fas fa-spinner" style={{display: loading ? "block" : "none"}}></i>
                <input type="submit" value="Submit" disabled={!loading ? false : true} />
            </div>
        </form>
    )
} 
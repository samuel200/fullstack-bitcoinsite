import React, { useState } from 'react'

export default function Withdrawal() {
    let [loading, setLoading] = useState(false);
    let [errorMessage, setErrorMessage] = useState("Error");

    const showErrorMessage = (errorHolder, errorMessage)=>{
        setErrorMessage(errorMessage);
        setTimeout(()=>{
            errorHolder.style.animation = "2s slidedown";
        }, 500)
        errorHolder.style.animation = "";
    }

    const onSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const inputs = form.querySelectorAll("input");
        const errorHolder = form.querySelector("div.error-message");
        let blank = false;

        inputs.forEach(input=>{
            if(input.value == ""){
                showErrorMessage(errorHolder, "All fields are required")
                blank = true;
                return ;
            }
        })

        if(!blank){
            setLoading(true);
            setTimeout(()=>{
                inputs.forEach(input=>{
                    input.value = ""
                })
                setLoading(false);
            }, 4000)
        }
    }
    return (
        <div>
            <h2>Withdrawal</h2>
            <form onSubmit={ onSubmit }>
                <div id="withdrawal-form" style={ {position: 'relative'} }>
                    <div className="error-message">{ errorMessage }</div>
                    <input type="text" name="account-name" placeholder="Account Name"/>
                    <input type="text" name="bank-name" placeholder="Bank Name"/>
                    <input type="text" name="account-number" placeholder="Account Number"/>
                    <input type="text" name="amount" placeholder="Amount"/>
                    <input type="text" name="email" placeholder="Email"/>
                <div>
                    <i className="fas fa-spinner fa-spin" style={{display: loading ? "inline" : "none"}}></i>
                    <input type="submit" value="Submit" disabled={!loading ? false : true}/></div>
                </div>
            </form>
        </div>
    )
}

import React from 'react'
export default function AuthInstructions({ match }) {
    let { authType } = match.params;
    console.log(authType);
    return (
        <div className="instruction-side">
            <div className="overlay">
                <h2>How to get started.</h2>
                <sub>With these few easy steps you will start trading and earning:</sub>
                <ul>
                    <li>First you have to register to get a <b>BitMax</b> trading account by clicking on the "create an account" link.</li>
                    <li>Signin to your newly created account.</li>
                    <li>Fund your account to get started trading, you can fund via  Bitcoin, Card Payment,  Western union  or Money gram</li>
                    <li>Congratulations with the above steps you are ready to start trading</li>
                </ul>
            </div>
        </div>
    )
}

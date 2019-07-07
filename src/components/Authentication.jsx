import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import '../css/Auth.css'
import AuthInstructions from './AuthInstructions';
import AuthForm from './AuthForm';

export default class Authentication extends Component {
    state = {
        authType: this.props.authType
    }
    render() {
        let { authType } = this.state; 
        return (
            <div className="authentication-section">
                <div className="form-holder">
                    <AuthInstructions />
                    <AuthForm  authType={ authType }/>
                </div>
            </div>
        )
    }
}

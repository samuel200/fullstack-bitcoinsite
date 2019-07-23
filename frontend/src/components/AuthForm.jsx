import React from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'


export default function AuthForm({ match, setAuthentication, setAuthenticatedUser }) {
    return(
        <div className="form-side">
            {
                match.params.authType ===  'signup' ? <SignUpForm  setAuthentication={ setAuthentication } setAuthenticatedUser={ setAuthenticatedUser }/>
                : match.params.authType !== 'login' && match.params.authType !== 'signup' ? <Redirect to={ "/auth/login" } /> 
                : <LoginForm setAuthentication={ setAuthentication } setAuthenticatedUser={ setAuthenticatedUser }/>
            }
        </div>
    )
}
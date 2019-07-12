import React from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'


export default function AuthForm({ match }) {
    return(
        <div className="form-side">
            {
                match.params.authType ===  'signup' ? <SignUpForm />
                : match.params.authType !== 'login' && match.params.authType !== 'signup' ? <Redirect to={ "/auth/login" } /> 
                : <LoginForm />
            }
        </div>
    )
}
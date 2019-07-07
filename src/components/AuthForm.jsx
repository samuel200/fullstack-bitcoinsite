import React from 'react'
import { Route } from 'react-router-dom'

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'


export default function AuthForm({ authType }) {
    // return(
    //     <React.Fragment>
    //         <Route path="auth/login" component={ LoginForm } />
    //         <Route path="auth/signup" component={ SignUpForm } />
    //     </React.Fragment>
    // )
    if( authType === "signup"){
        return <div className="form-side"><SignUpForm /></div>
    }
    return <div className="form-side"><LoginForm /></div>
}
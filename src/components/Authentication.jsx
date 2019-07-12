import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import '../css/Auth.css'
import AuthInstructions from './AuthInstructions';
import AuthForm from './AuthForm';

export default class Authentication extends Component {
    render() {
        let { match } = this.props;

        return (
            <div className="authentication-section">
                <div className="form-holder">
                    <Router>
                        <Route exact path={ "/auth"} render={ ()=> <Redirect to="/auth/login" /> } />
                        <Route path={ match.path } component={ AuthInstructions } />
                        <Route path={ `${ match.path }/:authType`} component={ AuthForm } />
                    </Router>
                </div>
            </div>
        )
    }
}

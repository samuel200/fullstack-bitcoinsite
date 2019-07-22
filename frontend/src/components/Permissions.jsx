import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Logo from './Logo'
import Authentication from './Authentication'

export default function Permissions({ logo, match, setAuthentication, setAuthenticatedUser }) {
    return (
        <React.Fragment>
            <div className="form-logo-holder">
                <Logo imageURL={ logo.imageURL } siteName={ logo.siteName }/>
            </div>
            <Router>
                <Route path={`${ match.path }`} component={ props => <Authentication {...props} setAuthentication={ setAuthentication } setAuthenticatedUser={ setAuthenticatedUser }/> } />
            </Router>
        </React.Fragment>
    )
}

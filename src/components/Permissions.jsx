import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Logo from './Logo'
import Authentication from './Authentication'

export default function Permissions({ logo, match }) {
    return (
        <Router>
            <div className="form-logo-holder">
                <Logo imageURL={ logo.imageURL } siteName={ logo.siteName }/>
            </div>
            <Route path={`${ match.path }`} component={ props => <Authentication {...props}/> } />
        </Router>
    )
}

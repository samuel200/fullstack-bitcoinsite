import React from 'react'
import idGenerator from 'react-id-generator'

import LinkItem from './LinkItem'

export default function Footer({ navigations }) {
    return (
        <footer>
            <div className="footer-top">
                <div>
                    <h3>contact us</h3>
                    <a href="mailto:bitmax099@gmail.com">account@bitmax.com</a>
                </div>
                <div id="footer-nav">
                    {
                    navigations.map(link => <LinkItem key={ idGenerator() }link={ link }/>)
                    }
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2005 bitmax investments
            </div>
        </footer>
    )
}
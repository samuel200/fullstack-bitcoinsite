import React from 'react'

export default function Footer({ navigations }) {
    return (
        <footer>
            <div className="footer-top">
                <div>
                    <h3>contact us</h3>
                    <a href="#">account@bitmax.com</a>
                </div>
                <div id="footer-nav">
                    {
                    navigations.map(link => <span>{ link.name }</span>)
                    }
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2014 bitmax investments
            </div>
        </footer>
    )
}

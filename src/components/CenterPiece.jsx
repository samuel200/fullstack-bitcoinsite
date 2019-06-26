import React, { Component } from 'react'

export default class CenterPiece extends Component {
    render() {
        return (
            <div id="center-piece">
                <div id="center-piece-text-region">
                    <h1>Welcome to BitMax</h1>
                    <p className="intro-text" >We put the power in your hands to invest and trade digital currency.</p>
                </div>
                <div id="center-piece-button-region">
                    <button className="center-piece-button">login</button>
                    <button className="center-piece-button">sign up</button>
                </div>
            </div>
        )
    }
}

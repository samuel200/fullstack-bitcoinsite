import React, { Component } from 'react'

export default class CenterPiece extends Component {
    centerPieceStyle = {
        color: "white",
        width: "30%",
        padding: "80px 40px",
        fontSize: "1.5em"
    }

    introTextStyle = {
        fontSize: ".75em", 
        color: "#a4a4a4",
    }

    buttonStyle = {
        borderRadius: "10px",
        padding: "15px 25px",
        border: "none",
        fontSize: "14px",
        textTransform: "uppercase",
        color: "#efefef",
        marginRight: "15px",
        background: "transparent",
        border: "2px solid #efefef"
    }

    render() {
        return (
            <div style={ this.centerPieceStyle }>
                <div id="center-piece-text-region">
                    <h1>Welcome to BitMax</h1>
                    <p style={ this.introTextStyle }>We put the power in your hands to invest and trade digital currency.</p>
                </div>
                <div id="center-piece-button-region">
                    <button style={ this.buttonStyle }>login</button>
                    <button style={ this.buttonStyle }>sign up</button>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CenterPiece extends Component {
    innerHTML = React.createRef();

    componentDidMount(){
        this.props.setPosition("home", this.innerHTML);
    }

    render() {
        return (
            <div id="center-piece">
                <div id="center-piece-text-region" ref={ this.innerHTML }>
                    <h1>Welcome to BitMax</h1>
                    <p className="intro-text" >We put the power in your hands to invest and trade digital currency.</p>
                </div>
                <div id="center-piece-button-region">
                    <Link to="/auth/login" className="center-piece-button">login</Link>
                    <Link to="/auth/signup" className="center-piece-button">sign up</Link>
                </div>
            </div>
        )
    }
}

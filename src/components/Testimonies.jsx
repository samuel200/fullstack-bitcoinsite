import React, { Component } from 'react'
import ReactPlayer from 'react-player'


export default class Testimonies extends Component {
    innerHTML = React.createRef();

    componentDidMount(){
        this.props.setPosition("testimonies", this.innerHTML);
    }

    render() {
        const [ first, second ] = this.props.testimonies;
        return (
            <div id="testimonies" ref={ this.innerHTML }>
                <div>
                    <sub>Get to see</sub>
                    <h1>Some <br/>Satisfied <br/>Customers</h1> 
                </div>
                
                <div id="video-holder">
                    <ReactPlayer url={ first.video } controls={ true } muted={ true } width="350px" height="180px" style={{ marginLeft: "20px"}}/>
                    <ReactPlayer url={ second.video } controls={ true } muted={ true } width="350px" height="180px" style={{ marginLeft: "20px"}}/>
                </div>
            </div>
        )
    }
}
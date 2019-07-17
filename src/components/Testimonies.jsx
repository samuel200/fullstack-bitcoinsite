import React, { Component } from 'react'
import ReactPlayer from 'react-player'


export default class Testimonies extends Component {
    innerHTML = React.createRef();
    testimoniesHolder = React.createRef();
    state = {
        count: 0,
        testimonies: [
            {
                name: "Renard",
                body: "Thanks for making me $10,000 as promised even tho I didn’t really believed as first you guys came through !! .. blessed now",
            },
            {
                name: "Pandey",
                body: "I’m really thankful to BitMax, they made me rich in rupees as I was promised by my broker , I would be trading here for now I strongly believe there system.. thanks"
            },
            {
                name: "Dolly",
                body: "Best trading platform ever .... 100% legitimate I would say that again and again.. thanks guys for getting thing done"
            },
        ]
    }
    componentDidMount(){
        this.props.setPosition("testimonies", this.innerHTML);
        setInterval(this.changeTestimonies, 15000);
    }

    changeTestimonies = ()=>{
        let { testimonies, count } = this.state;
        count++;
        if(count === testimonies.length){
            count = 0;
        }
        this.setState({count});
    }

    render() {
        const [ first, second ] = this.props.testimonies;
        let { count, testimonies } = this.state;
        return (
            <div>
                <div id="text-testimonies" ref={ this.innerHTML }>
                    <div className="cover"></div>
                    <div className="text-testimony-holder">
                        <h2><span>Testimonies</span></h2>
                        <div ref={ this.testimoniesHolder }>
                            <p className="testimony-body">
                                <i class="fa fa-quote-left" aria-hidden="true"></i>
                                { testimonies[count].body }
                                <i class="fa fa-quote-right" aria-hidden="true"></i>
                            </p>
                            <sub>by</sub>
                            <sub className="name">{ testimonies[count].name }</sub>
                        </div>
                    </div>
                </div>
                <div id="testimonies">
                    <div>
                        <sub>Get to see</sub>
                        <h1>Some <br/>Satisfied <br/>Customers</h1> 
                    </div>
                    
                    <div id="video-holder">
                        <ReactPlayer url={ first.video } controls={ true } muted={ true } width="350px" height="180px" style={{ marginLeft: "20px"}}/>
                        <ReactPlayer url={ second.video } controls={ true } muted={ true } width="350px" height="180px" style={{ marginLeft: "20px"}}/>
                    </div>
                </div>
            </div>
            
        )
    }
}
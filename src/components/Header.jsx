import  React, { Component } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';

export default class Header extends Component{
    headerStyle = {
        background: "transparent",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 45px",
        borderBottom: "1px solid #212123",
    }
    render(){
        let { logo, navigations } = this.props;
        return (
            <div style={ this.headerStyle }>
                <Logo 
                    imageURL={ logo.imageURL }
                    siteName={ logo.siteName }/>
                <Navigation 
                    links={ navigations }/>
            </div>
            
        )
    }
}
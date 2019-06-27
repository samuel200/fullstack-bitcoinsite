import  React, { Component } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';


export default class Header extends Component{
    
    render(){
        let { logo, navigations } = this.props;
        return (
            <div id="header">
                <Logo 
                    imageURL={ logo.imageURL }
                    siteName={ logo.siteName }/>
                <Navigation 
                    links={ navigations }/>
            </div>
            
        )
    }
}
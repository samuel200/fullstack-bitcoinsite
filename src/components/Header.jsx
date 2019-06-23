import  React, { Component } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';

export default class Header extends Component{
    render(){
        return (
            <React.Fragment>
                <Logo 
                    imageURL={require("../img/logo.png")}
                    siteName={"BitMax"}/>
                <Navigation 
                    links={["home", "about", "services"]}/>
            </React.Fragment>
            
        )
    }
}
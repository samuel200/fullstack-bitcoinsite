import React, { Component } from 'react'
import Header from './components/Header'

import "./App.css"
import CenterPiece from './components/CenterPiece';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      navigations: [
        {
          id: 1,
          name: "home",
          linkTo: "",
        },
        {
          id: 3,
          name: "services",
          linkTo: "",
        },
        {
          id: 2,
          name: "experts",
          linkTo: "",
        },
        {
          id: 2,
          name: "contacts",
          linkTo: "",
        },
        {
          id: 2,
          name: "How to start?",
          linkTo: "",
        },
        {
          id: 2,
          name: "login/signup",
          linkTo: "",
        },
      ],
      logo:{
        imageURL: require("./img/logo.png"),
        siteName: "BitMax"
      }
    }
  }
  render() {
    return (
      <div>
        <Header 
          navigations={ this.state.navigations }
          logo={ this.state.logo }/>
        <CenterPiece />
      </div>
    )
  }
}

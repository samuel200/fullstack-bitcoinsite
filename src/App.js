import React, { Component } from 'react'
import Header from './components/Header'

import "./App.css"
import CenterPiece from './components/CenterPiece';
import Services from './components/Services'

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
      ],
      logo:{
        imageURL: require("./img/logo.png"),
        siteName: "BitMax"
      },
      services: [
        {
            header: "smart wallet",
            content: "",
            iconClass: "sh-icon-data icon-wallet",
            backgroundImage: "../img/wallet.png",
        },
        {
            header: "instant payout",
            content: "",
            iconClass: "sh-icon-data icon-action-undo",
            backgroundImage: "../img/arrow.png",
        },
        {
            header: "no deposit problems",
            content: "",
            iconClass: "sh-icon-data icon-ban",
            backgroundImage: "../img/nosign.png",
        },
        {
            header: "global",
            content: "",
            iconClass: "sh-icon-data icon-globe-alt",
            backgroundImage: "../img/globe.png",
        },
        {
            header: "simple",
            content: "",
            iconClass: "sh-icon-data icon-check",
            backgroundImage: "../img/check.png",
        },
    ]
    }
  }
  render() {
    return (
      <div>
        <Header 
          navigations={ this.state.navigations }
          logo={ this.state.logo }/>
        <CenterPiece/>
        <Services  services={ this.state.services }/>
      </div>
    )
  }
}

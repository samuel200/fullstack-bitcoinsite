import React, { Component } from 'react'
import Header from './components/Header'

import "./App.css"
import CenterPiece from './components/CenterPiece'
import Services from './components/Services'
import Experts from './components/TeamOfExperts'

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
            iconName: "account_balance_wallet",
            backgroundImage: require("./img/wallet.png"),
        },
        {
            header: "instant payout",
            content: "",
            iconName: "reply",
            backgroundImage: require("./img/arrow.png"),
        },
        {
            header: "no deposit problems",
            content: "",
            iconName: "block",
            backgroundImage: require("./img/nosign.png"),
        },
        {
            header: "global",
            content: "",
            iconName: "language",
            backgroundImage: require("./img/globe.png"),
        },
        {
            header: "simple",
            content: "",
            iconName: "check",
            backgroundImage: require("./img/check.png"),
        },
      ],
      profiles: {
        workers: [
          {
            name: "Jeremy Klark",
            title: "CO-FOUNDER & CEO",
            imageURL: require("./img/jeremy.jpg"),
          },
          {
            name: "Amanda Habib",
            title: "CO-FOUNDER & CTO",
            imageURL: require("./img/amanda.jpg"),
          },
          {
            name: "Arial Saal",
            title: "LEGAL & FINANCE",
            imageURL: require("./img/arial.jpg"),
          },
          {
            name: "Miranda Sinclare",
            title: "STRATEGY & MARKETING",
            imageURL: require("./img/miranda.jpg"),
          },
          {
            name: "Brandon Wulf",
            title: "DEVELOPMENT LEAD",
            imageURL: require("./img/brandon.jpg"),
          },
          {
            name: "Aaron Smith",
            title: "FRONT-END DEVELOPER",
            imageURL: require("./img/aaron.jpg"),
          },
        ],
        advisors:[
          {
            name: "",
            title: "",
            imageURL: ""
          },
        ]
      }
    }
  }
  render() {
    const { navigations, services, profiles } = this.state;
    return (
      <div>
        <Header 
          navigations={ navigations }
          logo={ this.state.logo }/>
        <CenterPiece/>
        <Services  services={ services }/>
        <Experts profiles={ profiles }/>
      </div>
    )
  }
}

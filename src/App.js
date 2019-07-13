import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import "./App.css"


import Home from './components/Home'
import UserDashBoard from './components/UserDashBoard'
import Permissions from './components/Permissions';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      navigations: [
        {
          id: 1,
          name: "home",
          linkTo: null,
        },
        {
          id: 3,
          name: "services",
          linkTo: null,
        },
        {
          id: 2,
          name: "about",
          linkTo: null,
        },
        {
          id: 2,
          name: "experts",
          linkTo: null,
        },
        {
          id: 2,
          name: "testimonies",
          linkTo: null,
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
            name: "James Klark",
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
            name: "Patricia Bright",
            title: "BOARD ADVISOR",
            imageURL: require("./img/patricia.jpg")
          },
          {
            name: "James Lincoln",
            title: "MARKETING ADVISOR",
            imageURL: require("./img/james.jpg")
          },
          {
            name: "Aarav Nath",
            title: "TRADING ADVISOR",
            imageURL: require("./img/aarav.jpg")
          },
        ]
      },
      testimonies:[
        {
          thumbnail: require("./img/thumbnail1.jpg"),
          video: require("./videos/1.mp4")
        },
        {
          thumbnail: require("./img/thumbnail2.jpg"),
          video: require("./videos/2.mp4")
        }
      ]
    }
  }

  setPosition = (title, reference) => {
    this.setState({navigations: this.state.navigations.map( item =>{
      if(item.name === title){
        item.linkTo = reference
      }
      return item;
    })})
  }

  render() {
    const { logo, navigations, services, profiles, testimonies } = this.state;
    return (
      <div>
        <Router>
          <Route exact path="/" render={props => 
          <Home {...props}  
            logo={ logo }
            navigations={ navigations } 
            services={ services }
            profiles={ profiles }
            testimonies={ testimonies }
            setPosition={ this.setPosition }/> 
          } />

          <Route path="/auth" component={ props => <Permissions {...props} logo={ logo }/>} />
          <Route exact path="/user" render={ props => <Redirect to="/auth/login"/>} />
          <Route path="/user/:username" component={ UserDashBoard } />
        </Router>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./App.css"


import Header from './components/Header'
import CenterPiece from './components/CenterPiece'
import Services from './components/Services'
import TeamOfExperts from './components/TeamOfExperts'
import Advisors from './components/Advisors'
import About from './components/About'
import Testimonies from './components/Testimonies'
import Footer from './components/Footer'
import Logo from './components/Logo'
import Authentication from './components/Authentication'
import UserDashBoard from './components/UserDashBoard';

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
          <Route exact path="/" render={()=>{
            return(
              <React.Fragment>
                <Header navigations={ navigations } logo={ this.state.logo }/>
                <CenterPiece setPosition={ this.setPosition }/>
                <Services  services={ services } setPosition={ this.setPosition }/>
                <About  setPosition={ this.setPosition }/>
                <TeamOfExperts profiles={ profiles }  setPosition={ this.setPosition }/>
                <Advisors profiles={ profiles } />
                <Testimonies testimonies={ testimonies } setPosition={ this.setPosition }/>
                <Footer navigations={ navigations }/>
              </React.Fragment>
          )}}/>

          <Route path="/auth/:authType" render={({ match })=>{
            return(
              <React.Fragment>
                <div className="form-logo-holder">
                  <Logo imageURL={ logo.imageURL } siteName={ logo.siteName }/>
                </div>
                <Authentication authType={ match.params.authType }/>
              </React.Fragment>
            )
          }} />
          <Route path="/user/:username" component={ UserDashBoard } />
        </Router>
      </div>
    )
  }
}

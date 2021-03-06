import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import "./App.css"


// import UserDashBoard from './components/UserDashBoard'
// import Permissions from './components/Permissions';
import Loading from './Loading'

let HomeComponent = lazy(()=> import('./components/Home'));
let Permissions = lazy(()=> import('./components/Permissions'));
let UserDashBoard = lazy(()=> import('./components/UserDashBoard'))

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authenticated: false,
      startAuth: null,
      endAuth: null,
      authenticatedUser: {
      },
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
            content: "Our account can serve as a smart wallet for saving and also for investment.",
            iconName: "account_balance_wallet",
            backgroundImage: require("./img/wallet.png"),
        },
        {
            header: "instant payout",
            content: "We offer payments to our users using the best and fastest payment mediums.",
            iconName: "reply",
            backgroundImage: require("./img/arrow.png"),
        },
        {
            header: "no deposit problems",
            content: "We recieve deposits with cards and even bitcoin for the convinience of our investors.",
            iconName: "block",
            backgroundImage: require("./img/nosign.png"),
        },
        {
            header: "global",
            content: "Our services are available to people all around the world interested investing with bitcoin.",
            iconName: "language",
            backgroundImage: require("./img/globe.png"),
        },
        {
            header: "simple",
            content: "We have simple and easy to understand packages for our investors to start earning quickly.",
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

  componentWillMount(){
    if(localStorage.getItem("authenticatedUser")){
      this.setState({
        authenticated: true, 
        authenticatedUser: JSON.parse(localStorage.getItem("authenticatedUser"))
      });
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

  setAuthentication = authenticated =>{
    this.setState({ authenticated })
    return authenticated;
  }

  setAuthenticatedUser = user =>{
    this.setState({authenticatedUser: user})
    setTimeout(()=>{
      this.setState({authenticated: false, authenticatedUser: {}});
      localStorage.removeItem('authenticatedUser');
    }, 1000*3600*3)
  }

  render() {
    const { logo, navigations, services, profiles, testimonies, authenticated, authenticatedUser } = this.state;
    return (
      <Router>
        <Route exact path="/" render={props =>{
          return(
            <Suspense fallback={<Loading />}>
                <HomeComponent {...props}  
                  logo={ logo }
                  navigations={ navigations } 
                  services={ services }
                  profiles={ profiles }
                  testimonies={ testimonies }
                  setPosition={ this.setPosition }/> 
            </Suspense>
          )   
        } 
        } />

        <Route path="/auth" component={ props =>(
          authenticated ? 
          <Redirect to={"/user/"+authenticatedUser.username} /> :
          <Suspense fallback={<Loading />}>
            <Permissions {...props} logo={ logo } setAuthentication={ this.setAuthentication } setAuthenticatedUser={ this.setAuthenticatedUser } />
          </Suspense>
        )} />
        <Route exact path="/user" render={ props => <Redirect to="/auth/login"/>} />
        <Route path="/user/:username" component={ props =>{
          return(
            <Suspense fallback={<Loading />}>
              <UserDashBoard {...props} authenticated={ authenticated } setAuthentication={ this.setAuthentication } setAuthenticatedUser={ this.setAuthenticatedUser } authenticatedUser={ authenticatedUser }/>
            </Suspense>
          )
        }} />
      </Router>
    )
  }
}

import React from 'react'
import { withRouter } from 'react-router-dom'

import Header from './Header'
import CenterPiece from './CenterPiece'
import Services from './Services'
import TeamOfExperts from './TeamOfExperts'
import Advisors from './Advisors'
import About from './About'
import Testimonies from './Testimonies'
import Footer from './Footer'
import HomeMarquese from './HomeMarquese';


export default function ({ logo, navigations, services, profiles, testimonies, setPosition }){
    return(
        <React.Fragment>
            <Header navigations={ navigations } logo={ logo }/>
            <HomeMarquese />
            <CenterPiece setPosition={ setPosition }/>
            <Services  services={ services } setPosition={ setPosition }/>
            <About  setPosition={ setPosition }/>
            <TeamOfExperts profiles={ profiles }  setPosition={ setPosition }/>
            <Advisors profiles={ profiles } />
            <Testimonies testimonies={ testimonies } setPosition={ setPosition }/>
            <Footer navigations={ navigations }/>
        </React.Fragment>
    )
}
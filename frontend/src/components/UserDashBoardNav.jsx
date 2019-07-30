import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import Logo from './Logo'
// import UserNavProfile from './UserNavProfile'
import UserNavigationHolder from './UserNavigationHolder'

function UserDashBoardNav({ user, navigations, changeCurrentPage, setAuthenticatedUser, setAuthentication, match, hidden, setHidden }) {
    // const { userName, profileImage } = user;
    const { userName } = user;

    return (
        <div id="user-dashboard-nav">
            <div className="nav-top">
                <Logo imageURL={ require("../img/logo.png") } siteName="BitMax" url={match.url}/>
                <button onClick={ e =>{
                    if(e.target.style.display !== "none"){
                        setHidden(!hidden);
                    }
                }}><i className="fas fa-bars" onClick={ e =>{
                    e.target.parentNode.click();
                }}></i></button>
            </div>
            {/* <UserNavProfile imageURL={ profileImage } userName={ userName } hidden={ hidden }/> */}
            <UserNavigationHolder navigations={ navigations } 
                userName={ userName } 
                setAuthenticatedUser={setAuthenticatedUser} 
                setAuthentication={ setAuthentication } 
                changeCurrentPage={ changeCurrentPage } 
                hidden={ hidden }
                setHidden={ setHidden }/>
        </div>
    )
}

export default withRouter(UserDashBoardNav);
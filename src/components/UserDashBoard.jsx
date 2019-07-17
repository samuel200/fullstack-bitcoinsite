import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

import UserDashBoardNav from './UserDashBoardNav'
import UserDashBoardBody from './UserDashBoardBody'

import '../css/user-dashboard.css'


export default class UserDashBoard extends Component{
    state = {
        user: {
            profileImage: null,
            userName: this.props.authenticatedUser.username
        },
        navigations: [
            {
                name: "profile",
                to: "profile",
                iconClass: "fas fa-user"
            },
            {
                name: "withdrawal",
                to: "withdrawal",
                iconClass: "fas fa-layer-group"
            },
            {
                name: "deposit",
                to: "deposit",
                iconClass: "fas fa-money-check-alt"
            },
            {
                name: "packages",
                to: "packages",
                iconClass: "fas fa-gift"
            },
            {
                name: "FAQ",
                to: "faq",
                iconClass: "fas fa-envelope"
            },
        ],
        userProfile:{
            username: this.props.authenticatedUser.username,
            email: "johndoe@email.com",
            traderId: 138983492,
            balance: 55
        },
        current_page: "profile",
        faq:[
            {
                header: "How do i change the password of my trading account?",
                content: "You can change the password of your trading account via two means. \n•One is by clicking on change password in your client cabinet after a succesful login \n•You can as well try a password reset if you do not remember your password by clicking on"
            },
            {
                header: "What is the account based currency?",
                content: "Our account currency is domiciled in US dollars "
            },
            {
                header: "How long does it take to setup my account?",
                content: "To process your account doesn't take more than 5 minutes after registration."
            },
            {
                header: "What is the Deposit payment method accepted?",
                content: "All clients funds are seperate to operating funds in segregated accounts. We maintain sufficient liquid capital to cover all clients deposits. "
            },
            {
                header:  "Forgotten password?",
                content: " From login page. \n•Enter your registered email address for the reset link to be sent to you \n•Click or copy out the reset link sent to you to create new password. "
            }
        ]
    }

    changeCurrentPage = page =>{
        this.setState({current_page: page})
    }

    render() {
        const{ user, navigations, current_page, userProfile, faq } = this.state;
        return (
            <div className="user-dashboard">
                {
                    this.props.authenticated ?
                    <React.Fragment>
                        <UserDashBoardNav user={ user } navigations={ navigations } changeCurrentPage={ this.changeCurrentPage }/>
                        <UserDashBoardBody  current_page={ current_page } userProfile={ userProfile } faq={ faq }/>
                    </React.Fragment>
                    : <Redirect to="/auth/login"/>
                }
            </div>
        )
    }
}

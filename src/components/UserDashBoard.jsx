import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import UserDashBoardNav from './UserDashBoardNav'
import UserDashBoardBody from './UserDashBoardBody'

import '../css/user-dashboard.css'


export default class UserDashBoard extends Component{
    state = {
        user: {
            profileImage: null,
            userName: "John Doe"
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
                name: "support",
                to: "support",
                iconClass: "fas fa-question"
            },
            {
                name: "FAQ",
                to: "faq",
                iconClass: "fas fa-envelope"
            },
        ],
        userProfile:{
            username: "john doe",
            email: "johndoe@email.com",
            traderId: 138983492,
            balance: 55
        },
        current_page: "profile",
        faq:[
            {
                header: "How do i change the password of my trading account?",
                content: "You can change the password of your trading account via two means. •One is by clicking on change password in your client cabinet after a succesful login •You can as well try a password reset if you do not remember your password by clicking on \"forgotten password?\" from login page. •Enter your registered email address for the reset link to be sent to you •Click or copy out the reset link sent to you to create new password. "
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
                <UserDashBoardNav user={ user } navigations={ navigations } changeCurrentPage={ this.changeCurrentPage }/>
                <UserDashBoardBody  current_page={ current_page } userProfile={ userProfile } faq={ faq }/>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

import UserDashBoardNav from './UserDashBoardNav'
import UserDashBoardBody from './UserDashBoardBody'

import '../css/user-dashboard.css'


export default class UserDashBoard extends Component{
    state = {
        plans: [
            {
                name: "BASIC PLAN",
                cost: "$1000",
                interestRate: "ROI: 0.25 daily",
                instantPayment: "Instant Payment",
                paymentMethod: "All Payment Methods Accepted",
            },
            {
                name: "STANDARD PLAN",
                cost: "$2000",
                interestRate: "ROI: 0.5% daily",
                instantPayment: "Instant Payment",
                paymentMethod: "All Payment Methods Accepted",
            },
            {
                name: "PREMIUM PLAN",
                cost: "$5000",
                interestRate: "ROI: 1% daily",
                instantPayment: "Instant Payment",
                paymentMethod: "All Payment Methods Accepted",
            },
            {
                name: "PRO PLAN",
                cost: "$10000",
                interestRate: "ROI: 1.5% daily",
                instantPayment: "Instant Payment",
                paymentMethod: "All Payment Methods Accepted",
            },
        ],
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
        const{ navigations, current_page, faq, plans } = this.state;
        return (
            <div className="user-dashboard">
                {
                    this.props.authenticated ?
                    <React.Fragment>
                        <UserDashBoardNav user={ this.props.authenticatedUser } navigations={ navigations } changeCurrentPage={ this.changeCurrentPage } setAuthentication={ this.props.setAuthentication } setAuthenticatedUser={ this.props.setAuthenticatedUser }/>
                        <UserDashBoardBody changeCurrentPage={ this.changeCurrentPage } current_page={ current_page } userProfile={ this.props.authenticatedUser } faq={ faq } plans={ plans }/>
                    </React.Fragment>
                    : <Redirect to="/auth/login"/>
                }
            </div>
        )
    }
}

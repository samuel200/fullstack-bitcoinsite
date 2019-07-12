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
            },
            {
                name: "withdrawal",
                to: "withdrawal",
            },
            {
                name: "deposit",
                to: "deposit",
            },
            {
                name: "support",
                to: "support",
            },
            {
                name: "FAQ",
                to: "faq",
            },
        ],
        current_page: "profile"
    }

    changeCurrentPage = page =>{
        this.setState({current_page: page})
    }

    render() {
        const{ user, navigations, current_page } = this.state;
        return (
            <div className="user-dashboard">
                <UserDashBoardNav user={ user } navigations={ navigations } changeCurrentPage={ this.changeCurrentPage }/>
                <UserDashBoardBody  current_page={ current_page }/>
            </div>
        )
    }
}

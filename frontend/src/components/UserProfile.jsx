import React from 'react'

import BitcoinWidget from './BitcoinWidget';
import UserProfileDetails from './UserProfileDetails';
import UserPasswordChange from './UserPasswordChange';
import UserContactEmailChange from './UserContactEmailChange';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
 
const App = () => (
  <TradingViewWidget
    symbol="NASDAQ:AAPL"
    theme={Themes.DARK}
    locale="us"
    autosize
  />
);

export default function UserProfile({ userProfile }) {
    return (
        <div id="user-profile">
            <h2>Dashboard</h2>
            <BitcoinWidget />
            <App />
            <UserProfileDetails userProfile={ userProfile }/>
            <div className="profile-change-form-holder">
                <UserPasswordChange />
                <UserContactEmailChange userProfile={ userProfile }/>
            </div>
        </div>
    )
}

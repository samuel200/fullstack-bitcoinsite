import React from 'react'
import UserProfile from './UserProfile';
import FAQ from './FAQ';
import Packages from './Packages';
import Deposit from './Deposit';
import Withdrawal from './Withdrawal';

export default function UserDashBoardBody({ current_page, userProfile, faq, plans, changeCurrentPage }) {
    let page = <div></div>
    
    switch (current_page.toLowerCase()){
        case 'faq':
            page = <FAQ faq={ faq }/>
            break;

        case 'profile':
            page = <UserProfile userProfile={ userProfile }/>
            break; 

        case 'packages':
            page = <Packages plans={ plans } changeCurrentPage={ changeCurrentPage }/>
            break;

        case 'deposit':
            page = <Deposit packageName="special"/>
            break;
        case 'withdrawal':
            page = <Withdrawal />
            break;
            
        default:
            page = <div />
            break;
    }
    return (
        <div id="user-dashboard-body">
            { page }
        </div>
    )
}

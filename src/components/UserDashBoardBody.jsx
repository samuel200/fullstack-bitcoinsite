import React from 'react'
import UserProfile from './UserProfile';
import FAQ from './FAQ';

export default function UserDashBoardBody({ current_page, userProfile, faq }) {
    let page = <div></div>
    
    switch (current_page.toLowerCase()){
        case 'faq':
            page = <FAQ faq={ faq }/>
            console.log(current_page)
            break;

        case 'profile':
            page = <UserProfile userProfile={ userProfile }/>
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

import React from 'react'


export default function UserNavigationHolder({ navigations, changeCurrentPage}) {
    return (
        <div id="user-navigation-section">
            <h4>Navigations</h4>
            {
                navigations.map( item => <a href="#" onClick={ e =>{
                    e.preventDefault();
                    changeCurrentPage(item.name);
                }}>{ item.name }</a>)
            }
        </div>
    )
}



import React from 'react'

const hiddenStyle ={
    animation: "hide 1s forwards"
},

visibleStyle = {
    animation: "show 1s forwards"
};

export default function UserNavigationHolder({ navigations, changeCurrentPage, hidden}) {
    return (
        <div id="user-navigation-section" style={ hidden ? hiddenStyle : visibleStyle }>
            <h4>Navigations</h4>
            {
                navigations.map( item => <a href="#" onClick={ e =>{
                    e.preventDefault();
                    changeCurrentPage(item.name);
                }} style={{display: 'flex', justifyContent: 'space-evenly'}}><i className={ item.iconClass }></i> <i>{ item.name }</i></a>)
            }
            <a href="#" style={{display: 'flex', justifyContent: 'space-evenly'}}><i className="fas fa-power-off"></i><i>sign out</i></a>
        </div>
    )
}



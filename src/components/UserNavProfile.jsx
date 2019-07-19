import React, { useState } from 'react'

const defaultProfileImageURL = require("../img/default-profile-picture.jpg");
// const defaultProfileImageURL = require("../img/james.jpg");
const fileInput = React.createRef()

function uploadFile(){
    fileInput.current.click();
}

const hiddenStyle ={
    animation: "hide 2s forwards"
},

visibleStyle = {
    animation: "show 2s forwards"
};

export default function UserNavProfile({ imageURL, userName, hidden }) {
    // <form action="#" method="post" encType="multipart/form-data">

    return (
        <form>
            <div className="user-nav-profile" style={hidden ? hiddenStyle : visibleStyle }>
                <img src={imageURL ? imageURL : defaultProfileImageURL } alt="profile-pic" className="profile-img" />
                <div><button onClick={ uploadFile }><i className="fas fa-camera"></i></button></div>
                <input type="file" name="profile-image" className="no-display" ref={ fileInput }/>
                <sub><b>{ userName }</b></sub>
            </div>
        </form>
    )
}

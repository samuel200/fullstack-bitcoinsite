import React from 'react'

// const defaultProfileImageURL = require("../img/default-profile-picture.jpg
const defaultProfileImageURL = require("../img/james.jpg");

export default function UserNavProfile({ imageURL, userName }) {
    return (
        <div className="user-nav-profile">
            <img src={imageURL ? imageURL : defaultProfileImageURL } alt="profile-pic" className="profile-img" />
            <sub><b>{ userName }</b></sub>
        </div>
    )
}

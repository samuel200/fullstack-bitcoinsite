import React from 'react'

export default function Profile({ profile }) {
    const { imageURL, name , title } = profile;
    return (
        <div className="profile">
            <img src={ imageURL } alt="profile" className="profile-picture"/>
            <p className="profile-name">{ name }</p>
            <p className="title">{ title }</p>
        </div>
    )
}

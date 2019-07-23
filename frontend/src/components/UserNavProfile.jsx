import React, { Suspense } from 'react'
import axios from 'axios'
import url from '../DomainName'

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
    const onSubmit = e =>{
        e.preventDefault();
        
        const formData = new FormData(this);
        console.log(formData);
        axios({
            method: 'post',
            url: url.domain_url+"/profile/"+ username + "/",
            contentType: false,
            cache: false,
            processData: false,
            data: {"profile-image": formData}
            })
            .then(response=>{

            }).catch(error=>{
                alert("error in profile upload")
            })
    }

    const { username } = JSON.parse(localStorage.getItem('authenticatedUser'))
    return (
        <form method="post" action={ url.domain_url+"/profile/"+ username + "/" } onSubmit={ onSubmit } enctype="multi-part/form-data">
            <div className="user-nav-profile" style={hidden ? hiddenStyle : visibleStyle }>
                <Suspense fallback={ <div className="fa-3x"><i class="fas fa-circle-notch fa-spin"></i></div> }>
                    <img src={imageURL ? imageURL : defaultProfileImageURL } alt="profile-pic" className="profile-img" />
                </Suspense>
                <div><button onClick={ uploadFile }><i className="fas fa-camera"></i></button></div>
                <input type="file" name="profile-image" className="no-display" ref={ fileInput }/>
                <sub><b>{ userName }</b></sub>
                <input type="submit" value="upload"/>
            </div>
        </form>
    )
}

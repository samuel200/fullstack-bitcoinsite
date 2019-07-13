import React from 'react'

export default function UserPasswordChange(){
    return(
        <form>
            <h3>Change Password</h3>
            <div>
                <input type="password" placeholder="Old Password"/>
                <input type="password" placeholder="New Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
} 
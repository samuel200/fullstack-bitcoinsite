import React from 'react'

export default function UserContactEmailChange({ userProfile }) {
    return (
        <form>
            <h3>Change Email</h3>
            <div>
                <input type="email" value={ `${ userProfile.email }` }/>
                <input type="email" placeholder="New Email"/>
                <input type="email" placeholder="Confirm Email"/>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
} 

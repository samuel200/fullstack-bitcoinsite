import React from 'react'

export default function LoginForm() {
    return (
        <div>
            <sub>Enter your details to create account.</sub>
            <form action="#" method="post">
                <input type="text" name="username" placeholder="username"/>
                <input type="email" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="password"/>
                <input type="password" name="password-confirm" placeholder="password"/>
                <input type="submit" value="signup"/>
            </form>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
    return (
        <div>
            <sub>Enter your username and password to login.</sub>
            <form action="#" method="post">
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password"/>
                <input type="submit" value="login"/>
            </form>
            <div className="recovery-and-creation">
                <a href="#">Forgot password?</a>{"  "}
                <Link to="/auth/signup">Create an account.</Link>
            </div>
        </div>
    )
}

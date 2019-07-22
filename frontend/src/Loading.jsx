import React from 'react'
import './loading.css'


export default function Loading({ style }){
    return(
        <div id="loading-section" className="loaded" style={ style }>
            <div className="left"></div>
            <div className="right"></div>
            <img src={ require("./ball-triangle-1.svg") } alt="loading"/>
        </div>
    )
}
import React from 'react'

export default function ServiceCard() {
    let serviceCardStyle = {
        width: "300px",
        height: "300px",
        boxSizing: "border-box",
        borderRadius: "10px",
        padding: "40px 25px",
        textAlign: "center",
        background: "rgb(40, 40, 40)"
    }

    let iconStyle = {
        fontSize: "32px",
        fontWeight: "light",
        color: "#c98524",
    }

    return (
        <div style={ serviceCardStyle }>
            <i className="sh-icon-data icon-wallet" style={ iconStyle }></i>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque alias facilis id dolorum odio nesciunt ratione expedita ducimus libero! Est nam corporis esse! Sequi ex perspiciatis architecto, odit labore ipsa.</p>
        </div>
    )
}

import React from 'react'

export default function LinkItem({ link }) {
    let linkStyle = {
        color: "inherit",
        textDecoration: "none",
        padding: "5px 15px",
        textTransform: "uppercase",
        fontSize: ".8em",
        fontWeight: "bold",
    }

    return (
        <a href={ link.linkTo } style={ linkStyle }>{ link.name }</a>
    )
}

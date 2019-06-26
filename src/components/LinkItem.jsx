import React from 'react'

export default function LinkItem({ link }) {
    return (
        <a href={ link.linkTo } className="link-item" >{ link.name }</a>
    )
}

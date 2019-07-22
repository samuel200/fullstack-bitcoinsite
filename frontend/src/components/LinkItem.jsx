import React from 'react'

function scroll(el){
    console.log(el)
    el.current.scrollIntoView({behavior: "smooth"});
    console.log("OVER HERE scrolling")
}

export default function LinkItem({ link }) {

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className="link-item" onClick={ (e)=>{
            e.preventDefault();
            scroll(link.linkTo);
        } }>{ link.name }</a>
    )
}

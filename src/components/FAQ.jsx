import React from 'react'

export default function FAQ({ faq }) {
    return (
      <div>
        <h2>FAQ</h2>
        {faq.map(question =>{
          return (
            <div>
              <div className="question-header">{ question.header }</div>
              <ul>{ question.content.split("•").map(lines=> <li style={ {width: "90%"} }>{ lines }</li>) }</ul>
            </div>
          )
        })}
      </div>
    )
}

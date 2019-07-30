import React from 'react'

export default function PlanCard({ planType, changeCurrentPage }) {
    return (
        <div className="plan-card" onClick={()=>{
            changeCurrentPage("deposit")
        }}>
            <p className="plan-name">{ planType.name }</p>
            <h1 className="plan-cost">{ planType.cost }</h1>
            <span>{ planType.interestRate }</span>
            <span>{ planType.instantPayment }</span>
            <span>{ planType.paymentMethod }</span>
            {/* <button className="start">Get Started</button> */}
        </div>
    )
}

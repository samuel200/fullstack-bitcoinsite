import React from 'react'

export default function PlanCard({ planType }) {
    return (
        <div className="plan-card">
            <p className="plan-name">{ planType.name }</p>
            <h1 className="plan-cost">{ planType.cost }</h1>
            <span>{ planType.interestRate }</span>
            <span>{ planType.instantPayment }</span>
            <span>{ planType.paymentMethod }</span>
            {/* <button className="start">Get Started</button> */}
        </div>
    )
}

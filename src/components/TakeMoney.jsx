import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${ data.email }`);
      });
    });
  }
 
  render() {
    return (
      <StripeCheckout
        name={ this.props.packageName }
        currency="USD"
        token={ this.onToken }
        ComponentClass="div"
        stripeKey="pk_test_tt2Rmb4Z5ptgh9Bdy1iXzYxV008NonLVne"
      />
    )
  }
}
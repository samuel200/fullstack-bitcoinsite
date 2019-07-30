import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../DomainName'
// import TakeMoney from './TakeMoney';

export default function Deposit({ packageName }) {
    let [bitcoinAddress, setBitcoinAddress] = useState("");
    useEffect(()=>{
        if(bitcoinAddress === ""){
            axios.get(url.domain_url+"/bitcoin_address/")
            .then(response => {
                setBitcoinAddress(response.data.address)
            })
            .catch(error=> error)
        }
    }
    ,[])

    return (
        <div id="deposit-section" style={{width: '80%'}}>
            {/* <input type='text' name="ammount" placeholder="Enter payment ammount" style={{
                padding: "15px",
                borderRadius: "5px",
            }}/> */}
            <div className="bitcoin-address">
                Bitcoin Wallet Address: { bitcoinAddress }
            </div>
            <sub> 
                when transaction is done contact our customer live service personel with proof of payment to get balance update.<br />
                For other means of payment contact our customer live service personel.
            </sub>
            {/* <TakeMoney packageName={ packageName } /> */}
        </div>
    )
}

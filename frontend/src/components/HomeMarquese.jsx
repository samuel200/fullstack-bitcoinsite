import React, { Component, createRef }from 'react'

export default class HomeMarquese extends Component {
    scriptHolder = createRef();

    componentDidMount(){
    const scriptContent = {
        "symbols": [
            {
                "title": "S&P 500",
                "proName": "OANDA:SPX500USD"
            },
            {
                "title": "Shanghai Composite",
                "proName": "INDEX:XLY0"
            },
            {
                "title": "EUR/USD",
                "proName": "FX_IDC:EURUSD"
            },
            {
                "title": "BTC/USD",
                "proName": "BITSTAMP:BTCUSD"
            },
            {
                "title": "ETH/USD",
                "proName": "BITSTAMP:ETHUSD"
            }
            ],
            "colorTheme": "dark",
            "isTransparent": true,
            "displayMode": "adaptive",
            "locale": "en"
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.async = true;
        script.innerHTML = JSON.stringify(scriptContent);
        this.scriptHolder.current.appendChild(script);
    }

    render() {
        return (
            <div class="tradingview-widget-container" ref={ this.scriptHolder }>
            <div class="tradingview-widget-container__widget"></div>
            <div class="tradingview-widget-copyright">
                <a href="https://www.tradingview.com" rel="noopener" target="_blank"><span class="blue-text">Ticker Tape</span></a> by TradingView
                </div>
            </div>
        )
    }
}

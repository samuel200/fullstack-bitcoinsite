import React from 'react'

export default function BitcoinWidget() {

    return (
        <div className="bitcoin-widget-holder">
            <iframe frameBorder="0" scrolling="no" allowtransparency="0" src="https://bitcoinaverage.com/en/widgets?widgetType=price&bgcolor=#FFFFFF&bwidth=1&bcolor=#CCCCCC&cstyle=round&fsize=16px&ffamily=arial&fcolor=#000000&bgTransparent=solid&chartStyle=none&lastUpdateTime=block&currency0=USD&total=1" ></iframe>
            <iframe frameBorder="0" scrolling="no" allowtransparency="0" src="https://bitcoinaverage.com/en/widgets?widgetType=conversion&bgcolor=#FFFFFF&bwidth=1&bcolor=#CCCCCC&cstyle=round&fsize=16px&ffamily=arial&fcolor=#000000&bgTransparent=solid&chartStyle=none&lastUpdateTime=block&currency0=USD&total=1" ></iframe>
            <iframe frameBorder="0" scrolling="no" allowtransparency="0" src="https://bitcoinaverage.com/en/widgets?widgetType=price&bgcolor=#FFFFFF&bwidth=1&bcolor=#CCCCCC&cstyle=round&fsize=16px&ffamily=arial&fcolor=#000000&bgTransparent=solid&chartStyle=block&lastUpdateTime=block&currency0=USD&total=1" ></iframe>
        </div>
    )
}

import React from 'react'

export default function Coin() {
  return (
    <div className = 'coin-container'>
        <div className="coin-row">
            <div className='coin'>
                <img src={image} alt='crypto'/>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'> ${price}</p>
                <p className='coin-volume'>${volume.toLocaleString()}</p>
            </div>
        </div>
    </div>
  )
}

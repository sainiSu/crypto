import React from 'react'
import { useSelector } from 'react-redux'

function CryptoTable() {

    const assets = useSelector((state) => state.crypto.assets)

  return (
    
      <table className  = "cryypto-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Logo</th>
                <th>Name</th>
                <th>Symbol</th>     
                <th>Price</th>
                <th>1h %</th>
                <th>24h %</th>
                <th>7d %</th>
                <th>Market Cap</th>
                <th>24h Volume</th>
                <th>Circulating Supply</th>
                <th>Max Supply</th>
                <th>7D Chart</th>
                </tr>
            </thead>
            <tbody>
            {assets.map((asset, idx) => (
                    <tr key={asset.id}>
                        <td>{idx + 1}</td>
                        <td><img src ={asset.logo}alt='{asset.name}' className='crypto-logo'></img></td>
                        <td>{asset.name}</td>
                        <td>{asset.symbol}</td>
                        <td>${asset.price}</td>
                        <td className= {asset.change1h >=0 ? 'green' : 'red' }>{asset.change1h}</td>
                        <td className= {asset.change24h >=0 ? 'green' : 'red' }>{asset.change24h}{asset.change_24h}%</td>
                        <td className="neutral">{asset.change7d}%</td>
                        <td>${asset.marketCap.toLocaleString()}</td>
                        <td>${asset.volume24h.toLocaleString()}</td>
                        <td>{asset.supply.toLocaleString()}</td>
                        <td>{asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}</td>
                        <td><img src={asset.chart} alt="7D chart"  className='crypto-chart'/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    
  )
}

export default CryptoTable

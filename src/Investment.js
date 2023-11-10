import React, { useState } from 'react'
import './Investment.css'
import logo from './FizLogo.png'

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(0)
  const [numberOfYears, setNumberOfYears] = useState(0)
  const [returnRate, setReturnRate] = useState(0)
  const [investmentData, setInvestmentData] = useState([])

  const calculateInvestment = () => {
    const newData = []

    let currentAmount = investmentAmount
    const startYear = 2023 // Change the start year as needed

    for (let year = startYear; year < startYear + numberOfYears; year++) {
      const profit = currentAmount * (returnRate / 100)
      currentAmount += profit

      newData.push({
        year,
        investmentAmount: currentAmount - profit,
        profit,
        returnRate,
        totalAmount: currentAmount,
      })
    }

    setInvestmentData(newData)
  }

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Investment Calculator</h2>
      <label>
        Investment Amount:
        <input
          type="number"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Number of Years:
        <input
          type="number"
          value={numberOfYears}
          onChange={(e) => setNumberOfYears(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Return Rate (%):
        <input
          type="number"
          value={returnRate}
          onChange={(e) => setReturnRate(Number(e.target.value))}
        />
      </label>
      <br />
      <button onClick={calculateInvestment}>Calculate</button>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Amount</th>
            <th>Profit</th>
            <th>Return Rate</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {investmentData.map((data) => (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.investmentAmount.toFixed(2)}</td>
              <td>{data.profit.toFixed(2)}</td>
              <td>{data.returnRate.toFixed(2)}%</td>
              <td>{data.totalAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InvestmentCalculator

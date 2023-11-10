import logo from './FizLogo.png'
import './App.css'
import InvestmentCalculator from './Investment'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InvestmentCalculator></InvestmentCalculator>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  )
}

export default App

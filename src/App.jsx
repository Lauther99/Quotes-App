import { useState } from 'react'
import './App.css'
import quotes from './assets/quotes.json'
import bgcolor from './assets/backgrounds.json'
import QuoteCard from './components/QuoteCard'

function App() {
  const [quote, setQuote] = useState(quotes[randomNumberQuotes()])
  const [styleFormat, setStyleFormat] = useState({
    backgroundImage: bgcolor[randomNumberFormat()].backgroundImage,
    color: bgcolor[randomNumberFormat()].fontcolor
  })

  function randomNumberQuotes() {
    const max = quotes.length - 1
    const min = 0
    return Math.floor(Math.random() * (max - min) + min);
  }
  function randomNumberFormat() {
    const max = bgcolor.length - 1
    const min = 0
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="general" style={styleFormat}>
      <QuoteCard
        quote={quote} setQuote={setQuote}
        styleFormat={styleFormat} setStyleFormat={setStyleFormat}
        randomNumber={randomNumberQuotes} 
        randomNumberFormat =  {randomNumberFormat}/>

    </div>
  )
}

export default App

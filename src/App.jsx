import { useState } from 'react'
import './App.css'
import quotes from './assets/quotes.json'
import bgcolor from './assets/backgrounds.json'
import QuoteCard from './components/QuoteCard'

function App() {

  const randomFormatNumber = randomNumber(bgcolor)
  const [quote, setQuote] = useState(quotes[randomNumber(quotes)])
  const [styleFormat, setStyleFormat] = useState({
    backgroundImage: bgcolor[randomFormatNumber].backgroundImage,
    color: bgcolor[randomFormatNumber].fontcolor
  })

  function randomNumber(array) {
    const max = array.length - 1
    const min = 0
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="general" style={styleFormat}>
      <QuoteCard
        quote={quote} setQuote={setQuote}
        styleFormat={styleFormat} setStyleFormat={setStyleFormat}
        randomNumber={randomNumber}/>
    </div>
  )
}

export default App

import React from 'react';
import quotes from '../assets/quotes.json'
import bgcolor from '../assets/backgrounds.json'

const Button = ({ styleFormat, setQuote, setStyleFormat, randomNumber, randomNumberFormat }) => {
    const buttonColor = { backgroundColor: styleFormat.color }
    function randomQuote() {
        setQuote(quotes[randomNumber()])
        setStyleFormat({
            backgroundImage: bgcolor[randomNumberFormat()].backgroundImage,
            color: bgcolor[randomNumberFormat()].fontcolor
        })
    }
    return (
        <div>
            <button onClick={randomQuote} className='primary-button' style={buttonColor}>
                <i className='bx bx-chevron-right bx-lg'></i></button>
        </div>
    );
};

export default Button;

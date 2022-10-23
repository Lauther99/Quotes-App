import React from 'react';
import quotes from '../assets/quotes.json'
import bgcolor from '../assets/backgrounds.json'

const Button = ({ styleFormat, setQuote, setStyleFormat, randomNumber}) => {
    const buttonBg = { backgroundColor: styleFormat.color} // para el formato del boton
    
    function randomQuote() {
        const randomFormatNumber = randomNumber(bgcolor)
        setQuote(quotes[randomNumber(quotes)])
        setStyleFormat({
            backgroundImage: bgcolor[randomFormatNumber].backgroundImage,
            color: bgcolor[randomFormatNumber].fontcolor
        })
    }
    return (
        <div>
            <button onClick={randomQuote} className='primary-button' style={buttonBg}>
                <i className='bx bx-chevron-right bx-lg'></i></button>
        </div>
    );
};

export default Button;

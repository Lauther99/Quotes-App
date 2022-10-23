import React from 'react';
import Button from './Button';

const QuoteCard = ({ quote, setQuote, styleFormat, setStyleFormat, randomNumber}) => {
    return (
        <div className='card'>
            <i className='bx-pull-left bx bxs-quote-alt-left bx-lg' />
            <div className='quote-line'>
                <h1>{quote.quote}</h1>
                <h2>{quote.author}</h2>
            </div>
            <Button setQuote={setQuote}
                styleFormat={styleFormat} setStyleFormat={setStyleFormat}
                randomNumber={randomNumber}/>
        </div>
    );
};

export default QuoteCard;
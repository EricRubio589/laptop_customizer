import React from 'react';
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const Summary = (props) => {

    let options = Object.keys(props.selected).map(key => {
    
        return (
        <div className="summary__option" key={key}>
            <div className="summary__option__label">{key} </div>
            <div className="summary__option__value">{props.selected[key].name}</div>
            <div className="summary__option__cost">
            {USCurrencyFormat.format(props.selected[key].cost)}
            </div>
        </div>
        );
    });

    return options;


}

export default Summary;
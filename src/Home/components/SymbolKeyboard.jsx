    import React from 'react';
    import './symbolKeyboard.css';
    const symbols = ['★', '❤', '✔', '✈', '☎', '♛', '☼', '☾', '♠', '♣', '♦', '♧'];

    const SymbolKeyboard = ({ onSelectSymbol }) => {
    return (
        <div className="symbol-keyboard">
        {symbols.map((symbol, index) => (
            <button
            key={index}
            className="symbol-button"
            onClick={() => onSelectSymbol(symbol)}
            >
            {symbol}
            </button>
        ))}
        </div>
    );
    };

    export default SymbolKeyboard;

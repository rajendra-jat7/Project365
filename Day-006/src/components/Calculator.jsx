import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString()); // Use a safe math library in production!
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '(', ')', '%', '+', 
    '7', '8', '9', '/', 
    '4', '5', '6', '*', 
    '1', '2', '3', '-', 
    '0', 'C', '=', '.'
  ];

  return (
    <div className="calculator">
      <div className="calculator-display">{input || '0'}</div>
      <div className="calculator-buttons">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className={`button ${button === '=' ? 'equals' : ''} ${button === 'C' ? 'clear' : ''}`}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

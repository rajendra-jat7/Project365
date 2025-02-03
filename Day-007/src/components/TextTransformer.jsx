import { useState } from 'react';
import './TextTransformer.css';

const TextTransformer = () => {
  const [text, setText] = useState('');

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleReverse = () => {
    setText(text.split('').reverse().join(''));
  };

  const handleClear = () => {
    setText('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  return (
    <div className="container">
      <h1>Text Transformer</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
        className="text-input"
      ></textarea>
      <div className="button-group">
        <button onClick={handleUppercase}>Uppercase</button>
        <button onClick={handleLowercase}>Lowercase</button>
        <button onClick={handleReverse}>Reverse</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
};

export default TextTransformer;

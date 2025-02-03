import React, { useState } from 'react';
import './ColorBoxGenerator.css';

const ColorBoxGenerator = () => {
  const [color, setColor] = useState('');
  const [boxes, setBoxes] = useState([]);

  const addColorBox = () => {
    if (color.trim() !== '') {
      setBoxes([...boxes, color]);
      setColor('');
    }
  };

  return (
    <div className="container">
      <h1>Color Box Generator</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a color (e.g., red, #ff0000)"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={addColorBox}>Add Box</button>
      </div>
      <div className="boxes-section">
        {boxes.map((boxColor, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: boxColor }}
          >
            {boxColor}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorBoxGenerator;

import React, { useState } from 'react';
import {Container, DropdownButton, Dropdown} from 'react-bootstrap';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColors, setShowColors] = useState(false);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  const handleDropdownToggle = (isOpen) => {
    setShowColors(!selectedColor); 
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-light shadow p-4 pr-5">
        <h1 className='pb-3'>Color Picker</h1>
        <DropdownButton
          title="Pick a color"
          onClick={() => setShowColors(!showColors)}
          show={showColors}
          onToggle={handleDropdownToggle}
        >
          {colors.map((color) => (
            <Dropdown.Item
              key={color}
              onClick={() => handleColorSelect(color)}
            >
              <div
                style={{
                  backgroundColor: color,
                  width: '20px',
                  height: '20px',
                  marginRight: '5px',
                }}
              ></div>
              {color}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        {selectedColor && (
          <p>
            Selected color:
            <span
            style={{
              display: 'inline-block',
              backgroundColor: selectedColor,
              width: '20px',
              height: '20px',
              marginLeft: '5px',
              paddingTop:'5px'
            }}
            ></span>
          </p>
        )}
      </div>
    </Container>
  );
};

export default ColorPicker;

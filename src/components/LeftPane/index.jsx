import React, { useState } from 'react';
import "./index.css";



function App(props) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const selectedOption = props.options[selectedOptionIndex]

  function handleSliderChange({ target }) {
    props.setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: target.value }
      })
    })
  }

  return (
    <>
      <div className="sidebar">
        {props.options.map((option, index) => {
          return (
            <button key={index}
            className={`sidebar-item ${index === selectedOptionIndex ? 'active' : ''}`}
            onClick={() => setSelectedOptionIndex(index)}
          >
            {option.name}
          </button>
          )
        })}
      </div>
      <div className="slider-container">
      <input
        type="range"
        className="slider"
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        onChange={handleSliderChange}
      />
    </div>
    </>
  )
}

export default App;

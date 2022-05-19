import React, { useState } from 'react';
import './App.css';
import CheckBox from './CheckBox';

function App() {
  const [checked, setChecked] = useState(true);
  const [display2ndText, setDisplay2ndText] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClick = (even: React.MouseEvent) => {
    // This set the toggle the target state to true or false after some delay.
    setTimeout(() => setDisplay2ndText(!display2ndText), 50);
  };

  return (
    <div>
      <CheckBox
        label='Show text?'
        checked={checked}
        onChange={handleChange}
      />
      {checked &&
        <p>How are you?</p>
      }
      <div>
        <button type="button" onClick={handleClick}>
          Toggle the 2nd text to show or hide after some delay
        </button>
        {display2ndText &&
          <p>How are you again?</p>
        }
      </div>
    </div>
  );
}

export default App;

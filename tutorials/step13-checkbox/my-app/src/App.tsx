import React, { useState } from 'react';
import './App.css';
import CheckBox from './CheckBox';

function App() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <CheckBox
        label='Did you eat?'
        checked={checked}
        onChange={handleChange}
      />
      <p>You ate?: {String(checked)}</p>
    </div>
  );
}

export default App;

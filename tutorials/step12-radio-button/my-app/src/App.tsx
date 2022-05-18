import React, { useState } from 'react';
import './App.css';
import RadioButtons from './RadioButtons';

function App() {
  const options = [
    { label: 'Honda', value: 'honda' },
    { label: 'Ford', value: 'ford' },
    { label: 'Kia', value: 'kia' },
  ];

  const [value, setValue] = useState('ford');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <RadioButtons
        label='What car do you choose?'
        name='car'
        options={options}
        value={value}
        onChange={handleChange}
      />
      <p>You chose: {value}</p>
    </div>
  );
}

export default App;

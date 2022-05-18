import React, { useEffect, useState } from 'react';
import './App.css';
import DropDown from './DropDown';

function App() {
  const options = [
    { label: 'Honda', value: 'honda' },
    { label: 'Ford', value: 'ford' },
    { label: 'Kia', value: 'kia' },
  ];

  const [value, setValue] = React.useState('ford');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <DropDown
        label='What car do you drive?'
        options={options}
        value={value}
        onChange={handleChange}
      />
      <p>You chose: {value}</p>
    </div>
  );
}

export default App;

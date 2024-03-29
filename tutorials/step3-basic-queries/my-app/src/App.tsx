import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div>
      <CustomInput value={text} onChange={handleChange}>
        Input:
      </CustomInput>
      <p>You typed: {text ? text : ' ... '}</p>
    </div>
  );
}

interface CustomInputProps {
  children: React.ReactNode;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function CustomInput({ children, value, onChange }: CustomInputProps) {
  return (
    <div>
      <label htmlFor='search'>{children}</label>
      <input
        id='search'
        type='text'
        value={value}
        placeholder='Example'
        onChange={onChange} />
    </div>
  );
}

export default App;

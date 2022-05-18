import React from 'react';

interface RadioButtonsProps {
  label: string;
  name: string;
  value: string;
  options: { label: string, value: string }[];
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function RadioButtons({ label, name, value, options, onChange }: RadioButtonsProps) {
  return (
    <label>
      {label}
      {options.map((option) => (
        <div key={option.value}>
          <input type='radio' id={option.value}
            value={option.value} name={name}
            checked={value === option.value}
            onChange={onChange} />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </label>
  );
}

export default RadioButtons;

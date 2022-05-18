import React from 'react';

interface DropDownProps {
  label: string;
  value: string;
  options: {label: string, value: string}[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

function DropDown({ label, value, options, onChange }: DropDownProps) {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}

export default DropDown;

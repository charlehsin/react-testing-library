import React from 'react';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function CheckBox({ label, checked, onChange }: CheckBoxProps) {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export default CheckBox;

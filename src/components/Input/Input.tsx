import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  inputType: string;
  inputValue?: string;
  inputOnChange?: React.ChangeEventHandler<HTMLInputElement>;
  inputPlaceholder?: string;
  inputClassName?: string;
  checked?: boolean;
}

const Input = ({
  inputType,
  inputValue,
  inputOnChange,
  inputPlaceholder,
  inputClassName,
  checked,
}: InputProps) => {
  return (
    <label>
      <input
        className={inputClassName && styles[inputClassName]}
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={inputOnChange}
        checked={checked}
      />
    </label>
  );
};

export default Input;

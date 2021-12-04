import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  inputType: string;
  inputValue?: string | number;
  inputPlaceholder: string;
  inputClassName?: string;
}

const Input = ({
  inputType,
  inputValue,
  inputPlaceholder,
  inputClassName,
}: InputProps) => (
  <label>
    <input
      className={inputClassName && styles[inputClassName]}
      type={inputType}
      value={inputValue}
      placeholder={inputPlaceholder}
    />
  </label>
);

export default Input;

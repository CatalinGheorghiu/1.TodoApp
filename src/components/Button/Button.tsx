import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  buttonType: 'button' | 'submit' | 'reset';
  buttonText: string;
  buttonClassName?: string;
}

const Button = ({ buttonType, buttonText, buttonClassName }: ButtonProps) => (
  <button
    className={buttonClassName && styles[buttonClassName]}
    type={buttonType}>
    {buttonText}
  </button>
);

export default Button;

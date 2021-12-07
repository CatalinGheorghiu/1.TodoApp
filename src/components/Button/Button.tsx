import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  buttonType: 'button' | 'submit' | 'reset';
  buttonClick: () => void;
  buttonText: string;
  buttonClassName?: string;
}

const Button = ({
  buttonType,
  buttonText,
  buttonClick,
  buttonClassName,
}: ButtonProps) => (
  <button
    className={buttonClassName && styles[buttonClassName]}
    type={buttonType}
    onClick={buttonClick}>
    {buttonText}
  </button>
);

export default Button;

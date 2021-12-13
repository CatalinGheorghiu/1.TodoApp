import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  buttonType: 'button' | 'submit' | 'reset';
  buttonClick: () => void;
  buttonText?: string;
  buttonClassName?: string;
  children?: React.ReactElement;
}

const Button = ({
  buttonType,
  buttonText,
  buttonClick,
  buttonClassName,
  children,
}: ButtonProps) => (
  <button
    className={buttonClassName && styles[buttonClassName]}
    type={buttonType}
    onClick={buttonClick}>
    {buttonText && buttonText}
    {children && children}
  </button>
);

export default Button;

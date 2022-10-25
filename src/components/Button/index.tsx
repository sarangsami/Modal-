import React, { ReactNode } from "react";
import './styles.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children,className } = props;
  return <button className={`button ${className}`} {...props}>{children}</button>;
};

export default Button;

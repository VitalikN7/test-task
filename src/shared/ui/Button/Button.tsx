// react
import React from "react";
// styles
import styles from "./Button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const classNames = [
    styles.button,
    styles[variant],
    size !== "medium" ? styles[size] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

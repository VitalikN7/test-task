// react
import React from "react";
// styles
import styles from "./Input.module.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  isRequired?: boolean;
}

export const Input = ({
  label,
  error,
  isRequired,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label}
          {isRequired && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        className={`${styles.input} ${error ? styles.error : ""} ${className}`}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  isRequired?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  isRequired,
  className = "",
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label}
          {isRequired && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea
        className={`${styles.textarea} ${error ? styles.error : ""} ${className}`}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  isRequired?: boolean;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  isRequired,
  options,
  className = "",
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label}
          {isRequired && <span className={styles.required}>*</span>}
        </label>
      )}
      <select
        className={`${styles.select} ${error ? styles.error : ""} ${className}`}
        {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

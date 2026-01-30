import { type ChangeEvent } from "react";
import styles from "./TextInput.module.css";

type TextInputProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "password" | "email";
  error?: string;
  required?: boolean;
  disabled?: boolean;
};

export const TextInput = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  required,
  disabled,
}: TextInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
      />

      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

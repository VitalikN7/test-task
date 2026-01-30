import { type ChangeEvent } from "react";
import styles from "./Textarea.module.css";

type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  error?: string;
  required?: boolean;
  disabled?: boolean;
};

export const Textarea = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
  error,
  required,
  disabled,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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

      <textarea
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        className={`${styles.textarea} ${error ? styles.errorTextarea : ""}`}
      />

      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

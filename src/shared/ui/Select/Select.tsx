import styles from "./Select.module.css";
import { RequestCategory } from "entities/request";

type Props = {
  label?: string;
  value: string;
  options: RequestCategory[];
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
};

export const Select = ({
  label,
  value,
  options,
  onChange,
  error,
  required,
  disabled,
}: Props) => {
  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`${styles.select} ${error ? styles.errorSelect : ""}`}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

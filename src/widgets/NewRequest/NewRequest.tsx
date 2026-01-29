// features
import { CreateRequestForm } from "features/create-request/ui/CreateRequestForm";
// styles
import styles from "./NewRequest.module.css";

export const NewRequest = () => {
  return (
    <div className={styles.container}>
      <CreateRequestForm />
    </div>
  );
};

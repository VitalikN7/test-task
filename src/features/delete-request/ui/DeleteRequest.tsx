// router
import { useNavigate } from "react-router";
// shared
import { Button } from "shared/ui/Button/Button";
// model
import { useDeleteRequest } from "../model/useDeleteRequest";
// styles
import styles from "./DeleteRequest.module.css";

interface DeleteRequestButtonProps {
  requestId: string;
  requestTitle: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const DeleteRequest = ({
  requestId,
  requestTitle,
  onSuccess,
  onCancel,
}: DeleteRequestButtonProps) => {
  const { deleteRequest } = useDeleteRequest();

  const navigation = useNavigate();

  const handleConfirmDelete = () => {
    deleteRequest(requestId);
    onSuccess?.();
    navigation("/requests");
  };

  return (
    <div className={styles.content}>
      <p className={styles.text}>
        Вы уверены, что хотите удалить заявку <strong>"{requestTitle}"</strong>?
      </p>

      <div className={styles.actions}>
        <Button variant="secondary" onClick={onCancel}>
          Отмена
        </Button>
        <Button variant="danger" onClick={handleConfirmDelete}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

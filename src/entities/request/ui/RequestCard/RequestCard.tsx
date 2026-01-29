// entities
import type { Request } from "entities/request";
// styles
import styles from "./RequestCard.module.css";
// lib
import { formatDate } from "shared/lib";

interface RequestCardProps {
  request: Request;
  onClick: () => void | Promise<void>;
}

export const RequestCard = ({ request, onClick }: RequestCardProps) => {
  return (
    <div className={styles.card_container} onClick={onClick}>
      <h2>{request.title}</h2>
      <p>{`Создана ${formatDate(request.createdAt)}`}</p>
    </div>
  );
};

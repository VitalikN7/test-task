// router
import { useNavigate } from "react-router";
import { useAllRequest } from "features/all-request/model/useAllRequest";
// entities
import { RequestCard } from "entities/request";
// shared
import { Button } from "shared/ui/Button/Button";
// styles
import styles from "./RequestList.module.css";

export const RequestList = () => {
  //* роутинг
  const navigate = useNavigate();
  // * получение всех заявок
  const allRequests = useAllRequest();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Управление заявками</h1>
        </div>
        <Button variant="primary" onClick={() => navigate("/requests/new")}>
          Создать заявку
        </Button>
      </div>
      <h3>Список заявок</h3>
      <div className={styles.list}>
        {allRequests.length === 0 ? (
          <p>Заявок пока нет</p>
        ) : (
          allRequests.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              onClick={() => navigate(`/requests/${request.id}`)}
            />
          ))
        )}
      </div>
    </div>
  );
};

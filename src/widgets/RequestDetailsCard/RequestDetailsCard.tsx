// react
import { useState } from "react";
// router
import { useParams } from "react-router";
// shared
import { Button } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { formatDate, getCategoryLabel } from "shared/lib";
import { useRequestDetails } from "features/all-request/model/useAllRequest";
import { EditRequestForm } from "features/edit-request/ui/EditRequestForm";
import { DeleteRequest } from "features/delete-request/ui/DeleteRequest";
// styles
import styles from "./RequestDetailsCard.module.css";

export const RequestDetailsCard = () => {
  // * модалки редактирования и удаления
  const [isModalOpen, setIsModalOpen] = useState({
    delete: false,
    edit: false,
  });
  //* id из адресной строки
  const { id } = useParams();
  // * получение детали заявки по id
  const request = useRequestDetails(id ? id : "");

  return (
    <div className={styles.card_container}>
      <h2 className={styles.main_title}>Подробнее о заявке</h2>
      <div className={styles.inner_card_container}>
        <div className={styles.header}>
          <h3 className={styles.title}>{`Название ${request?.title}`}</h3>
        </div>
        <p className={styles.description}>{`Описание: ${request?.description}`}</p>
        <span className={styles.category}>
          {`Категория: ${request?.category && getCategoryLabel(request.category)}`}
        </span>
        <div className={styles.meta}>
          <span className={styles.date}>
            Создано: {request?.createdAt && formatDate(request.createdAt)}
          </span>
        </div>
        <div className={styles.actions}>
          <Button
            variant="secondary"
            size="small"
            onClick={() => setIsModalOpen({ ...isModalOpen, edit: true })}>
            Редактировать
          </Button>
          <Button
            variant="danger"
            size="small"
            onClick={() => setIsModalOpen({ ...isModalOpen, delete: true })}>
            Удалить
          </Button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen.edit || isModalOpen.delete}
        onClose={() => setIsModalOpen({ delete: false, edit: false })}
        title="Редактирование заявки">
        {request && isModalOpen.edit && (
          <EditRequestForm
            request={request}
            onSuccess={() => setIsModalOpen({ ...isModalOpen, edit: false })}
            onCancel={() => setIsModalOpen({ ...isModalOpen, edit: false })}
          />
        )}
        {request && isModalOpen.delete && (
          <DeleteRequest
            requestId={request?.id}
            requestTitle={request?.title}
            onCancel={() => setIsModalOpen({ ...isModalOpen, delete: false })}
            onSuccess={() => setIsModalOpen({ ...isModalOpen, delete: false })}
          />
        )}
      </Modal>
    </div>
  );
};

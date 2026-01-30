// react
import React from "react";
import { useState } from "react";
// features
import { RequestFormFields } from "features/request-form/ui/RequestFormFields";
// shared/ui
import { Button } from "shared/ui/Button/Button";
// model
import { useEditRequest } from "../model/useEditRequest";
// lib
import { validateForm } from "shared/lib/validationRequest";
// types
import type { Request } from "entities/request";
import type { FormData } from "entities/request";
// styles
import styles from "./EditRequestForm.module.css";

interface EditRequestFormProps {
  request: Request;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const EditRequestForm = ({
  request,
  onSuccess,
  onCancel,
}: EditRequestFormProps) => {
  //* редактирование заявки
  const { updateRequest } = useEditRequest(request.id);
  const [formData, setFormData] = useState<FormData>({
    title: request.title,
    description: request.description,
    category: request.category,
  });
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});
  //* обработка сабмита формы
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    //* валидация
    const errors = validateForm(formData.title, formData.description);
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    //* обновление заявки
    updateRequest({
      title: formData.title.trim(),
      description: formData.description.trim(),
      category: formData.category,
    });

    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <RequestFormFields
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
      />

      <div className={styles.actions}>
        {onCancel && (
          <Button type="button" variant="primary" onClick={onCancel}>
            Отмена
          </Button>
        )}
        <Button type="submit" variant="primary">
          Сохранить изменения
        </Button>
      </div>
    </form>
  );
};

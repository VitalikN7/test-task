// react
import React from "react";
import { useState } from "react";
// entities and types
import { RequestCategory } from "entities/request";
import type { FormData } from "entities/request";
// shared/ui
import { Button } from "shared/ui/Button/Button";
import { Input, Textarea } from "shared/ui/Input/Input";
// model
import { useEditRequest } from "../model/useEditRequest";
// lib
import { validateForm } from "shared/lib/validationRequest";
// types
import type { Request } from "entities/request";
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
      <Input
        label="Название заявки"
        value={formData.title}
        onChange={(e) => {
          setFormData((prev) => ({ ...prev, title: e.target.value }));
          if (errors.title) setErrors((prev) => ({ ...prev, title: undefined }));
        }}
        placeholder="Введите название"
        isRequired
        error={errors.title}
      />

      <Textarea
        label="Описание"
        value={formData.description}
        onChange={(e) => {
          setFormData((prev) => ({ ...prev, description: e.target.value }));
          if (errors.description)
            setErrors((prev) => ({ ...prev, description: undefined }));
        }}
        placeholder="Введите описание"
        rows={4}
        isRequired
        error={errors.description}
      />

      <div className={styles.field}>
        <label htmlFor="category" className={styles.label}>
          Категория
        </label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              category: e.target.value as RequestCategory,
            }))
          }
          className={styles.select}>
          <option value={RequestCategory.General}>Общие вопросы</option>
          <option value={RequestCategory.Incident}>Инцидент</option>
          <option value={RequestCategory.Complaint}>Жалоба</option>
          <option value={RequestCategory.Support}>Поддержка</option>
        </select>
      </div>

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

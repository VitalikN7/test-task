// react
import React from "react";
import { useState } from "react";
// router
import { useNavigate } from "react-router";
// entities and types
import { RequestCategory } from "entities/request";
import type { FormData } from "entities/request";
// shared
import { Button } from "shared/ui/Button/Button";
import { Input, Textarea } from "shared/ui/Input/Input";
// model
import { useCreateRequest } from "../model/useCreateRequest";
// lib
import { validateForm } from "shared/lib/validationRequest";
// styles
import styles from "./CreateRequestForm.module.css";

interface CreateRequestFormProps {
  onSuccess?: () => void;
}

export const CreateRequestForm = ({ onSuccess }: CreateRequestFormProps) => {
  //* создание заявки
  const { createRequest } = useCreateRequest();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    category: RequestCategory.General,
  });
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

  const navigate = useNavigate();
  //* обработка сабмита формы
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    //* валидация
    const errors = validateForm(formData.title, formData.description);
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    //* создание заявки
    createRequest({
      title: formData.title.trim(),
      description: formData.description.trim(),
      category: formData.category,
    });

    //* сброс формы
    setFormData({ title: "", description: "", category: RequestCategory.General });
    setErrors({});

    onSuccess?.();
    navigate("/requests");
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
        <Button type="submit" variant="primary">
          Создать заявку
        </Button>
      </div>
    </form>
  );
};

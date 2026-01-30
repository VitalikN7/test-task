// react
import React from "react";
import { useState } from "react";
// router
import { useNavigate } from "react-router";
// features
import { RequestFormFields } from "features/request-form/ui/RequestFormFields";
// shared
import { Button } from "shared/ui/Button/Button";
// model
import { useCreateRequest } from "../model/useCreateRequest";
// lib
import { validateForm } from "shared/lib/validationRequest";
// types
import { RequestCategory, type FormData } from "entities/request";
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
      <RequestFormFields
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
      />

      <div className={styles.actions}>
        <Button type="submit" variant="primary">
          Создать заявку
        </Button>
      </div>
    </form>
  );
};

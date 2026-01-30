// react
import React from "react";
// entities and types
import { RequestCategory } from "entities/request";
import type { FormData } from "entities/request";
// shared/ui
import { TextInput } from "shared/ui/TextInput/TextInput";
import { Textarea } from "shared/ui/Textarea/Textarea";
import { Select } from "shared/ui/Select/Select";
// types props
interface RequestFormFieldsProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: { title?: string; description?: string };
  setErrors: React.Dispatch<
    React.SetStateAction<{ title?: string; description?: string }>
  >;
}

export const RequestFormFields = ({
  formData,
  errors,
  setErrors,
  setFormData,
}: RequestFormFieldsProps) => {
  return (
    <>
      <TextInput
        label="Название заявки"
        value={formData.title}
        onChange={(e: string) => {
          setFormData((prev) => ({ ...prev, title: e }));
          if (errors.title) setErrors((prev) => ({ ...prev, title: undefined }));
        }}
        placeholder="Введите название"
        required={true}
        error={errors.title}
      />

      <Textarea
        label="Описание"
        value={formData.description}
        onChange={(e: string) => {
          setFormData((prev) => ({ ...prev, description: e }));
          if (errors.description)
            setErrors((prev) => ({ ...prev, description: undefined }));
        }}
        placeholder="Введите описание"
        rows={4}
        required={true}
        error={errors.description}
      />

      <Select
        label="Категория"
        value={formData.category.value}
        onChange={(e: string) => {
          const selected = (Object.values(RequestCategory).find((c) => c.value === e) ??
            RequestCategory.General) as RequestCategory;
          setFormData((prev) => ({ ...prev, category: selected }));
        }}
        options={[
          RequestCategory.General,
          RequestCategory.Incident,
          RequestCategory.Complaint,
          RequestCategory.Support,
        ]}
      />
    </>
  );
};

import { RequestCategory } from "entities/request";

export const categoryLabels: Record<string, string> = {
  [RequestCategory.General.value]: "Общие вопросы",
  [RequestCategory.Incident.value]: "Инцидент",
  [RequestCategory.Complaint.value]: "Жалоба",
  [RequestCategory.Support.value]: "Поддержка",
};

export const getCategoryLabel = (category: RequestCategory): string => {
  return categoryLabels[category.value] || category.value;
};

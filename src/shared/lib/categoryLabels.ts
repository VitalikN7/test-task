import { RequestCategory } from "entities/request";

export const categoryLabels: Record<RequestCategory, string> = {
  [RequestCategory.General]: "Общие вопросы",
  [RequestCategory.Incident]: "Инцидент",
  [RequestCategory.Complaint]: "Жалоба",
  [RequestCategory.Support]: "Поддержка",
};

export const getCategoryLabel = (category: RequestCategory): string => {
  return categoryLabels[category] || category;
};

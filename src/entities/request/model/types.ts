export const RequestCategory = {
  General: {
    value: "general",
    label: "Общий вопрос",
  },
  Incident: {
    value: "incident",
    label: "Инцидент",
  },
  Complaint: {
    value: "complaint",
    label: "Жалоба",
  },
  Support: {
    value: "support",
    label: "Поддержка",
  },
} as const;

export type RequestCategory = (typeof RequestCategory)[keyof typeof RequestCategory];

export interface Request {
  id: string;
  title: string;
  description: string;
  category: RequestCategory;
  createdAt: string;
}

export interface RequestsState {
  requests: Request[];
}

export interface FormData {
  title: string;
  description: string;
  category: RequestCategory;
}

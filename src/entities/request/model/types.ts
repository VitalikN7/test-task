export const RequestCategory = {
  General: "general",
  Incident: "incident",
  Complaint: "сomplaint",
  Support: "support",
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

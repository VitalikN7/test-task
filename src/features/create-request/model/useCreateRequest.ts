// redux-hooks
import { useAppDispatch } from "app/providers/store/redux-hooks";
// entities
import { createRequest } from "entities/request";
import type { Request } from "entities/request";

export const useCreateRequest = () => {
  const dispatch = useAppDispatch();

  const handleCreateRequest = (data: Omit<Request, "id" | "createdAt">) => {
    dispatch(createRequest(data));
  };

  return {
    createRequest: handleCreateRequest,
  };
};

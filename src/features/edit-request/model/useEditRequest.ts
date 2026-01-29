// react-hooks
import { useAppDispatch } from "app/providers/store/redux-hooks";
// entities
import { updateRequest } from "entities/request";
// types
import type { Request } from "entities/request";

export const useEditRequest = (requestId: string) => {
  const dispatch = useAppDispatch();

  const handleUpdateRequest = (updates: Partial<Omit<Request, "id" | "createdAt">>) => {
    dispatch(
      updateRequest({
        id: requestId,
        data: updates,
      }),
    );
  };

  return {
    updateRequest: handleUpdateRequest,
  };
};

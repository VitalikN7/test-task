// redux-hooks
import { useAppDispatch } from "app/providers/store/redux-hooks";
// entities
import { deleteRequest } from "entities/request";

export const useDeleteRequest = () => {
  const dispatch = useAppDispatch();

  const handleDeleteRequest = (id: string) => {
    dispatch(deleteRequest(id));
  };

  return {
    deleteRequest: handleDeleteRequest,
  };
};

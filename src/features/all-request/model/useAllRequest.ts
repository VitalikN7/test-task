// redux-hooks
import { useAppSelector } from "app/providers/store/redux-hooks";
// entities
import { selectAllRequests } from "entities/request";

export const useAllRequest = () => useAppSelector(selectAllRequests);

export const useRequestDetails = (id: string) => {
  const requests = useAppSelector(selectAllRequests);
  return requests.find((request) => request.id === id);
};

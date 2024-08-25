import { apiServer } from "./apiServer";
import { IProduct } from "./apiServer.interface";

export const getPost = async () => {
  const url = `/products`;
  return apiServer<IProduct[]>(url, "GET");
};

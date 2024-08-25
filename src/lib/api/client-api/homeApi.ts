import apiClient from "./apiClient";

export const getPost = async () => {
  const { data } = await apiClient.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

export const getPostById = async (id: string) => {
  const { data } = await apiClient.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

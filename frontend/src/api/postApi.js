import api from "./axios";

export const getMyPosts = () => api.get("/posts").then((res) => res.data);

export const createPost = (formData) =>
  api
    .post("/posts", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => res.data);

export const deletePost = (id) => api.delete(`/posts/${id}`).then((res) => res.data);

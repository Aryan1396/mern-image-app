import api from "./axios";

//register a new user
export const registerUser = (data) => api.post("/auth/register", data).then((res) => res.data);
//login existing user
export const loginUser = (data) => api.post("/auth/login", data).then((res) => res.data);
//logout user
export const logoutUser = () => api.post("/auth/logout").then((res) => res.data);
//get logged-in user info
export const fetchMe = () => api.get("/auth/me").then((res) => res.data);

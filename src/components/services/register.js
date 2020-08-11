import axios from "axios";

export const register = async (name, email, password) => {
  const response = await axios.post("http://localhost:4000/user/signUp", {
    name,
    email,
    password,
  });

  if (response.data.tokens) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

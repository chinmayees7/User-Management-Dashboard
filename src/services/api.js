import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data.map(user => ({
    id: user.id,
    firstName: user.name.split(" ")[0],
    lastName: user.name.split(" ")[1] || "",
    email: user.email,
    department: user.company.name, // Placeholder
  }));
};

export const addUser = async (user) => {
  const response = await axios.post(API_URL, user);
  return { ...user, id: response.data.id };
};

export const updateUser = async (user) => {
  await axios.put(`${API_URL}/${user.id}`, user);
  return user;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

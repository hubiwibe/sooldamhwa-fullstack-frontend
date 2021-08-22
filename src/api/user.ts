import axios from 'axios';

const apiUrl: string = `${process.env.REACT_APP_API_URL as string}/users`;

export const getUsers = async () => {
  const response = await axios.get(`${apiUrl}`);
  return response.data;
};

export const addUser = async (name: string) => {
  const response = await axios.post(`${apiUrl}`, { name });
  return response.data;
};

export const deleteUser = async (name: string) => {
  const response = await axios.delete(`${apiUrl}/${name}`);
  return response.status === 204 ? name : response.statusText;
};

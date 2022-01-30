import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

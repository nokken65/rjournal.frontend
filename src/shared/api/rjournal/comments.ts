import { apiInstance } from './base';

export const getComments = () => {
  return apiInstance.get('comments.json');
};

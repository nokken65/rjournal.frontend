import { apiInstance } from './base';

export const getPosts = () => {
  return apiInstance.get('posts.json');
};

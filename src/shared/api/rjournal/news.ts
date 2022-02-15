import { apiInstance } from './base';

export const getNews = () => {
  return apiInstance.get('news.json');
};

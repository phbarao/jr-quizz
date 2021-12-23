import { create } from 'axios';

const api = create({
  baseURL: `https://opentdb.com`,
});

export default api;

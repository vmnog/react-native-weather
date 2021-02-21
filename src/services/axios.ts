import axios from 'axios';
// @ts-ignore
import { API_KEY } from '@env';

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
  params: {
    appid: API_KEY,
    lang: 'pt_br',
  },
});

export default api;

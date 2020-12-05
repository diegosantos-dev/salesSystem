import axios from 'axios';
import urls from 'static/urls';
import { basePath } from 'static/endpoints';
import { history } from 'utils/routers';

const API = axios.create({
  baseURL: basePath,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    const responseStatus = error.response.status;
    if (responseStatus === 401) {
      localStorage.clear();
      history.push(urls.ROUTES.HOME);
    }
    if (responseStatus === 500) {
      alert('Erro: 500 - Erro desconhecido!');
    }
    throw error;
  }
);

export default API;

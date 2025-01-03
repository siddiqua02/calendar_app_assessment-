// src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com/api'
});

export const fetchCompanies = () => api.get('/companies');
export const addCompany = (company) => api.post('/companies', company);
export const updateCompany = (id, company) => api.put(`/companies/${id}`, company);
export const deleteCompany = (id) => api.delete(`/companies/${id}`);
// Similarly, for communication methods and actions

import axios from 'axios';
import type { CheckList, Farmer } from '@/services/checklist/types';

const api = axios.create({
  baseURL: 'http://challenge-front-end.bovcontrol.com',
});

export const getChecklist = async (): Promise<CheckList> => {
  const response = await api.get('/v1/checkList');
  return response.data;
};

export const getChecklistID = async (id?: string): Promise<Farmer> => {
  const response = await api.get(`/v1/checkList/${id}`);
  return response.data;
};

export const setChecklist = async (data: Farmer[]): Promise<void> => {
  await api.post('/v1/checkList', { checklists: data });
};

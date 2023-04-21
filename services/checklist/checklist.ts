import axios from 'axios';
import type { CheckList, Farmer } from '@/services/checklist';

const api = axios.create({
  baseURL: 'http://challenge-front-end.bovcontrol.com',
});

export const getAllFarms = async (): Promise<CheckList> => {
  // TODO: handle errors
  const response = await api.get('/v1/checkList');
  return response.data;
};

export const getOneFarmByID = async (id?: string): Promise<Farmer> => {
  // TODO: handle errors
  const response = await api.get(`/v1/checkList/${id}`);
  return response.data;
};

export const setNewFarm = async (data: Farmer[]): Promise<void> => {
  // TODO: handle errors
  await api.post('/v1/checkList', { checklists: data });
};

export const deleteFarmByID = async (id?: string): Promise<void> => {
  // TODO: handle errors
  const response = await api.delete(`/v1/checkList/${id}`);
  return response.data;
};

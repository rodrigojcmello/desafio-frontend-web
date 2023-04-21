import axios from 'axios';
import type { CheckList, Farmer } from '@/services/checklist/types';

const api = axios.create({
  baseURL: 'http://challenge-front-end.bovcontrol.com/v1',
});

export const getChecklist = async (): Promise<CheckList> => {
  try {
    const response = await api.get('/checkList');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getChecklistID = async (id?: string): Promise<Farmer> => {
  try {
    const response = await api.get(`/checkList/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const setChecklist = async (data: Farmer[]): Promise<void> => {
  try {
    await api.post('/checkList', { checklists: data });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

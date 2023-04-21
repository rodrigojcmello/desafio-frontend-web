import axios from 'axios';
import type { CheckList, Farmer } from '@/services/checklist/types';

const HOST = 'http://challenge-front-end.bovcontrol.com';

export const getChecklist = async (): Promise<CheckList> => {
  return axios({
    method: 'get',
    url: `${HOST}/v1/checkList`,
  }).then((response) => {
    return response.data;
  });
};

export const getChecklistID = async (id?: string): Promise<Farmer> => {
  return axios({
    method: 'get',
    url: `${HOST}/v1/checkList/${id}`,
  }).then((response) => {
    return response.data;
  });
};

export const setChecklist = async (data: Farmer[]): Promise<void> => {
  return axios({
    method: 'post',
    url: `${HOST}/v1/checkList`,
    data: {
      checklists: data,
    },
  }).then((response) => {
    return response.data;
  });
};

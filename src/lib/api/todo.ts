/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { httpWrapper } from '@/lib/api/apibase';
import { Task } from '@/lib/common/Task';

const api = {
  url: (): string => '/todo/todo01',
  todo01Get: async (): Promise<Task[]> => {
    const data = await httpWrapper.get('/api/todo/todo01_get_tasks', {});
    return data.records.map((record: any) => new Task(record));
  },
  todo01Add: async (title: string): Promise<void> => {
    const body = {
      title,
    };
    await httpWrapper.post('/api/todo/todo01_add_task', body);
  },
  todo01Update: async (
    id: string,
    fields: { title?: string; completed?: boolean },
  ): Promise<void> => {
    const body = {
      id,
      fields,
    };
    await httpWrapper.post('/api/todo/todo01_update_task', body);
  },
  todo01Delete: async (id: string): Promise<void> => {
    const body = {
      id,
    };
    await httpWrapper.delete('/api/todo/todo01_delete_task', body);
  },
};

export default api;

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument */

import { httpWrapper } from '@/lib/api/apibase';

const api = {
  // ログイン
  postForm01: async (name: string, email: string, password: string): Promise<void> => {
    const body = {
      name: name,
      email: email,
      password: password,
    };
    await httpWrapper.post('/api/form/01', body);
  },
};

export default api;

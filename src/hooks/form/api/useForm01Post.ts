import { useState } from 'react';

import { useMessageDialog } from '@/hooks/common/useMessageDialog';
import { APIError } from '@/lib/api/error';
import api from '@/lib/api/form';
import { message } from '@/lib/data/message';

export type UseForm01PostReturn = {
  execute: (name: string, email: string, password: string) => Promise<boolean>;
  loading: boolean;
};

export const useForm01Post = (): UseForm01PostReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const { openErrorDialog } = useMessageDialog();

  const execute = async (name: string, email: string, password: string) => {
    let ret = true;
    setLoading(true);
    try {
      // 備考を更新
      await api.postForm01(name, email, password);
    } catch (e) {
      if (APIError.isBadRequest(e)) {
        await openErrorDialog(message.form.form01Error);
      }
      ret = false;
    }
    setLoading(false);
    return ret;
  };

  return {
    execute,
    loading,
  };
};

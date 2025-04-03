import { useState } from 'react';

import { GenderTypes } from 'ui/components/gender-picker/types';
import { useUserInfoAdapter } from 'bl-modules/user/user-info';

export const useAccountLocalState = (userInfoAdapter: ReturnType<typeof useUserInfoAdapter>) => {
  const [activeGender, setActiveGender] = useState<GenderTypes>(userInfoAdapter.variables.user?.gender || GenderTypes.NOT_SPECIFIED);

  return { activeGender, setActiveGender };
};

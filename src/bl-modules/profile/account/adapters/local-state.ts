import { useState } from 'react';

import { GenderTypes } from 'ui/components/gender-picker/types';

export const useAccountLocalState = () => {
  const [activeGender, setActiveGender] = useState<GenderTypes>(GenderTypes.NOT_SPECIFIED);

  return { activeGender, setActiveGender };
};

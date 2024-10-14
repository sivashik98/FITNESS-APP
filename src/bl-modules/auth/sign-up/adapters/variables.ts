import { useAppSelector } from 'app/store/store';

export const useSignUpVariables = () => {
  const { currentTab } = useAppSelector((store) => store.signUpReducer);
  return {
    currentTab,
  };
};

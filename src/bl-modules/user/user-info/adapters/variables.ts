import { useUserInfoRtkq } from 'bl-modules/user/user-info/adapters/rtkq';
import { StringsService } from 'tools/services';

export const useUserInfoVariables = (rtkq: ReturnType<typeof useUserInfoRtkq>) => {
  const isLoading = rtkq.isLoading;
  const isFetching = rtkq.isFetching;
  const error = rtkq.error;
  const isError = rtkq.isError;
  //
  const user = rtkq.data?.payload;
  const name = rtkq.data?.payload?.name;
  const fullName = `${rtkq.data?.payload?.surname} ${rtkq.data?.payload?.name} ${rtkq.data?.payload?.patronymic}`;
  const formattedPhone = StringsService.formatPhoneNumber(
    rtkq.data?.payload?.phone.number || '',
    `${rtkq.data?.payload?.phone.country_code || '+7'} (000) 000-00-00`,
  );
  const email = rtkq.data?.payload.email;
  const username = formattedPhone || email;

  return { isLoading, isFetching, error, isError, user, username, name, email, formattedPhone, fullName };
};

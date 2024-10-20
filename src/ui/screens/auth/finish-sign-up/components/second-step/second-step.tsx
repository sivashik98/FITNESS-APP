import { UIText, UIView } from 'ui/components';
import { TextTypes } from 'ui/components/ui-kit/ui-text/types';

export const SecondStep = ({}) => {
  return (
    <UIView gap-30>
      <UIText h1>Дата рождения</UIText>
      <UIText p1B type={TextTypes.secondary}>
        Вы всегда сможете изменить эту информацию в настройках приложения
      </UIText>

      <UIView height={200} style={{ borderWidth: 2 }} width={'100%'} />
    </UIView>
  );
};

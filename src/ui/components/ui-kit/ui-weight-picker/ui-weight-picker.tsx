import { FC, useState } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import Modal from 'react-native-modal';
import WheelPicker from '@quidone/react-native-wheel-picker';

import { UIText, UIView } from 'ui/components/ui-kit';
import { SvgContainer } from 'ui/components';
import { CloseCircleIconSvg } from 'svg/icons/close-circle-icon';
import { PencilWithPaperIconSvg } from 'svg/icons/pencil-with-paper-icon';

import { TextTypes } from 'ui/components/ui-kit/ui-text/types';
import { DimensionsService } from 'tools/services';
import { UIWeightPickerProps } from 'ui/components/ui-kit/ui-weight-picker/types';
import { QuestionMarkIconSvg } from 'svg/icons/question-mark-icon';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';

const generateKG = (weightRange: [number, number]) => {
  const [min, max] = weightRange;
  return Array.from({ length: max - min + 1 }, (_, index) => ({
    value: min + index,
    label: `${min + index}`,
  }));
};
const generateG = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    value: index / 10,
    label: `, ${index}`,
  }));
};

export const UIWeightPicker: FC<UIWeightPickerProps> = ({
  label,
  placeholder,
  value,
  onConfirm,
  leadingAccessory,
  bottomHint,
  errorMessage,
  onClear,
  weightRange,
  modalLabel,
}) => {
  const { styles } = useStyles(stylesheet);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKG, setSelectedKG] = useState<number>(weightRange[0]);
  const [selectedG, setSelectedG] = useState<number>(0);
  const kilogramsData = generateKG(weightRange);
  const gramData = generateG();

  const handleConfirm = () => {
    onConfirm?.(selectedKG + selectedG);
    setIsOpen(false);
  };

  return (
    <UIView flexS={1}>
      {label && (
        <UIView marginR={20}>
          <UIText font={'p2B'}>{label}</UIText>
        </UIView>
      )}
      <UIView style={[styles.container, errorMessage ? styles['container-error'] : undefined]}>
        {leadingAccessory ? <UIView marginR={12}>{leadingAccessory}</UIView> : null}
        <UIView style={styles.field} onPress={() => setIsOpen(true)}>
          {value ? (
            <UIText font={'p2R'} type={errorMessage ? TextTypes.error : TextTypes.primary}>
              {`${value} кг`}
            </UIText>
          ) : (
            <UIText font={'p2R'} type={errorMessage ? TextTypes.error : TextTypes.secondary}>
              {placeholder}
            </UIText>
          )}
        </UIView>
        {value ? (
          <SvgContainer
            Icon={CloseCircleIconSvg}
            animated
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.icon}
            onPress={onClear}
          />
        ) : (
          <SvgContainer
            Icon={PencilWithPaperIconSvg}
            animated
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.icon}
          />
        )}
      </UIView>
      <UIView gap={10} marginT={10}>
        {errorMessage && (
          <UIText font={'p2R'} type={TextTypes.error}>
            {errorMessage}
          </UIText>
        )}
        {bottomHint && (
          <UIView direction={'row'} gap={10}>
            <SvgContainer Icon={QuestionMarkIconSvg} style={{ marginTop: 5 }} />
            <UIText font={'p2R'} type={TextTypes.secondary}>
              {bottomHint}
            </UIText>
          </UIView>
        )}
      </UIView>
      <Modal
        isVisible={isOpen}
        style={styles.modal}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        avoidKeyboard
        backdropOpacity={0.3}
        deviceHeight={DimensionsService.screen.height}
        deviceWidth={DimensionsService.screen.width}
        onBackdropPress={() => setIsOpen(false)}
      >
        <UIView style={styles.modalContainer}>
          <UIView style={styles.header}>
            <UIText font={'p2M'}>{modalLabel || ''}</UIText>
            <UIView onPress={handleConfirm}>
              <UIText font={'p2M'} type={TextTypes.link}>
                Готово
              </UIText>
            </UIView>
          </UIView>
          <UIView style={styles.content}>
            <WheelPicker
              data={kilogramsData}
              value={selectedKG}
              onValueChanged={({ item: { value } }) => setSelectedKG(value)}
              visibleItemCount={5}
              overlayItemStyle={styles.overlayItemStyleKG}
              renderItem={({ item }) => (
                <UIView flex={1} ai={'center'} jc={'center'}>
                  <UIText font={'p1M'}>{item.label}</UIText>
                </UIView>
              )}
              style={styles.wheelPicker}
              onValueChanging={async () => {
                await impactAsync(ImpactFeedbackStyle.Light);
              }}
            />
            <WheelPicker
              data={gramData}
              value={selectedG}
              onValueChanged={({ item: { value } }) => setSelectedG(value)}
              visibleItemCount={5}
              overlayItemStyle={styles.overlayItemStyleG}
              renderItem={({ item }) => (
                <UIView flex={1} ai={'center'} jc={'center'}>
                  <UIText font={'p1M'}>{item.label}</UIText>
                </UIView>
              )}
              style={styles.wheelPicker}
              onValueChanging={async () => {
                await impactAsync(ImpactFeedbackStyle.Light);
              }}
            />
          </UIView>
        </UIView>
      </Modal>
    </UIView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.35,
    paddingVertical: 12,
    borderColor: theme.colors.weightPicker.border,
  },
  'container-error': { borderColor: theme.colors.weightPicker.error },
  field: { flex: 1 },
  icon: {
    alignItems: 'center',
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: theme.colors.weightPicker.modalBg,
    borderRadius: 12,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.weightPicker.modalHeaderBg,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  overlayItemStyleKG: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  overlayItemStyleG: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  wheelPicker: {
    flex: 1,
  },
}));

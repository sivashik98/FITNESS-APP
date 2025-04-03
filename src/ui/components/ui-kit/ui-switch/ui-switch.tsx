import { FC, memo } from 'react';
import { Switch } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { ImpactFeedbackStyle, impactAsync } from 'expo-haptics';

import { UISwitchProps } from 'ui/components/ui-kit/ui-switch/types';

export const UISwitch: FC<UISwitchProps> = memo(({ onValueChange, ...props }) => {
  const { theme } = useStyles();

  const onValueChangeWithImpact = async (value: boolean) => {
    onValueChange?.(value);
    await impactAsync(ImpactFeedbackStyle.Light);
  };

  return (
    <Switch onValueChange={onValueChangeWithImpact} trackColor={{ false: theme.colors.switch.bg, true: theme.colors.switch.bgActive }} {...props} />
  );
});

// Моти реализация свитча своя кастомная

// const transition: MotiTransition = {
//   type: 'timing',
//   duration: 300,
//   easing: Easing.inOut(Easing.ease),
// };

// export const UISwitch: FC<any> = ({
//   // ...props
//   isActive,
//   onPress,
//   size = 50,
// }) => {
//   const trackWidth = useMemo(() => size * 1.5, [size]);
//   const trackHeight = useMemo(() => size * 0.4, [size]);
//   const knobSize = useMemo(() => size * 0.6, [size]);
//
//   return (
//     <Pressable onPress={onPress}>
//       <UIView ai={'center'} jc={'center'}>
//         <UIView
//           animated
//           transition={transition}
//           from={{ backgroundColor: isActive ? 'red' : 'brown' }}
//           animate={{ backgroundColor: isActive ? 'red' : 'brown' }}
//           style={{
//             position: 'absolute',
//             width: trackWidth,
//             height: trackHeight,
//             borderRadius: trackHeight / 2,
//             backgroundColor: 'red',
//           }}
//         />
//
//         <UIView
//           animated
//           transition={transition}
//           animate={{ translateX: isActive ? -10 : 10 }}
//           style={{
//             width: size,
//             height: size,
//             borderRadius: size / 2,
//             backgroundColor: '#fff',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <UIView
//             animated
//             style={{
//               width: knobSize,
//               height: knobSize,
//               borderRadius: knobSize / 2,
//               borderWidth: size * 0.1,
//               borderColor: 'green',
//               backgroundColor: 'yellow',
//             }}
//           />
//         </UIView>
//       </UIView>
//     </Pressable>
//   );
// };

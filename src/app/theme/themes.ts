import { APP_COLORS, APP_GRADIENTS } from 'app/theme/colors';

export const LIGHT_THEME = {
  colors: {
    weightPicker: {
      border: APP_COLORS.grayishBlue,
      error: APP_COLORS.darkError,
      modalBg: APP_COLORS.white,
      modalHeaderBg: APP_COLORS.veryLightGray,
    },
    datePicker: {
      border: APP_COLORS.grayishBlue,
      error: APP_COLORS.darkError,
    },
    toastSuccess: {
      bg: APP_COLORS.success,
      text: APP_COLORS.primaryWhite,
      shadow: APP_COLORS.success,
    },
    toastError: {
      bg: APP_COLORS.error,
      text: APP_COLORS.white,
      shadow: APP_COLORS.error,
    },
    defaultHeader: {
      icon: APP_COLORS.primaryBlack,
    },
    menuItemList: {
      bg: APP_COLORS.primaryWhite,
    },
    switch: {
      bg: APP_COLORS.transparentShadowGray,
      bgActive: APP_COLORS.darkIris,
    },
    userWidget: {
      bg: APP_COLORS.white,
      shadow: APP_COLORS.transparentShadowLight,
    },
    articleWidget: {
      bg: APP_COLORS.primaryWhite,
    },
    userHeader: {
      bg: APP_COLORS.primaryWhite,
      shadow: APP_COLORS.transparentShadowGray,
    },
    progressBar: {
      activeBg: APP_COLORS.darkIris,
      bg: APP_COLORS.transparentShadowGray,
    },
    loader: {
      bg: APP_COLORS.darkIris,
    },
    segmentControl: {
      bg: APP_COLORS.transparentShadowLight,
      text: APP_COLORS.black,
      activeBg: APP_COLORS.primaryWhite,
    },
    codeField: {
      bg: APP_COLORS.transparentShadowGray,
      border: APP_COLORS.darkIris,
      error: APP_COLORS.darkError,
    },
    textField: {
      border: APP_COLORS.grayishBlue,
      placeholder: APP_COLORS.transparentShadowGray,
      error: APP_COLORS.darkError,
    },
    btn: {
      filled: {
        bg: APP_COLORS.black,
        text: APP_COLORS.white,
        shadow: APP_COLORS.transparentShadowGray,
        disabled: APP_COLORS.transparentShadowLight,
        textDisabled: APP_COLORS.primaryWhite,
      },
      outlined: {
        bg: APP_COLORS.darkIris,
        text: APP_COLORS.darkIris,
        shadow: APP_COLORS.transparent,
        disabled: APP_COLORS.transparentShadowLight,
        textDisabled: APP_COLORS.primaryWhite,
      },
      texted: {
        bg: APP_COLORS.transparent,
        text: APP_COLORS.black,
        shadow: APP_COLORS.transparent,
        textDisabled: APP_COLORS.iris,
      },
      elevated: {
        bg: APP_COLORS.white,
        text: APP_COLORS.black,
        shadow: APP_COLORS.transparentShadowGray,
        disabled: APP_COLORS.transparentShadowLight,
        textDisabled: APP_COLORS.primaryWhite,
      },
      smallPrimary: {
        bg: APP_COLORS.black,
        text: APP_COLORS.white,
        shadow: APP_COLORS.transparent,
        disabled: APP_COLORS.transparentShadowLight,
        textDisabled: APP_COLORS.primaryWhite,
      },
      smallSecondary: {
        bg: APP_COLORS.white,
        text: APP_COLORS.black,
        shadow: APP_COLORS.transparentShadowLight,
        disabled: APP_COLORS.transparentShadowLight,
        textDisabled: APP_COLORS.primaryWhite,
      },
    },
    text: {
      primary: {
        text: APP_COLORS.black,
      },
      secondary: {
        text: APP_COLORS.grayishBlue,
      },
      error: {
        text: APP_COLORS.darkError,
      },
      accent: {
        text: APP_COLORS.darkIris,
      },
      link: {
        text: APP_COLORS.blue,
      },
    },
    genderPicker: {
      bg: APP_COLORS.veryLightGray,
      border: APP_COLORS.darkIris,
    },
    checkbox: {
      bg: APP_COLORS.darkIris,
      border: APP_COLORS.black,
    },
    app: {
      bg: APP_COLORS.white,
      shadow: APP_COLORS.black,
    },
    bottomBar: {
      bg: APP_COLORS.white,
      gradient: APP_GRADIENTS.iris,
      icon: APP_COLORS.black,
    },
    svg: {
      miniLogo: {
        bg: APP_COLORS.black,
      },
    },
  },
} as const;

export const DARK_THEME = {
  colors: {
    weightPicker: {
      border: APP_COLORS.grayishBlue,
      error: APP_COLORS.darkError,
      modalBg: APP_COLORS.darkGray,
      modalHeaderBg: APP_COLORS.darkGrayishBlue,
    },
    datePicker: {
      border: APP_COLORS.grayishBlue,
      error: APP_COLORS.error,
    },
    toastSuccess: {
      bg: APP_COLORS.darkSuccess,
      text: APP_COLORS.white,
      shadow: APP_COLORS.success,
    },
    toastError: {
      bg: APP_COLORS.darkError,
      text: APP_COLORS.white,
      shadow: APP_COLORS.error,
    },
    defaultHeader: {
      icon: APP_COLORS.primaryWhite,
    },
    menuItemList: {
      bg: APP_COLORS.darkGray,
    },
    switch: {
      bg: APP_COLORS.transparentShadowLight,
      bgActive: APP_COLORS.iris,
    },
    userWidget: {
      bg: APP_COLORS.darkGray,
      shadow: APP_COLORS.transparentShadowLight,
    },
    articleWidget: {
      bg: APP_COLORS.darkGray,
    },
    userHeader: {
      bg: APP_COLORS.darkGray,
      shadow: APP_COLORS.transparentShadowLight,
    },
    progressBar: {
      activeBg: APP_COLORS.iris,
      bg: APP_COLORS.transparentShadowLight,
    },
    loader: {
      bg: APP_COLORS.iris,
    },
    segmentControl: {
      bg: APP_COLORS.darkGray,
      text: APP_COLORS.white,
      activeBg: APP_COLORS.darkGray,
    },
    codeField: {
      bg: APP_COLORS.darkGray,
      border: APP_COLORS.iris,
      error: APP_COLORS.error,
    },
    textField: {
      border: APP_COLORS.grayishBlue,
      placeholder: APP_COLORS.transparentShadowLight,
      error: APP_COLORS.error,
    },
    btn: {
      filled: {
        bg: APP_COLORS.darkGray,
        text: APP_COLORS.white,
        shadow: APP_COLORS.transparentShadowLight,
        disabled: APP_COLORS.primaryBlack,
        textDisabled: APP_COLORS.black,
      },
      outlined: {
        bg: APP_COLORS.iris,
        text: APP_COLORS.iris,
        shadow: APP_COLORS.transparent,
        disabled: APP_COLORS.primaryBlack,
        textDisabled: APP_COLORS.black,
      },
      texted: {
        bg: APP_COLORS.transparent,
        text: APP_COLORS.white,
        shadow: APP_COLORS.transparent,
        textDisabled: APP_COLORS.iris,
      },
      elevated: {
        bg: APP_COLORS.darkGray,
        text: APP_COLORS.white,
        shadow: APP_COLORS.transparentShadowLight,
        disabled: APP_COLORS.primaryBlack,
        textDisabled: APP_COLORS.black,
      },
      smallPrimary: {
        bg: APP_COLORS.black,
        text: APP_COLORS.white,
        shadow: APP_COLORS.transparent,
        disabled: APP_COLORS.primaryBlack,
        textDisabled: APP_COLORS.black,
      },
      smallSecondary: {
        bg: APP_COLORS.grayishBlue,
        text: APP_COLORS.white,
        shadow: APP_COLORS.transparentShadowLight,
        disabled: APP_COLORS.primaryBlack,
        textDisabled: APP_COLORS.black,
      },
    },
    text: {
      primary: {
        text: APP_COLORS.white,
      },
      secondary: {
        text: APP_COLORS.grayishBlue,
      },
      error: {
        text: APP_COLORS.error,
      },
      accent: {
        text: APP_COLORS.morningIris,
      },
      link: {
        text: APP_COLORS.blue,
      },
    },
    genderPicker: {
      bg: APP_COLORS.darkGray,
      border: APP_COLORS.iris,
    },
    checkbox: {
      bg: APP_COLORS.iris,
      border: APP_COLORS.white,
    },
    app: {
      bg: APP_COLORS.black,
      shadow: APP_COLORS.white,
    },
    bottomBar: {
      bg: APP_COLORS.darkGray,
      gradient: APP_GRADIENTS.iris,
      icon: APP_COLORS.white,
    },
    svg: {
      miniLogo: {
        bg: APP_COLORS.white,
      },
    },
  },
} as const;

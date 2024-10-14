import 'ts-node/register'; // Add this to import TypeScript files
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  owner: 'sivashik98',
  name: 'yu-team',
  slug: 'yu-team',
  scheme: 'yu-team',
  githubUrl: 'https://github.com/sivashik98/FITNESS-APP',
  description: 'yu-team app',
  privacy: 'public',
  orientation: 'portrait',
  jsEngine: 'hermes',
  userInterfaceStyle: 'automatic',
  platforms: ['ios', 'android'],
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#9C73F8',
  },
  ios: {
    bundleIdentifier: 'com.sivashik98.yuteam',
    bitcode: false,
    infoPlist: {
      LSApplicationQueriesSchemes: ['tg'],
    },
    config: {
      usesNonExemptEncryption: false,
    },
    icon: './assets/icon.png',
  },
  android: {
    package: 'com.sivashik98.yuteam',
    // permissions: ['android.permission.ACCESS_NETWORK_STATE', 'android.permission.INTERNET', 'android.permission.SYSTEM_ALERT_WINDOW'],
    // blockedPermissions: [],
    softwareKeyboardLayoutMode: 'pan',
    allowBackup: true,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#9C73F8',
    },
  },
  plugins: [
    [
      'expo-build-properties',
      {
        android: {
          networkInspector: true,
          usesCleartextTraffic: true,
        },
        ios: {
          useFrameworks: 'static',
        },
      },
    ],
    [
      'expo-font',
      {
        fonts: [
          './assets/fonts/sf-pro/SF-Pro-Display-Bold.otf',
          './assets/fonts/sf-pro/SF-Pro-Display-Medium.otf',
          './assets/fonts/sf-pro/SF-Pro-Display-Regular.otf',
          './assets/fonts/sf-pro/SF-Pro-Display-Semibold.otf',
          './assets/fonts/sf-pro/SF-Pro-Display-Thin.otf',
        ],
      },
    ],
  ],
  extra: {
    eas: {
      projectId: '8ea55f39-78a3-454b-bcd6-651c5165333a',
    },
  },
  experiments: {
    // turboModules:true,
  },
};

export default config;

export default {
  "expo": {
    "name": "GlobalGuide",
    "slug": "GlobalGuide",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "usesAppleSignIn": true,
      "bundleIdentifier": "com.banjoza.globalguide",
      "googleServicesFile": process.env.GOOGLE_SERVICES_INFOPLIST,
      "infoPlist": {
        "CFBundleURLTypes": [
          {
            "CFBundleURLSchemes": [
              "com.googleusercontent.apps.859767867537-p7jif2unfvsp2opoubsrtksq9lqqpq9o"
            ]
          }
        ]
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.banjoza.globalguide",
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON,  
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "expo-apple-authentication",
      "@react-native-google-signin/google-signin"
    ],
    "extra": {
      "eas": {
        "projectId": "bf95e0c0-5897-4eb6-830c-57679ab178c5"
      }
    },
    "scheme": "globalguide"
  }
}
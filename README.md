# ULTRON Mobile - Voice Assistant for Android

A powerful voice-activated assistant application for Android devices built with React Native and Expo.

## Features

✅ Voice Command Recognition
✅ Real-time Transcript Display
✅ Interactive 3D Orb Animation
✅ Device Control Commands
✅ Multi-language Support
✅ Customizable Settings
✅ Quick Action Buttons

## Prerequisites

- Node.js 18+
- npm or yarn
- Android device or emulator (API level 23+)
- Expo CLI

## Installation

```bash
npm install
```

## Building for Android

### Option 1: Using EAS Build (Recommended)

```bash
# Authenticate with Expo
eas login

# Build APK
eas build --platform android --local
```

### Option 2: Using Expo CLI

```bash
# Start development server
expo start --android
```

## Voice Commands

- **"Hello"** - Greeting response
- **"Unlock"** - Unlock device
- **"Lock"** - Lock screen
- **"Screenshot"** - Take screenshot
- **"Battery"** - Check battery status
- **"Help"** - List all commands

## Settings

- Language: English, Spanish, French
- Speech Speed: Slow, Normal, Fast
- Notification Preferences
- Haptic Feedback Control

## Permissions Required

- Microphone Access (for voice recording)
- Internet Access (for processing)

## Development

```bash
# Start dev server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## Project Structure

```
ultron-mobile/
├── App.tsx              # Main app entry
├── app.json             # Expo configuration
├── package.json         # Dependencies
├── assets/              # Images and icons
└── README.md            # Documentation
```

## Technologies

- React Native 0.74
- Expo 51
- React Navigation 6
- TypeScript
- Babel

## License

Proprietary - ULTRON Voice Assistant

## Support

For issues and questions, please contact the development team.

---

**ULTRON v2.1.0** - Professional Voice Assistant Platform

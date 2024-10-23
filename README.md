# Mars Rover Photo Gallery

A React Native mobile application that displays photos from NASA's Mars Rover using the NASA API. Built with Expo, React Navigation, and React Native Paper.

## Features

- View Mars Rover photos in both list and grid layouts
- Sort photos by ID (ascending/descending)
- Animated photo cards with press feedback
- Detailed view for each photo with additional information
- Error handling with retry mechanism
- Loading states and fallback images
- Responsive design for various screen sizes

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [iOS Simulator](https://developer.apple.com/xcode/) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Jarpol20/tp-link-nasa
cd tp-link-nasa
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## Development

### Running on Simulators/Emulators

- For iOS:

```bash
npm run ios
# or
yarn ios
```

- For Android:

```bash
npm run android
# or
yarn android
```

## Building for Production

### Generate Native Projects

```bash
npx expo prebuild
```

### iOS Build

1. Install iOS dependencies:

```bash
cd ios
pod install
cd ..
```

2. Open the Xcode workspace:

```bash
open ios/tp-link-nasa.xcworkspace
```

3. Build and archive using Xcode

### Android Build

1. Create a keystore file for signing:

```bash
keytool -genkey -v -keystore android/app/release.keystore -alias release -keyalg RSA -keysize 2048 -validity 10000
```

2. Update `android/gradle.properties` with your keystore details

3. Generate the release APK:

```bash
cd android
./gradlew assembleRelease
```

The APK will be available at `android/app/build/outputs/apk/release/app-release.apk`

## Project Structure

```
src/
  ├── components/      # Reusable UI components
  ├── constants/       # App-wide constants and configuration
  ├── hooks/          # Custom React hooks
  ├── navigation/     # Navigation configuration
  ├── screens/        # Screen components
  ├── services/       # API and other services
  ├── types/          # TypeScript type definitions
  └── utils/          # Helper functions and utilities
```

## Environment Variables

The app uses an API key for NASA's API. This is currently hardcoded in `src/constants/config.ts`. For production, you should:

1. Create a `.env` file in the root directory
2. Add your NASA API key:

```
NASA_API_KEY=your_api_key_here
```

## Dependencies

Key dependencies include:

- `@react-navigation/native` - For navigation
- `@tanstack/react-query` - For data fetching
- `expo-image` - For optimized image loading
- `react-native-paper` - Material Design components
- `react-native-reanimated` - For animations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- NASA API for providing Mars Rover photos
- Expo team for the amazing React Native tooling
- React Navigation team for the navigation li
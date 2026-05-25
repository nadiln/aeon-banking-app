# AEON Banking App 🏦

A modern mobile banking application built with Expo, React Native, NativeWind (Tailwind CSS), and Expo Router. The app provides a seamless interface for viewing transactions, managing finances, and exploring banking services.

## ⚠️ Important: Development Build Required

This app **cannot use Expo Go** because it requires native modules and dependencies (`expo-dev-client`, `react-native-reanimated`, `react-native-gesture-handler`). You must build and run it as a development build on Android or iOS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Android Studio with Android SDK (for Android development)
  - Java Development Kit (JDK) 17+
  - Android SDK Platform 36+
  - Android SDK Build-Tools 36.0.0+
- Git

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd aeon-banking-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start -c
   ```
   The `-c` flag clears the cache for a fresh start.

### Running on Android

1. **Ensure Android emulator is running** (or connect a physical device with USB debugging enabled)

2. **Build and run the development build**

   ```bash
   npx expo run:android
   ```

   This will:
   - Compile the React Native app
   - Build the development APK
   - Install and launch on your emulator/device

3. **First Screen**: The app launches directly to the **Transactions** screen
   - Tap the **Transactions** tab to view your transaction list
   - Tap any transaction to see detailed information

### Running on iOS

1. **Ensure iOS simulator is running**

2. **Build and run the development build**
   ```bash
   npx expo run:ios
   ```

### Development

- **Hot reload**: Changes to TypeScript/JavaScript files are reflected instantly
- **Fast refresh**: Native module changes require a rebuild

## �📱 App Navigation & Features

### Main Screens

#### 1. **Transactions List Screen** (Default Landing Page)

- View all account transactions in a scrollable list
- See transaction summary statistics:
  - Total balance (sum of all transactions)
  - Total transaction count
  - Incoming transactions (credits)
  - Outgoing transactions (debits)
- Tap any transaction to view full details

![Transactions List Screen]

- Header: Dark red background with "Your Transactions" title
- Summary cards showing total balance, transaction count, incoming/outgoing stats
- Transaction list showing recent activity with amounts, dates, and descriptions

#### 2. **Transaction Detail Screen**

- Displays comprehensive information for a selected transaction:
  - Transaction ID
  - Amount
  - Date and time
  - Category/Description
  - Status
  - Reference number
- Navigate back to list by tapping the back button

![Transaction Detail Screen]

- Dark red header with "Transaction Details" title
- Card-based layout showing transaction metadata
- Clean typography with amount displayed prominently
- Back navigation to return to transactions list

#### 3. **Home Screen** (Quick Access)

- Quick banking overview
- Access to main banking features
- Gateway to other services

#### 4. **Explore Screen**

- Discover banking services and features
- View available financial products
- Access promotional offers

### Tab Navigation

The app uses a bottom tab bar with three main sections:

- **Home**: Account overview and quick actions
- **Explore**: Banking services and features
- **Transactions**: Complete transaction history and details

## � Screenshots

## 🛠️ Tech Stack

- **Framework**: Expo 56.x with Expo Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS (via NativeWind)
- **State Management**: Zustand
- **HTTP Client**: Axios with caching interceptors
- **Navigation**: Expo Router (file-based) + React Navigation

## 📁 Project Structure

```
src/
├── app/                          # Expo Router routes
│   ├── index.tsx                 # Root redirect to transactions
│   ├── _layout.tsx               # Root layout
│   └── (tabs)/                   # Tab-based navigation
│       ├── _layout.tsx           # Tabs layout configuration
│       ├── index.tsx             # Home tab
│       ├── explore.tsx           # Explore tab
│       └── transactions/         # Transaction routes
│           ├── _layout.tsx       # Transaction stack layout
│           ├── index.tsx         # Transactions list screen
│           └── [refId].tsx       # Transaction detail screen
├── components/                   # Reusable UI components
│   ├── atoms/                    # Basic components (Badge, Divider)
│   ├── molecules/                # Composed components (TransactionItem)
│   └── organisms/                # Complex components (TransactionList, TransactionDetailCard)
├── screens/                      # Screen logic and hooks
│   ├── TransactionListScreen/
│   └── TransactionDetailScreen/
├── services/                     # API and data services
│   ├── axiosInstance.ts          # Configured HTTP client
│   └── transactionService.ts     # Transaction API calls
├── store/                        # Zustand state management
├── types/                        # TypeScript type definitions
├── constants/                    # Theme and configuration
├── hooks/                        # Custom React hooks
└── global.css                    # Tailwind CSS entry point
```

## 🎨 Styling

This project uses **NativeWind** for Tailwind CSS support in React Native:

- Utility-first CSS approach
- Responsive design support
- Dark mode support
- Custom theme in `tailwind.config.js`

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Build for Android
npm run android

# Build for iOS
npm run ios

# Build for web
npm run web

# Run linting
npm run lint

# Reset project to blank state
npm run reset-project
```

## 📝 Environment Configuration

Key configuration files:

- **app.json**: Expo project configuration
- **babel.config.js**: Babel preset with NativeWind support
- **tailwind.config.js**: Tailwind theme customization
- **metro.config.js**: Metro bundler configuration
- **tsconfig.json**: TypeScript compiler options
- **android/local.properties**: Android SDK paths (auto-generated)

### Android Configuration

The app requires:

- **Minimum SDK**: 24
- **Target SDK**: 36
- **NDK Version**: 27.1.12297006

Ensure `JAVA_HOME` is set to JDK 17:

```bash
# Verify Java version
java -version

# Should output Java 17.x.x
```

## 🐛 Troubleshooting

### Build Fails on Android

- Clear cache: `npm start -c`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Java version: `java -version` (must be JDK 17+)
- Verify Android SDK paths in `android/local.properties`

### App Won't Load Transactions

- Ensure the app is built with dev client: `npx expo run:android`
- Check console for error messages in terminal
- Try clearing app data and rebuilding

### Hot Reload Not Working

- Restart the development server
- Rebuild the app: `npx expo run:android`

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Docs](https://docs.expo.dev/router/introduction/)
- [React Native Docs](https://reactnative.dev/)
- [NativeWind Docs](https://nativewind.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

## 📄 License

See [LICENSE](LICENSE) file for details.

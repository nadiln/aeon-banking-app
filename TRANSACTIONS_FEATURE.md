# Transaction History Feature - Setup Guide

## Installation

All dependencies have been installed. Here's what was added:

```bash
npm install @react-navigation/native @react-navigation/native-stack zustand axios axios-cache-interceptor --save-dev
```

### Installed Packages:

- **@react-navigation/native** - Navigation infrastructure
- **@react-navigation/native-stack** - Stack navigator for screen navigation
- **zustand** - Lightweight state management
- **axios** - HTTP client
- **axios-cache-interceptor** - Request caching with TTL support

## Tailwind Configuration

The `tailwind.config.js` has been updated with AEON Bank brand colors:

```javascript
colors: {
  primary: '#C8102E',        // AEON brand red
  primaryDark: '#8B0000',    // Darker red for headers
  background: '#F5F5F5',     // Light grey page background
  cardBg: '#FFFFFF',         // White cards
  textPrimary: '#1A1A1A',    // Near black text
  textSecondary: '#666666',  // Muted labels
  credit: '#16A34A',         // Green for incoming transactions
  debit: '#DC2626',          // Red for outgoing/negative
  border: '#E5E7EB',         // Light borders
}
```

## Folder Structure Created

```
src/
├── components/
│   ├── atoms/
│   │   ├── Badge.tsx              # Credit/Debit badge
│   │   ├── AmountText.tsx         # Colored amount display
│   │   └── Divider.tsx            # Horizontal divider
│   ├── molecules/
│   │   ├── TransactionItem.tsx    # Single transaction row
│   │   └── TransactionDetailRow.tsx
│   └── organisms/
│       ├── TransactionList.tsx    # FlatList wrapper
│       └── TransactionDetailCard.tsx # Detail card with share
│
├── screens/
│   ├── TransactionListScreen/
│   │   ├── TransactionListScreen.tsx   # UI component
│   │   └── useTransactionListScreen.ts # Business logic hook
│   └── TransactionDetailScreen/
│       ├── TransactionDetailScreen.tsx  # UI component
│       └── useTransactionDetailScreen.ts # Business logic hook
│
├── store/
│   └── transactionStore.ts        # Zustand store
│
├── services/
│   ├── axiosInstance.ts           # Axios + cache setup
│   └── transactionService.ts      # Mock API service
│
├── types/
│   └── transaction.ts             # TypeScript interfaces
│
└── navigation/
    └── AppNavigator.tsx           # Stack navigator
```

## Integration Steps

### 1. Update Your App Entry Point

In your main app file (likely `App.tsx` or `app/_layout.tsx`), import and use the `AppNavigator`:

```tsx
import { AppNavigator } from "@/navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
}
```

If using Expo Router, you may need to modify the navigation structure. For now, replace the root navigator with `AppNavigator`.

### 2. Update Metro Bundler Config (if needed)

If you get module resolution errors, ensure your `metro.config.js` includes path aliases:

```javascript
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
config.resolver.extraNodeModules = {
  "@": require("path").resolve(__dirname, "src"),
  "@/assets": require("path").resolve(__dirname, "assets"),
};

module.exports = config;
```

### 3. Run Your App

```bash
npm start
# or
yarn start
```

Then select your platform:

- iOS: Press `i`
- Android: Press `a`
- Web: Press `w`

## Feature Details

### TransactionListScreen

- Fetches mock transactions on mount via `fetchTransactions()`
- Displays list with loading spinner
- Shows: Transfer Name, Date, Recipient, Amount (colored)
- Badge indicates Credit (green) or Debit (red)
- Tap any transaction to view details

### TransactionDetailScreen

- Shows full transaction details in a card
- Display fields: Reference ID, Date/Time, Recipient Name, Transfer Name, Amount
- **Share Button**: Uses React Native's `Share.share()` API
  - Formatted message: "Transaction Details\nRef: {refId}\nDate: {date}\nRecipient: {recipientName}\nAmount: {amount}"
- Back button navigates to list

### Zustand Store (`transactionStore.ts`)

State shape:

```typescript
{
  transactions: Transaction[],    // All fetched transactions
  isLoading: boolean,            // Fetch status
  error: string | null,          // Error message
  setTransactions: (data) => void,
  setLoading: (val) => void,
  setError: (msg) => void,
}
```

### API Service (`transactionService.ts`)

- **Mock Implementation**: Returns hardcoded transaction data
- Uses Axios with 5-minute cache TTL
- To connect to a real API:
  1. Replace `mockResponse` data source
  2. Uncomment the actual axios call: `await cachedAxiosInstance.get('/transactions')`
  3. Update endpoint to your backend

### Navigation Structure

```
RootStackParamList:
  - TransactionList: undefined
  - TransactionDetail: { refId: string }
```

Header styling:

- Background: AEON primaryDark (#8B0000)
- Title: White, bold
- Back button: White

## Architectural Patterns Applied

### 1. Screen + Hook Separation

Every screen has two files:

- `ScreenName.tsx` — Pure UI, no logic
- `useScreenName.ts` — All business logic, hooks, navigation

This makes testing easier and keeps components focused.

### 2. Atomic Design

- **Atoms**: Reusable basic elements (Badge, AmountText, Divider)
- **Molecules**: Combine atoms (TransactionItem, TransactionDetailRow)
- **Organisms**: Combine molecules, receive handlers as props (TransactionList, TransactionDetailCard)

Components never import from screens or store — only screens do.

### 3. Zustand for Global State

Lightweight store for transaction data, loading state, and errors. No extra middleware needed.

### 4. Axios with Caching

Mock requests are intercepted and return data instantly. Real requests are cached for 5 minutes to reduce API load.

## TypeScript Types

All types are defined in `src/types/transaction.ts`:

```typescript
interface Transaction {
  refId: string;
  transferDate: string; // ISO 8601 format
  recipientName: string;
  transferName: string;
  amount: number; // Positive or negative
}
```

## Styling Notes

All styling uses **NativeWind (Tailwind CSS for React Native)**. No `StyleSheet.create()` used.

Key classes applied:

- `bg-primary` — AEON red buttons
- `bg-primaryDark` — Header/dark sections
- `text-credit` — Green positive amounts
- `text-debit` — Red negative amounts
- `rounded-xl` — Card rounded corners
- `shadow-lg` — Card shadows

## Testing the Feature

1. **List View**: Navigate to TransactionListScreen
   - Should show 4 mock transactions
   - Check loading spinner briefly appears
2. **Detail View**: Tap any transaction
   - All fields should populate correctly
   - Dates should be formatted nicely
3. **Share Function**: On detail screen, tap "Share Transaction"
   - Native share sheet appears
   - Message includes all transaction details

4. **Navigation**: Back button returns to list

## Troubleshooting

### Issue: "Module not found" errors

**Solution**: Ensure `tsconfig.json` has correct path aliases:

```json
"paths": {
  "@/*": ["./src/*"],
  "@/assets/*": ["./assets/*"]
}
```

### Issue: NativeWind classes not applying

**Solution**:

1. Restart Metro bundler: Press `Ctrl+C` and run `npm start` again
2. Ensure `babel.config.js` includes `'nativewind/babel'` plugin

### Issue: Transaction not found on detail screen

**Solution**: Ensure you're navigating with the correct `refId` from the list screen

### Issue: Axios cache not working

**Solution**: Cache TTL is set to 5 minutes (300000ms). If you want to clear cache between tests, modify `axiosInstance.ts`

## Next Steps

To connect to a real backend:

1. Update `transactionService.ts`:

   ```typescript
   export async function fetchTransactions(): Promise<Transaction[]> {
     const response = await cachedAxiosInstance.get("/api/transactions");
     return response.data.data; // Adjust based on your API response shape
   }
   ```

2. Set correct baseURL in `axiosInstance.ts`:

   ```typescript
   const baseURL = "https://your-api.com";
   ```

3. Add authentication headers if needed:
   ```typescript
   axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   ```

---

**Feature complete and ready to use!** 🎉

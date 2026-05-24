import TransactionDetailScreen from "@/screens/TransactionDetailScreen/TransactionDetailScreen";
import TransactionListScreen from "@/screens/TransactionListScreen/TransactionListScreen";
import { RootStackParamList } from "@/screens/TransactionListScreen/useTransactionListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#8B0000", // primaryDark
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen
          name="TransactionList"
          component={TransactionListScreen}
          options={{
            title: "Transactions",
          }}
        />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetailScreen}
          options={{
            title: "Transaction Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

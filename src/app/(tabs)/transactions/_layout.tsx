import { Stack } from "expo-router";

export default function TransactionsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#8B0000",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Transactions",
        }}
      />
      <Stack.Screen
        name="[refId]"
        options={{
          title: "Transaction Details",
        }}
      />
    </Stack>
  );
}

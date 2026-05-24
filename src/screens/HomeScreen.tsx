import { Colors } from "@/constants/theme";
import { ScrollView, Text, useColorScheme, View } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === "unspecified" ? "light" : colorScheme];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ padding: 16 }}
    >
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: colors.text,
            marginBottom: 8,
          }}
        >
          Welcome to AEON Bank
        </Text>
        <Text style={{ fontSize: 16, color: colors.text, opacity: 0.7 }}>
          Manage your finances on the go
        </Text>
      </View>

      <View
        style={{ backgroundColor: colors.tint, borderRadius: 12, padding: 16 }}
      >
        <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>
          Quick Actions
        </Text>
        <Text
          style={{ color: "white", opacity: 0.8, marginTop: 8, fontSize: 12 }}
        >
          View your account balance, transfer money, and check your transaction
          history from the Transactions tab.
        </Text>
      </View>
    </ScrollView>
  );
}

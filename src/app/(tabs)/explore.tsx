import { Colors } from "@/constants/theme";
import { ScrollView, Text, useColorScheme, View } from "react-native";

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === "unspecified" ? "light" : colorScheme];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ padding: 16 }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: colors.text,
          marginBottom: 16,
        }}
      >
        Explore
      </Text>
      <View
        style={{ backgroundColor: colors.tint, borderRadius: 12, padding: 16 }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "600",
            marginBottom: 8,
          }}
        >
          Banking Services
        </Text>
        <Text
          style={{
            color: "white",
            opacity: 0.8,
            fontSize: 12,
            marginBottom: 16,
          }}
        >
          Discover our range of banking services and features
        </Text>

        <Text style={{ color: "white", fontSize: 12, marginBottom: 8 }}>
          • Savings Accounts{"\n"}• Investment Options{"\n"}• Loan Services
          {"\n"}• Card Services
        </Text>
      </View>

      <View
        style={{
          marginTop: 16,
          backgroundColor: colors.tint,
          borderRadius: 12,
          padding: 16,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "600",
            marginBottom: 8,
          }}
        >
          Featured
        </Text>
        <Text style={{ color: "white", opacity: 0.8, fontSize: 12 }}>
          Check out our latest banking offers and promotions
        </Text>
      </View>
    </ScrollView>
  );
}

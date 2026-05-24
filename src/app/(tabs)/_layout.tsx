import { Colors } from "@/constants/theme";
import { Tabs } from "expo-router";
import { Image, useColorScheme } from "react-native";

export default function TabsLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === "unspecified" ? "light" : colorScheme];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#C8102E",
        tabBarInactiveTintColor: "#666666",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E5E7EB",
        },
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
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("@/assets/images/tabIcons/home.png")}
              style={{
                width: size,
                height: size,
                tintColor: color,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("@/assets/images/tabIcons/explore.png")}
              style={{
                width: size,
                height: size,
                tintColor: color,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarLabel: "Transactions",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("@/assets/images/tabIcons/explore.png")}
              style={{
                width: size,
                height: size,
                tintColor: color,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}

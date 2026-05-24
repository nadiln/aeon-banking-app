import { Text, View } from "react-native";

interface BadgeProps {
  label: string;
  variant: "credit" | "debit";
}

export function Badge({ label, variant }: BadgeProps) {
  const bgColor = variant === "credit" ? "bg-credit" : "bg-debit";
  return (
    <View className={`${bgColor} rounded-full px-3 py-1`}>
      <Text className="text-white text-xs font-semibold">{label}</Text>
    </View>
  );
}
